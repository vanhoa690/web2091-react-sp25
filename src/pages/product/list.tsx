import { Button, Image, Table } from "antd";
import { Link } from "react-router-dom";
import { useList } from "../../hooks";

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
    {
      title: "Actions",
      render: (product: any) => {
        console.log({ product });
        return (
          <>
            <Button type="primary">
              <Link to={`/product/${product.id}/edit`}>Edit</Link>
            </Button>
            <Button variant="filled" color="danger">
              Delete
            </Button>
          </>
        );
      },
    },
  ];
  return <Table dataSource={data} columns={columns} loading={isLoading} />;
}

export default ProductList;
