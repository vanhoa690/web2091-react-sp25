import { Route, Routes } from "react-router-dom";
import ProductList from "./pages/product/list";
import ProductAdd from "./pages/product/add";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/add" element={<ProductAdd/>}/>
        <Route path="/edit/:id" element={<ProductAdd/>}/>

      </Routes>
    </>
  );
}

export default App;
