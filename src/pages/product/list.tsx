import { Button, Image, Table } from "antd";
import { useList } from "../../hooks/useList";
import { Link } from "react-router-dom";

function ProductList() {
  const { data, isLoading } = useList({ resource: "products" });

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
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
        return (
          <Button type="primary">
            <Link to={`/product/${product.id}/edit`}>Edit</Link>
          </Button>
        );
      },
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
