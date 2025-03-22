import { Button, Image, Popconfirm, Space, Table } from "antd";
import { useList } from "../../hooks/useList";
import { Link } from "react-router-dom";
import { useDelete } from "../../hooks/useDelete";

function ProductList() {
  const { data, isLoading } = useList({ resource: "products" });
  const { mutate } = useDelete({ resource: "products" });
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
          <Space>
            <Button type="primary">
              <Link to={`/product/${product.id}/edit`}>Edit</Link>
            </Button>
            <Popconfirm
              title="Delete the product"
              description="Are you sure to delete this product?"
              onConfirm={() => mutate(product.id)}
              okText="Yes"
              cancelText="No"
            >
              <Button danger>Delete</Button>
            </Popconfirm>
          </Space>
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
