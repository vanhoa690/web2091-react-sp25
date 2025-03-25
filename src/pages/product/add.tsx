import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input, InputNumber } from "antd";
import { create } from "../../providers";

type ProductForm = {
  name: string;
  price: number;
};

function ProductAdd() {
  const { mutate } = useMutation({
    mutationFn: (values: ProductForm) =>
      create({ resource: "products", values }),
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
