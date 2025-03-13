import { Button, Form, Input, message } from "antd";
import axios, { AxiosError } from "axios";

function ProductAdd() {
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      await axios.post("/products", values);
      message.success("Bubble tea product added");
      form.resetFields();
    } catch (error) {
      message.error(
        "Error saving bubble tea product" + (error as AxiosError).message
      );
    }
  };
  return (
    <Form form={form} onFinish={handleSubmit} layout="vertical">
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="price"
        label="Price"
        rules={[{ required: true, message: "Please enter price" }]}
      >
        <Input type="number" />
      </Form.Item>
      <Form.Item name="image" label="Image" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ProductAdd;
