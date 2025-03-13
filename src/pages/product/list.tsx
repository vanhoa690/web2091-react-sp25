import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import type IOrder from "../../interfaces/order";

function ProductList() {
 
  const [orders, setOrders] = useState<IOrder[]>([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const {data} = await axios.get("http://localhost:3000/orders");
        if(data){
          setOrders(data);
        }
        
      } catch (error: any) {
        toast.error(error);
      }
    }

      getOrders();
  }, []);

  const deleteOrder = async (id: number) => {
    try {
      if(window.confirm("Ban chac chan muon xoa?")){
        await axios.delete(`http://localhost:3000/orders/${id}`);
        toast.success("Xoa thanh cong");
      }
      
      
      setOrders(orders.filter((item: IOrder) => item.id !== id));
    } catch (error: any) {
      toast.error(error);
    }
  }


  return (
    <div>
      <h1>Danh sách</h1>
      <table className="table table-hover table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Tên khách hàng</th>
            <th scope="col">Tên sản phẩm</th>
            <th scope="col">Đơn vị tính</th>
            <th scope="col">Số lượng</th>
            <th scope="col">Đơn giá</th>
            <th scope="col">Hành động</th>

          </tr>
        </thead>
        <tbody>
          {
            orders.map((item: IOrder, index:number) => {
              return (
                <tr key={index}>
                  <th scope="row">{item.id}</th>
                  <td>{item.customerName}</td>
                  <td>{item.productName}</td>
                  <td>{item.unit}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>
                    <button onClick={() => deleteOrder(item.id)} className="btn btn-danger">Xóa</button>
                    <Link to={`/edit/${item.id}`} className="btn btn-primary">Sửa</Link>
                  </td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
    </div>
  );
}

export default ProductList;