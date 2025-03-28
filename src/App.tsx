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

const { Header } = Layout;

function App() {
  const element = useRoutes([
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/users",
      element: <UserList />,
    },
    {
      path: "/products",
      element: <ProductList />,
    },
    {
      path: "/product/add",
      element: <ProductAdd />,
    },
    {
      path: "/product/:id/edit",
      element: <ProductEdit />,
    },
  ]);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/">React Antd</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/products">Products</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/product/add">Add Product</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/register">Register</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/users">User List</Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="/login">Login</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <main style={{ padding: "0 100px" }}>{element}</main>
    </Layout>
  );
}

export default App;
