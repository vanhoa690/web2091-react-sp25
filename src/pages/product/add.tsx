import { Button, Form, Input, InputNumber } from "antd";
import { useCreate } from "../../hooks/useCreate";

function ProductAdd() {
  const { mutate } = useCreate({
    resource: "products",
  });

  function onFinish(values: any) {
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
