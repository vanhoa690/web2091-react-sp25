import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect } from "react";
import type { InputOrder } from "../../interfaces/order";
import type IOrder from "../../interfaces/order";

function ProductEdit() {
  const nav = useNavigate();
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InputOrder>();

  useEffect(() => {
    if (!id) return;

    const getOrder = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/orders/${id}`);
        console.log("Dữ liệu đơn hàng:", data);
        reset(data); // Cập nhật dữ liệu vào form
      } catch (error: any) {
        toast.error("Lỗi khi tải dữ liệu đơn hàng");
      }
    };

    getOrder();
  }, [id, reset]);

  const onSubmit = async (dataInput: IOrder) => {
    try {
      await axios.put(`http://localhost:3000/orders/${id}`, dataInput);
      toast.success("Cập nhật thành công");
      nav("/order"); // Đã sửa lỗi "/oder" -> "/order"
    } catch (error: any) {
      toast.error("Lỗi khi cập nhật đơn hàng");
    }
  };

  return (
    <div>
      <h1>Cập nhật đơn hàng</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Tên khách hàng */}
        <div className="mb-3">
          <label htmlFor="customerName" className="form-label">
            Tên khách hàng
          </label>
          <input
            type="text"
            className="form-control"
            id="customerName"
            {...register("customerName", {
              required: "Không để trống tên khách hàng",
              minLength: {
                value: 6,
                message: "Tên khách hàng có tối thiểu 6 ký tự",
              },
            })}
          />
          {errors.customerName && <p className="text-danger">{errors.customerName.message}</p>}
        </div>

        {/* Tên sản phẩm */}
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Tên sản phẩm
          </label>
          <input type="text" className="form-control" id="productName" {...register("productName")} />
        </div>

        {/* Đơn vị tính */}
        <div className="mb-3">
          <label htmlFor="unit" className="form-label">
            Đơn vị tính
          </label>
          <select className="form-select" id="unit" {...register("unit")}>
            <option value="Cái">Cái</option>
            <option value="Kg">Kg</option>
            <option value="Cặp">Cặp</option>
          </select>
        </div>

        {/* Số lượng */}
        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">
            Số lượng
          </label>
          <input type="number" className="form-control" id="quantity" {...register("quantity")} />
        </div>

        {/* Đơn giá */}
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Đơn giá
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            {...register("price", {
              required: "Không để trống đơn giá",
              min: {
                value: 100000,
                message: "Đơn giá phải lớn hơn 100000",
              },
              pattern: {
                value: /^[0-9]+$/,
                message: "Đơn giá phải là số",
              },
            })}
          />
          {errors.price && <p className="text-danger">{errors.price.message}</p>}
        </div>

        {/* Nút Submit */}
        <button type="submit" className="btn btn-primary">
          Cập nhật
        </button>
      </form>
    </div>
  );
}

export default ProductEdit;
