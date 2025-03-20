import { useMutation, useQuery } from "@tanstack/react-query";
import { Button, Form, Input, InputNumber, message } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProductEdit() {
  // get data product theo id
  const { id } = useParams();
  const [form] = Form.useForm();
  const nav = useNavigate();

  const getProductDetail = async () => {
    if (!id) return;
    const { data } = await axios.get(`http://localhost:3000/products/${id}`);
    return data;
  };
  const { data: product } = useQuery({
    queryKey: ["product"],
    queryFn: getProductDetail,
  });

  useEffect(() => {
    if (!product) return;
    form.setFieldsValue(product);
  }, [product]);

  // onFinish: updateProduct: data, id + mutate trong useMutation
  const addProduct = async (data: any) => {
    if (!id) return;
    await axios.put(`http://localhost:3000/products/${id}`, data);
  };

  const { mutate } = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      message.success("Edit san pham thanh cong");
      nav("/product/list");
    },
    onError: () => {},
  });

  function onFinish(values: any) {
    mutate(values);
  }
  return (
    <div>
      ProductEdit
      <Form form={form} onFinish={onFinish}>
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
