import { Layout, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { Link } from "react-router-dom";
import "antd/dist/reset.css";

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/">WEB2091</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/">Products</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/">Add Product</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <main style={{ padding: "0 100px" }}>
        <h1 style={{ textAlign: "center", margin: 10 }}>Bài Làm</h1>
      </main>
    </Layout>
  );
}

export default App;
