import { useQuery } from "@tanstack/react-query";
import { Button, Image, Table } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductList() {
  const getAllProduct = async () => {
    const { data } = await axios.get("http://localhost:3000/products");
    return data;
  };
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProduct,
  });

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (imageSrc: string) => {
        return <Image src={imageSrc} width={100} />;
      },
    },
    {
      title: "Description",
      dataIndex: "desc",
      key: "desc",
    },
    {
      title: "Actions",
      render: (product: any) => {
        console.log({ product });
        return (
          <>
            <Button type="primary">
              <Link to={`/product/${product.id}/edit`}>Edit</Link>
            </Button>
            <Button variant="filled" color="danger">
              Delete
            </Button>
          </>
        );
      },
    },
  ];
  return <Table dataSource={data} columns={columns} loading={isLoading} />;
}

export default ProductList;
