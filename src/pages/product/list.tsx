import { Image, Table } from "antd";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// function component
function ProductList() {
  // call API ve
  const getAllProduct = async () => {
    const { data } = await axios.get("http://localhost:3000/products");
    return data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProduct,
  });

  console.log({ data, isLoading, error });

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
      render: (image: string) => {
        return <Image src={image} width={100} />;
      },
    },
    {
      title: "Description",
      dataIndex: "desc",
      key: "desc",
    },
  ];
  return <Table dataSource={data} columns={columns} />;
}

export default ProductList;
