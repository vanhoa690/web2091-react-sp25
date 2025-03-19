import { useQuery } from "@tanstack/react-query";
import { Table } from "antd";
import axios from "axios";

function CategoryList() {
  const getAllCateory = async () => {
    const { data } = await axios.get("/categories");
    return data;
  };
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCateory,
  });

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Name", dataIndex: "name", key: "name" },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      loading={isLoading}
      rowKey="id"
    />
  );
}

export default CategoryList;
