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
          path: "users", // /admin/user/list
          element: <UserList />,
        },
        {
          path: "products",
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
      element: <ClientLayout />,
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
  return (
    <main>{element}</main>
    // <Layout style={{ minHeight: "100vh" }}>
    //   <Header>
    //     <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
    //       <Menu.Item key="1">
    //         <Link to="/">React Antd</Link>
    //       </Menu.Item>
    //       <Menu.Item key="2">
    //         <Link to="/product/list">Products</Link>
    //       </Menu.Item>
    //       <Menu.Item key="3">
    //         <Link to="/product/add">Add Product</Link>
    //       </Menu.Item>
    //       <Menu.Item key="4">
    //         <Link to="/register">Register</Link>
    //       </Menu.Item>
    //       <Menu.Item key="5">
    //         <Link to="/user/list">User List</Link>
    //       </Menu.Item>
    //       <Menu.Item key="6">
    //         <Link to="/login">Login</Link>
    //       </Menu.Item>
    //     </Menu>
    //   </Header>

    // </Layout>
  );
}

export default App;
