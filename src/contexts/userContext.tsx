import { createContext } from "react";

const UserContext = createContext(null);

export const UserProvider = ({ children }: { children: any }) => {
  const user = { name: "Hoadv", email: "hoadv@example.com" };

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
