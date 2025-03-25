import { Button, Image, Popconfirm, Space, Table } from "antd";
import { Link } from "react-router-dom";
import { useDelete, useList } from "../../hooks";

function ProductList() {
  const { data, isLoading } = useList({ resource: "products" });
  const { mutate } = useDelete({ resource: "products" });

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
    {
      title: "Actions",
      render: (product: any) => {
        return (
          <Space>
            <Button type="primary">
              <Link to={`/product/${product.id}/edit`}>Edit</Link>
            </Button>
            <Popconfirm
              title="Xóa sản phẩm này nhé"
              description="Bạn có chắc không?"
              onConfirm={() => mutate(product.id)}
              okText="Có"
              cancelText="Không"
            >
              <Button danger>Delete</Button>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];
  return <Table dataSource={data} columns={columns} loading={isLoading} />;
}

export default ProductList;
