import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../../type/product";

function ProductList() {
  const [product, setProduct] = useState<Product[]>([]);
  const handleList = async () => {
    try {
      const res = await axios.get("http://localhost:3000/products");
      console.log(res);
      setProduct(res.data);
    } catch (error) {
      console.log(error);
      alert("Lỗi, không call được API");
    }
  };

  useEffect(() => {
    handleList();
  }, []);
  const hanleDelte = (id: number) => {
    try {
      if (confirm("Bạn có muốn xóa không")) {
        axios.delete(`http://localhost:3000/products/${id}`);
        alert("Xóa thành công");
        handleList();
      }
    } catch (error) {
      console.log(error);
      alert("Lỗi");
    }
  };
  return (
    <div>
      <h1>Product List</h1>
      <a href="/product/add">
        <button type="button" className="btn btn-primary">
          Thêm sản phẩm
        </button>
      </a>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">NAME</th>
            <th scope="col">Description</th>
            <th scope="col">PRICE</th>
            <th scope="col">CATEGORY</th>
            <th scope="col">HÀNH ĐỘNG</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item, index) => (
            <tr key={index}>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
              <td>
                <button type="button" className="btn btn-danger">
                  Edit
                </button>
                <button
                  onClick={() => hanleDelte(item.id)}
                  type="button"
                  className="btn btn-primary"
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ProductList;
