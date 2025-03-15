import { Image, Table } from "antd";

// function component
function ProductList() {
  // JSX
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      price: 32,
      image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
      desc: "mo ta",
    },
    {
      key: "2",
      name: "Mike 2",
      price: 322,
      image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
      desc: "mo ta",
    },
  ]; // products
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
        console.log(image);
        return <Image src={image} width={100} />;
      },
    },
    {
      title: "Description",
      dataIndex: "desc",
      key: "desc",
    },
  ];

  return <Table dataSource={dataSource} columns={columns} />;
}

export default ProductList;
