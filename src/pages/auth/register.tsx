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
    </div>
  );
}

export default Register;
