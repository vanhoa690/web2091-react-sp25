import { useMutation } from "@tanstack/react-query";
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  message,
  Select,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Add() {
  const nav = useNavigate();

  const { mutate } = useMutation({
    mutationFn: async (values) => {
      await axios.post("http://localhost:3000/todos", values);
      message.success("them thanh cong");
      nav("/");
    },
  });

  const onFinish = (values: any) => {
    mutate(values);
  };
  return (
    <Form onFinish={onFinish} initialValues={{ status: false }}>
      <Form.Item
        label="title"
        name="title"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="dueDate"
        name="dueDate"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item label="status" name="status" valuePropName="checked">
        <Checkbox>Hoan thanh</Checkbox>
      </Form.Item>
      <Form.Item label="description" name="description">
        <TextArea></TextArea>
      </Form.Item>
      <Form.Item
        label="priority"
        name="priority"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          options={[
            {
              label: "Cao",
              value: "high",
            },
            {
              label: "Trung binh",
              value: "medium",
            },
            {
              label: "Thap",
              value: "low",
            },
          ]}
        ></Select>
      </Form.Item>
      <Button htmlType="submit">Submit</Button>
    </Form>
  );
}
