import { useQuery } from "@tanstack/react-query";
import { Button, Form, Input, InputNumber } from "antd";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetail } from "../../providers";

function ProductEdit() {
  const { id } = useParams();
  const [form] = Form.useForm();

  const { data: product } = useQuery({
    queryKey: ["product"],
    queryFn: () => getDetail({ resource: "products", id }),
  });
  console.log(product);

  useEffect(() => {
    if (!product) return;
    form.setFieldsValue(product); // reset form theo data product
  }, [product, form]);

  return (
    <div style={{ padding: "0 70px" }}>
      <h1>Product Edit</h1>
      <Form form={form}>
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

export default ProductEdit;
