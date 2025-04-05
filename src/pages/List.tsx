import { useQuery } from "@tanstack/react-query";
import { Table, Image } from "antd";
import axios from "axios";

export default function List() {
  const { data: dataSource } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:3000/products");
      return data;
    },
  });
  const columns = [
    { title: "ID", dataIndex: "id" },
    { title: "Name", dataIndex: "name" },
    { title: "Price", dataIndex: "price" },
    {
      title: "Image",
      dataIndex: "imageUrl",
      render: (src: string) => <Image src={src} width={200} />,
    },
    { title: "Desc", dataIndex: "description" },
  ];
  return <Table dataSource={dataSource} columns={columns} />;
}
