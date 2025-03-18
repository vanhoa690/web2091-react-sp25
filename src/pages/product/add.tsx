import { Button, Form, Input, InputNumber } from "antd";

function ProductAdd() {
  function onFinish(values: any) {
    console.log(values);
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
        <Form.Item label="Product Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Product Price" name="price">
          <InputNumber />
        </Form.Item>
        <Button htmlType="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default ProductAdd;
