import { useMutation, useQuery } from "@tanstack/react-query";
import { Button, DatePicker, Form, Input, message, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";

export default function Edit() {
  const nav = useNavigate();
  const { id } = useParams();
  const [form] = Form.useForm();

  const { data: todo } = useQuery({
    queryKey: ["todo"],
    queryFn: async () => {
      const { data } = await axios.get(`http://localhost:3000/todos/${id}`);
      return data;
    },
  });

  useEffect(() => {
    if (!todo) return;
    form.setFieldsValue({ ...todo, dueDate: dayjs(todo.dueDate) });
  }, [todo]);

  const { mutate } = useMutation({
    mutationFn: async (values) => {
      await axios.put(`http://localhost:3000/todos/${id}`, values);
      message.success("them thanh cong");
      nav("/");
    },
  });

  const onFinish = (values: any) => {
    mutate(values);
  };
  return (
    <Form form={form} onFinish={onFinish}>
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
          {
            validator: (_, value) => {
              if (value.isBefore(dayjs(), "day")) {
                return Promise.reject("Khong cho chon ngay trong qua khu");
              }
              return Promise.resolve();
            },
          },
        ]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        label="status"
        name="status"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          options={[
            {
              label: "Hoan thanh",
              value: true,
            },
            {
              label: "Chua hoan thanh",
              value: false,
            },
          ]}
        ></Select>
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
