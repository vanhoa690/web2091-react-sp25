import { Cart, CartAction, CartState } from "../types";

export const initialState: CartState = {
  carts: [],
};

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "SET_CART":
      return {
        ...state,
        carts: action.payload,
      };
    case "ADD_TO_CART":
      const existingProduct = state.carts.find(
        (item: Cart) => item.product.id === action.payload.product.id
      );
      if (existingProduct) {
        return {
          ...state,
          carts: state.carts.map((item) =>
            item.product.id === action.payload.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        ...state,
        carts: [...state.carts, { ...action.payload, quantity: 1 }],
      };

    case "CLEAR_CART":
      return { ...state, carts: [] };
    default:
      return state;
  }
}
