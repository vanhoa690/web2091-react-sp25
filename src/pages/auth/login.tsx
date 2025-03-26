import { Button, Form, Input } from "antd";
import { useLogin } from "../../hooks";

type ProductForm = {
  name: string;
  price: number;
};

function Login() {
  const { mutate } = useLogin({ resource: "login" });

  function onFinish(values: ProductForm) {
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
      Register
      <Form onFinish={onFinish}>
        <Form.Item label="Email" name="email" rules={[{ required: true }]}>
          <Input type="email" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true }, { min: 6 }]}
        >
          <Input.Password />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login;
