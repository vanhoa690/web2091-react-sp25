import { Layout, Menu } from "antd";
import { Outlet, Link } from "react-router-dom";
import {
  DashboardOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

const AdminLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sider collapsible>
        <div
          className="logo"
          style={{
            height: 64,
            textAlign: "center",
            color: "white",
            fontSize: 20,
            lineHeight: "64px",
          }}
        >
          Admin Panel
        </div>
        <Menu theme="dark" mode="inline">
          <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
            <Link to="/admin/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="users" icon={<UserOutlined />}>
            <Link to="/admin/products">Products</Link>
          </Menu.Item>
          <Menu.Item key="users" icon={<UserOutlined />}>
            <Link to="/admin/users">Users</Link>
          </Menu.Item>
          <Menu.Item key="orders" icon={<ShoppingCartOutlined />}>
            <Link to="/admin/orders">Orders</Link>
          </Menu.Item>
          <Menu.Item key="logout" icon={<LogoutOutlined />} danger>
            Logout
          </Menu.Item>
        </Menu>
      </Sider>

      {/* Main Content */}
      <Layout>
        <Header
          style={{ background: "#fff", padding: "0 20px", textAlign: "right" }}
        >
          <span>Admin Dashboard</span>
        </Header>
        <Content style={{ margin: "16px", padding: 24, background: "#fff" }}>
          <Outlet /> {/* Render nội dung trang con */}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
