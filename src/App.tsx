import { useRoutes } from "react-router-dom";
import ProductList from "./pages/product/list";
import ProductAdd from "./pages/product/add";
import ProductEdit from "./pages/product/edit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  const element = useRoutes([
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
  ]);
  return (
    <QueryClientProvider client={queryClient}>{element}</QueryClientProvider>
  );
}

export default App;
