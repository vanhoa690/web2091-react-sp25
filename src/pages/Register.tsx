import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input, message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const nav = useNavigate();
  const { mutate } = useMutation({
    mutationFn: async (values) => {
      await axios.post("http://localhost:3000/register", values);
      message.success("them thanh cong");
      nav("/login");
    },
  });

  const onFinish = (values: any) => {
    mutate({ ...values, confirmPassword: undefined });
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true }, { type: "email" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true }, { min: 6 }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="Confirm Password"
        name="confirmPassword"
        rules={[
          { required: true },
          { min: 6 },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("No matching"));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Button htmlType="submit">Submit</Button>
    </Form>
  );
}
