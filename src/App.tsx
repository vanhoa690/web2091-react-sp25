import { useRoutes } from "react-router";
import "./App.css";
import ProductList from "./pages/list";
import ProductAdd from "./pages/add";
import ProductEdit from "./pages/edit";

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
  return <div>{element}</div>;
}

export default App;
