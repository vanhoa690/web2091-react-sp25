import { useQuery } from "@tanstack/react-query";
import { Image, Table } from "antd";
import axios from "axios";

function ProductList() {
  const getAllProduct = async () => {
    const { data } = await axios.get("http://localhost:4000/products");
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
  ];
  return <Table dataSource={data} columns={columns} loading={isLoading} />;
}

export default ProductList;
