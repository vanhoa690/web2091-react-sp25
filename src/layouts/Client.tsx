import { Layout, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../contexts/userContext";

const ClientLayout = () => {
  const context = useContext(UserContext);
  const { user } = context;
  console.log(user);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/">React Antd</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/admin">Admin</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/register">Register</Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="/login">Login</Link>
          </Menu.Item>
        </Menu>
      </Header>
      Email User: {user?.email}
      <Outlet />
    </Layout>
  );
};

export default ClientLayout;
