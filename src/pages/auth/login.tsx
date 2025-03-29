import { Button, Form, Input } from "antd";
import { useAuth } from "../../hooks";

function Login() {
  const { mutate } = useAuth({ resource: "login" });
  const onFinish = (values: any) => {
    mutate(values);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 30,
        marginTop: 30,
      }}
    >
      Login
      <Form onFinish={onFinish}>
        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password">
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
