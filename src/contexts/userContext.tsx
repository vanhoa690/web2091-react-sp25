import { createContext, ReactNode } from "react";
// B1: Tạo Context để quản lý dữ liệu người dùng
export const UserContext = createContext(null);

// B2: Provider
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const user = { id: 1, email: "hoadv@example.com" };

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
