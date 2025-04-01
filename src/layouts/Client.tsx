import { Outlet } from "react-router-dom";

const ClientLayout = () => {
  return (
    <div>
      {/* header */}
      <h2>ClientLayout Page</h2>
      <Outlet /> {/* Render trang con như Login, Register */}
    </div>
  );
};

export default ClientLayout;
