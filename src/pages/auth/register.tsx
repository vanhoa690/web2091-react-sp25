import { Button, Form, Input } from "antd";
import { useAuth } from "../../hooks";

const Register = () => {
  const { mutate } = useAuth({ resource: "register" });
  const onFinish = (values: any) => {
    const { confirmPassword, ...params } = values;
    mutate(params);
  };
  return (
    <div>
      <h1>Register</h1>
      <Form style={{ padding: "100px" }} onFinish={onFinish}>
        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password />
        </Form.Item>
        <Form.Item label="Confirm Password" name="confirmPassword">
          <Input.Password />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Register;
