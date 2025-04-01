import { Outlet } from "react-router-dom";

const ClientLayout = () => {
  return (
    <div>
      <h2>Client Page</h2>
      <Outlet /> {/* Render trang con như Login, Register */}
    </div>
  );
};

export default ClientLayout;
