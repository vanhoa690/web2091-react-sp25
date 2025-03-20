import { Image, Table } from "antd";
import { useList } from "../../hooks/useList";

function ProductList() {
  const { data, isLoading } = useList({ resource: "products" });

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
  return (
    <div>
      <h1>Product List</h1>
      <Table dataSource={data} columns={columns} loading={isLoading} />
    </div>
  );
}

export default ProductList;
