import { useQuery } from "@tanstack/react-query";
import { Button, Image, Table } from "antd";
import { Link } from "react-router-dom";
import { getList } from "../../providers";

function ProductList() {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => getList({ resource: "products" }),
  });

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
          <Button type="primary">
            <Link to={`/product/${product.id}/edit`}>Edit</Link>
          </Button>
        );
      },
    },
  ];
  return <Table dataSource={data} columns={columns} loading={isLoading} />;
}

export default ProductList;
