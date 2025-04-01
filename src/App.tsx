import { useRoutes } from "react-router";
import ProductList from "./pages/product/list";
import ProductAdd from "./pages/product/add";
import ProductEdit from "./pages/product/edit";
import { Layout, Menu } from "antd";
import "antd/dist/reset.css"; // Ant Design v5 reset styles
import { Link } from "react-router-dom";
import Register from "./pages/auth/register";
import UserList from "./pages/user/list";
import Login from "./pages/auth/login";
import AdminLayout from "./layouts/Admin";
import ClientLayout from "./layouts/Client";

const { Header } = Layout;

function App() {
  const element = useRoutes([
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "users", // /admin/users
          element: <UserList />,
        },
        {
          path: "orders", // /admin/orders
          element: <UserList />,
        },
        {
          path: "products", // /admin/products
          element: <ProductList />,
        },
        {
          path: "product/add",
          element: <ProductAdd />,
        },
        {
          path: "product/:id/edit",
          element: <ProductEdit />,
        },
      ],
    },
    {
      path: "",
      element: <ClientLayout />, // /home /shop /carts/ orders
      children: [
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
  ]);
  return <main>{element}</main>;
}

export default App;
