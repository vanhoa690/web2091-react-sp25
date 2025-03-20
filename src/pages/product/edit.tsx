import { useQuery } from "@tanstack/react-query";
import { Button, Form, Input, InputNumber } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductEdit() {
  // lay data theo id ve : useQuery + useParams lay id va data
  const { id } = useParams();
  const [form] = Form.useForm();

  const getProductDetail = async () => {
    if (!id) return;
    const { data } = await axios.get(`http://localhost:3000/products/${id}`);
    return data;
  };
  const { data: product } = useQuery({
    queryKey: ["product"],
    queryFn: getProductDetail,
  });

  // data vao form : useForm trong Form cua Antd
  useEffect(() => {
    if (!product) return;
    form.setFieldsValue(product);
  }, [product]);

  // onFinish = useMutation
  return (
    <div>
      ProductEdit
      <Form form={form}>
        <Form.Item label="Name" name="name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true }, { type: "number", min: 0 }]}
        >
          <InputNumber />
        </Form.Item>
        <Button htmlType="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default ProductEdit;
