import { useRoutes } from "react-router";
import ProductList from "./pages/product/list";
import ProductAdd from "./pages/product/add";
import ProductEdit from "./pages/product/edit";
import { Layout, Menu } from "antd";
import "antd/dist/reset.css"; // Ant Design v5 reset styles
import { Link } from "react-router-dom";

const { Header } = Layout;

function App() {
  const element = useRoutes([
    {
      path: "/product/list",
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
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/">React Antd</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/product/list">Products</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/product/add">Add Product</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <main style={{ padding: "0 100px" }}>{element}</main>
    </Layout>
  );
}

export default App;
