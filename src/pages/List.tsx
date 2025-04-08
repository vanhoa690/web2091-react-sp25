import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Table, Image, Button, message } from "antd";
import axios from "axios";

export default function List() {
  const qc = useQueryClient();

  const { data: dataSource } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:3000/products");
      return data;
    },
  });
  const { mutate } = useMutation({
    mutationFn: async (id) => {
      if (confirm("Xoa?")) {
        await axios.delete(`http://localhost:3000/products/${id}`);
        message.success("Xoa thanh cong");
        qc.invalidateQueries({ queryKey: ["products"] });
      }
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
    {
      title: "Actions",
      render: (product: any) => (
        <Button danger onClick={() => mutate(product.id)}>
          Delete
        </Button>
      ),
    },
  ];
  return <Table dataSource={dataSource} columns={columns} />;
}
