import { useRoutes } from "react-router-dom";
import ProductList from "./pages/product/list";
import { Layout, Menu } from "antd";
import "antd/dist/reset.css";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { useNavigate } from "react-router-dom";
import { UserOutlined, HomeOutlined, ShopOutlined } from "@ant-design/icons";
import ProductEdit from "./pages/product/edit";
import ProductAdd from "./pages/product/add";
import axios from "axios";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";

function App() {
  axios.defaults.baseURL = "http://localhost:3000";

  const nav = useNavigate();
  const routes = [
    {
      path: "auth/register",
      element: <Register />,
    },
    {
      path: "auth/login",
      element: <Login />,
    },
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
  ];
  const element = useRoutes(routes);
  const menuItems = [
    { key: "/admin", icon: <HomeOutlined />, label: "Dashboard" },
    { key: "/product/list", icon: <ShopOutlined />, label: "Products" },
    { key: "/admin/users", icon: <UserOutlined />, label: "Users" },
    { key: "/auth/register", icon: <UserOutlined />, label: "Register" },
    { key: "/auth/login", icon: <UserOutlined />, label: "Login" },
  ];
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={250} style={{ background: "#001529" }}>
        <div
          style={{
            height: "64px",
            color: "white",
            textAlign: "center",
            lineHeight: "64px",
            fontSize: "18px",
          }}
        >
          Admin Panel
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["/product/list"]}
          onClick={({ key }) => nav(key)}
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            background: "#fff",
            padding: "0 20px",
            fontSize: "20px",
            borderBottom: "1px solid #ddd",
          }}
        >
          Admin Dashboard
        </Header>
        <Content
          style={{
            margin: "20px",
            padding: "20px",
            background: "#fff",
            borderRadius: "8px",
          }}
        >
          {element}
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
