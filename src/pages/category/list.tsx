import { Button, Image, Table } from "antd";
import { Link } from "react-router-dom";
import { useList } from "../../hooks";

function CategoryList() {
  const { data, isLoading } = useList({ resource: "categories" });
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
      render: (image: string) => {
        return <Image src={image} width={100} />;
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

  return <Table dataSource={data} columns={columns} loading={isLoading} />;
}

export default CategoryList;
