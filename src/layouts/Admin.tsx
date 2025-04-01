import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      {/* sidebar */}
      <h2>AdminLayout Page</h2>
      <Outlet /> {/* Render trang con như Login, Register */}
    </div>
  );
};

export default AdminLayout;
