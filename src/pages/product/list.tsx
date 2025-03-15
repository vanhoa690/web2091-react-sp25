import { Image, Table, Button, Modal } from "antd";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import confirm from "antd/es/modal/confirm";

function ProductList() {
  const getAllProduct = async () => {
    const { data } = await axios.get("http://localhost:3000/products");
    return data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProduct,
  });

  const handleEdit = (id) => {
    console.log("Edit product with ID:", id);
  };

  const handleDelete = (id: string) => {
    Modal.confirm({
      title: "Bạn có muốn xóa không?",
      onOk: async () => {
        try {
          await axios.delete(`http://localhost:3000/products/${id}`);
          alert("Xóa thành công");
          getAllProduct();
        } catch (error) {
          console.log(error);
          alert("Lỗi");
        }
      },
    });
  };

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
      render: (image) => {
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
      key: "actions",
      render: (text, record) => (
        <>
          <Button onClick={() => handleEdit(record.id)}>Edit</Button>
          <Button
            onClick={() => handleDelete(record.id)}
            danger
            style={{ marginLeft: 8 }}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return <Table dataSource={data} columns={columns} rowKey="id" />;
}

export default ProductList;
