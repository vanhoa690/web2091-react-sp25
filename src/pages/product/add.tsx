import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input, InputNumber, message } from "antd";
import axios from "axios";

function ProductAdd() {
  const addProduct = async (data: any) => {
    await axios.post("http://localhost:3000/products", data);
  };

  const { mutate } = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      message.success("Them san pham thanh cong");
    },
  });

  function onFinish(values: any) {
    console.log(values);
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

export default ProductAdd;
