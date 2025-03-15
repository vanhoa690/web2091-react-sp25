import { Image, Table } from "antd";

// function component
function ProductList() {
  // call API ve
  const products = [
    {
      key: "1",
      name: "San pham A",
      price: 32,
      image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
      desc: "mo ta",
    },
    {
      key: "2",
      name: "San pham A",
      price: 32,
      image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
      desc: "mo ta",
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
      render: (image: string) => {
        return <Image src={image} width={100} />;
      },
    },
    {
      title: "Description",
      dataIndex: "desc",
      key: "desc",
    },
  ];
  return <Table dataSource={products} columns={columns} />;
}

export default ProductList;
