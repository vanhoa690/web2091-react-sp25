import { Layout, Menu, Avatar, Badge, Dropdown } from "antd";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Link, Outlet } from "react-router-dom";
import { useUser } from "../contexts/userContext";
import { useCart } from "../contexts/carContext";
import { useMemo } from "react";

const { Header, Content } = Layout;

const ClientLayout = () => {
  const { user, logout } = useUser();
  const {
    state: { carts },
  } = useCart();

  const quantity = useMemo(
    () =>
      carts.reduce((total, item) => {
        return total + item.quantity;
      }, 0) || 0,
    [carts]
  );

  const userMenu = (
    <Menu>
      <Menu.Item key="profile">
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item key="logout" onClick={logout}>
        Logout
      </Menu.Item>
    </Menu>
  );
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Menu theme="dark" mode="horizontal" style={{ flex: 1 }}>
          <Menu.Item key="home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="shop">
            <Link to="/admin">Admin</Link>
          </Menu.Item>
        </Menu>

        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {/* Giỏ hàng */}
          <Badge count={quantity}>
            <ShoppingCartOutlined
              style={{ fontSize: "24px", color: "white" }}
            />
          </Badge>

          {/* Người dùng */}
          {user ? (
            <Dropdown overlay={userMenu} trigger={["click"]}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <Avatar icon={<UserOutlined />} />
                <span style={{ marginLeft: "8px", color: "white" }}>
                  {user?.email || "Guest"}
                </span>
              </div>
            </Dropdown>
          ) : (
            <div style={{ display: "flex", gap: "10px" }}>
              <Link to="/login" style={{ color: "white" }}>
                Login
              </Link>
              <Link to="/register" style={{ color: "white" }}>
                Register
              </Link>
            </div>
          )}
        </div>
      </Header>
      <Content style={{ padding: "20px 50px" }}>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default ClientLayout;
