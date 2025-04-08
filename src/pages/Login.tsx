import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input, message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();
  const { mutate } = useMutation({
    mutationFn: async (values) => {
      const { data } = await axios.post("http://localhost:3000/login", values);
      localStorage.setItem("token", data.accessToken);
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
      <Button htmlType="submit">Submit</Button>
    </Form>
  );
}
