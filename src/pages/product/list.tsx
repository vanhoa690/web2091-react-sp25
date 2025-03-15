import { Image, Table } from "antd";

function ProductList() {
  const dataSource = [
    {
      key: "1",
      name: "Mike Name",
      price: 32,
      image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
      description: "mo ta",
    },
    {
      key: "2",
      name: "Mike",
      price: 32,
      image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
      description: "mo ta",
    },
  ];
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
      dataIndex: "description",
      key: "description",
    },
  ];
  return <Table dataSource={dataSource} columns={columns} />;
}

export default ProductList;
