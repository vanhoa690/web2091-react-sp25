import { useQuery } from "@tanstack/react-query";
import { Table } from "antd";
import axios from "axios";

function UserList() {
  const getUserList = async () => {
    const { data } = await axios.get("/users");
    return data;
  };
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getUserList,
  });

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Email", dataIndex: "email", key: "email" },
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        loading={isLoading}
        rowKey="id"
      />
    </div>
  );
}

export default UserList;
