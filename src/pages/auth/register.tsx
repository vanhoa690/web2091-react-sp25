import { Button, Form, Input } from "antd";
import { useAuth } from "../../hooks";

function Register() {
  const { mutate } = useAuth({ resource: "register" });
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
      Register
      <Form onFinish={onFinish}>
        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password />
        </Form.Item>
        <Form.Item label="Confirm Password">
          <Input.Password />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Register;
