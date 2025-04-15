import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Table, Image, Button, message, Tag, Space } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function List() {
  const qc = useQueryClient();
  const nav = useNavigate();
  const { data: dataSource } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:3000/todos");
      return data;
    },
  });

  const { mutate } = useMutation({
    mutationFn: async (id) => {
      if (confirm("Xoas?")) {
        await axios.delete(`http://localhost:3000/todos/${id}`);
        message.success("xoa ok");
        qc.invalidateQueries({
          queryKey: ["todos"],
        });
      }
    },
  });

  const columns = [
    { title: "ID", dataIndex: "id" },
    { title: "title", dataIndex: "title" },
    {
      title: "dueDate",
      dataIndex: "dueDate",
    },
    {
      title: "priority",
      dataIndex: "priority",
    },
    {
      title: "status",
      dataIndex: "status",
      render: (status: boolean) => (
        <Tag>{status ? "Hoan thanh" : "Chua hoan thanh"}</Tag>
      ),
    },
    { title: "Desc", dataIndex: "description" },
    {
      title: "Actions",
      render: (todo: any) => (
        <Space>
          <Button onClick={() => mutate(todo.id)} danger>
            Delete
          </Button>
          <Button onClick={() => nav(`/edit/${todo.id}`)}>Edit</Button>
        </Space>
      ),
    },
  ];
  return <Table dataSource={dataSource} columns={columns} />;
}
