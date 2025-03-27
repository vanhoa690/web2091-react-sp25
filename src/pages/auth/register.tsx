import { useAuth } from "../../hooks";

const Register = () => {
  const { mutate } = useAuth({ resource: "register" });
  const onFinish = (values: any) => {
    mutate(values);
  };
  return <div>Register</div>;
};

export default Register;
