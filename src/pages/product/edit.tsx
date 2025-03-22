import { useParams } from "react-router-dom";
import { useOne } from "../../hooks/useOne";
import { Button, Form, Input, InputNumber } from "antd";
import { useUpdate } from "../../hooks/useUpdate";
import { useEffect } from "react";

function ProductEdit() {
  const { id } = useParams();
  const [form] = Form.useForm();
  const { data: product } = useOne({ resource: "products", id });
  console.log(product);

  useEffect(() => {
    if (!product) return;
    form.setFieldsValue(product);
  }, [product]);
  const { mutate } = useUpdate({
    resource: "products",
    id,
  });

  function onFinish(values: any) {
    mutate(values);
  }
  return (
    <div>
      ProductEdit
      <Form onFinish={onFinish} form={form}>
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
