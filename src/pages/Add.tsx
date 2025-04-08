import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input, InputNumber, message, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Add() {
  const nav = useNavigate();

  const { mutate } = useMutation({
    mutationFn: async (values) => {
      await axios.post("http://localhost:3000/products", values);
      message.success("them thanh cong");
      nav("/");
    },
  });

  const onFinish = (values: any) => {
    mutate(values);
  };
  return (
    <Form onFinish={onFinish}>
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="price"
        name="price"
        rules={[
          {
            required: true,
          },
          {
            type: "number",
            min: 0,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        label="image"
        name="imageUrl"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="description" name="description">
        <TextArea></TextArea>
      </Form.Item>
      <Form.Item
        label="category"
        name="category"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select>
          <Select.Option value="BMW">BMW</Select.Option>
          <Select.Option value="Audi">Audi</Select.Option>
          <Select.Option value="Vin">Vin</Select.Option>
        </Select>
      </Form.Item>
      <Button htmlType="submit">Submit</Button>
    </Form>
  );
}
