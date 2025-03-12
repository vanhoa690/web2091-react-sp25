import { Button, Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductList() {
  axios.defaults.baseURL = "http://localhost:3000";
  const nav = useNavigate();
  const [products, setProducts] = useState([]);

  async function getProductList() {
    const { data } = await axios.get("/products");
    console.log(data);
    setProducts(data);
  }
  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Price", dataIndex: "price", key: "price" },
    {
      title: "Actions",
      render: (_, record) => {
        return (
          <>
            <Button
              onClick={() => nav(`/product/${record.id}/edit`)}
              type="link"
            >
              Edit
            </Button>
            <Button onClick={() => handleDelete(record.id)} type="link" danger>
              Delete
            </Button>
          </>
        );
      },
    },
  ];
  useEffect(() => {
    getProductList();
  }, []);

  async function handleDelete(id) {
    if (confirm("Di choi ko")) {
      try {
        await axios.delete(`/products/${id}`);
        setProducts(products.filter((product) => product.id !== id));
      } catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <div>
      <Button
        type="primary"
        style={{ marginBottom: 16 }}
        onClick={() => nav("/product/add")}
      >
        Add Bubble Tea
      </Button>
      <Table columns={columns} dataSource={products} rowKey="id" />
    </div>
  );
}

export default ProductList;
