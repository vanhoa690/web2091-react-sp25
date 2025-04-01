import { Table } from "antd";
import { useList } from "../../hooks";

function UserList() {
  const { data, isLoading } = useList({ resource: "users" });
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
  ];

  return <Table dataSource={data} columns={columns} loading={isLoading} />;
}

export default UserList;
