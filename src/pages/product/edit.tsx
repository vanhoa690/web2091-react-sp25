import { Button, Form, Input, message } from "antd";
import axios, { AxiosError } from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
function ProductEdit() {
  const { id } = useParams();

  const [form] = Form.useForm();

  async function getProductDetail(id: string) {
    const { data } = await axios.get(`/products/${id}`);
    form.setFieldsValue(data);
  }

  useEffect(() => {
    if (!id) return;
    getProductDetail(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      await axios.put(`/products/${id}`, values);
      alert("ok");
      message.success("Bubble tea product added");
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
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ProductEdit;
