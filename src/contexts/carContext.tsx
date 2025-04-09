import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { useUser } from "./userContext";
import { create, getList, update } from "../providers";
import { useMutation, useQuery } from "@tanstack/react-query";
import { message } from "antd";
import { cartReducer, initialState } from "../reducers/cartReducer";
import { Cart, CartState, Product } from "../types";

type CartContextType = {
  state: CartState;
  addToCart: (product: Product) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const { user } = useUser();

  const { data: userCart } = useQuery({
    queryKey: ["carts"],
    queryFn: () => getList({ resource: `carts?userId=${user?.id}` }),
    enabled: !!user?.id,
  });

  useEffect(() => {
    if (user && userCart) {
      dispatch({ type: "SET_CART", payload: userCart });
    } else {
      dispatch({ type: "CLEAR_CART" });
    }
  }, [user, userCart]);

  const { mutate } = useMutation({
    mutationFn: (values: any) =>
      values.id
        ? update({ resource: "carts", values: values.cart, id: values.id })
        : create({ resource: "carts", values: values.cart }),
    onSuccess: (data) => {
      message.success("Them giỏ hàng thành công");
      dispatch({ type: "ADD_TO_CART", payload: data });
    },
  });

  const addToCart = (product: Product) => {
    if (!user) return;
    const existingCart = state.carts.find(
      (item: Cart) => item.product.id === product.id
    );

    mutate({
      id: existingCart?.id,
      cart: {
        userId: user.id,
        product,
        quantity: (existingCart?.quantity || 0) + 1,
      },
    });
  };
  return (
    <CartContext.Provider value={{ state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
