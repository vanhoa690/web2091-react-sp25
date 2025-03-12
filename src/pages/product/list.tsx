import { Button, Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Product = {
  id: number;
  name: string;
  price: number;
};

function ProductList() {
  const nav = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);

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
      render: (record: Product) => {
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

  async function handleDelete(id: number) {
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
