import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import type { InputOrder } from "../../interfaces/order";
import type IOrder from "../../interfaces/order";

function ProductAdd
() {

  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputOrder>();

  const onSubmit = async (dataInput: IOrder) => {
    // console.log(data);
    try {
      await axios.post("http://localhost:3000/orders", dataInput);
      toast.success("Them thanh cong");
      nav("/");
    } catch (error: any) {
      toast.error(error);
    }
  };

  return (
    <div>
      <h1>Thêm mới</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="customerName" className="form-label">
            Tên khách hàng
          </label>
          <input type="text" className="form-control" id="customerName" {...register("customerName",{
            required: "Không để trống tên khách hàng",
            minLength: {
              value: 6,
              message: "Tên khách hàng có tối thiểu 6 ký tự"
            }
          })}/>
          {errors.customerName && <p className="text-danger">{errors.customerName.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Tên sản phẩm
          </label>
          <input type="text" className="form-control" id="productName" {...register("productName")} />
        </div>
        <div className="mb-3">
          <label htmlFor="unit" className="form-label">
            Đơn vị tính
          </label>
          <select className="form-select" {...register("unit")}>
            <option value={'Cái'}>Cái</option>
            <option value={'Kg'}>Kg</option>
            <option value={'Cặp'}>Cặp</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Số lượng
          </label>
          <input type="number" className="form-control" id="price" {...register("quantity")} />
        </div>
        <div className="mb-3">
          <label htmlFor="customerName" className="form-label">
            Đơn giá
          </label>
          <input type="number" className="form-control" id="customerName" {...register("price",{
            required: "không để trống đơn giá",
            min: {
              value: 100000,
              message: "Đơn giá phải lớn hơn 100000"
            },
            pattern: {
              value: /^[0-9]+$/,
              message: "Đơn giá phải là số"
            }
          })} />
          {errors.price && <p className="text-danger">{errors.price.message}</p>}
        </div>


   
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ProductAdd;
;
