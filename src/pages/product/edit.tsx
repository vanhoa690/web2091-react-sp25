import { useMutation, useQuery } from "@tanstack/react-query";
import { Button, Form, Input, InputNumber, message } from "antd";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOne, update } from "../../providers";

function ProductEdit() {
  // get data product theo id
  const { id } = useParams();
  const [form] = Form.useForm();
  const nav = useNavigate();

  const { data: product } = useQuery({
    queryKey: ["product"],
    queryFn: () => getOne({ resource: "products", id }),
  });

  useEffect(() => {
    if (!product) return;
    form.setFieldsValue(product);
  }, [product]);

  const { mutate } = useMutation({
    mutationFn: (values: any) => update({ resource: "products", id, values }),
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
