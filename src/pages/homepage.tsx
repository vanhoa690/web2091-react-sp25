import { useEffect } from "react";
import { useUser } from "../contexts/userContext";

export function Homepage() {
  const { user } = useUser();
  //   useEffect(() => {
  //     console.log("Chạy 1 lần khi component render");

  //     // Gọi API, khởi tạo dữ liệu ở đây
  //   }, []);

  //   useEffect(() => {
  //     console.log("Chạy mỗi khi user thay đổi", user);
  //   }, [user]);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Đang chạy mỗi giây...");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Dọn dẹp khi unmount hoặc khi deps thay đổi");
    };
  }, []);

  return <div>Homepage</div>;
}
