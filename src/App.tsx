import { useRoutes } from "react-router-dom";
import axios from "axios";
import "antd/dist/reset.css";
import ProductList from "./pages/product/list";
import ProductEdit from "./pages/product/edit";
import ProductAdd from "./pages/product/add";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";
import Homepage from "./pages/Homepage";
import AdminLayout from "./pages/layout/AdminLayout";
import ClientLayout from "./pages/layout/ClientLayout";
import ProductDetail from "./pages/client/product/detail";

function App() {
  axios.defaults.baseURL = "http://localhost:3000";

  const routes = [
    {
      path: "",
      element: <ClientLayout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/product/:id",
          element: <ProductDetail />,
        },
        {
          path: "auth/register",
          element: <Register />,
        },
        {
          path: "auth/login",
          element: <Login />,
        },
      ],
    },
    {
      path: "admin",
      element: <AdminLayout />,
      children: [
        {
          path: "product/list",
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
  ];
  const element = useRoutes(routes);

  return <>{element}</>;
}

export default App;
