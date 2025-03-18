import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input, InputNumber } from "antd";
import axios from "axios";

type ProductForm = {
  name: string;
  price: number;
};

function ProductAdd() {
  const addProduct = async (data: ProductForm) => {
    await axios.post("http://localhost:3000/products", data);
  };

  const { mutate } = useMutation({
    mutationFn: addProduct,
  });

  function onFinish(values: ProductForm) {
    mutate(values);
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 30,
        marginTop: 30,
      }}
    >
      ProductAdd
      <Form onFinish={onFinish}>
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Price" name="price">
          <InputNumber />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ProductAdd;
