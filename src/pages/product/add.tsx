import { useForm } from "react-hook-form";
import { Product } from "../../type/product";

function ProductAdd() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>();
  const addProduct = (data) => {
    console.log("a");
  };
  return (
    <div>
      <h1>Product Add</h1>
      <form onSubmit={handleSubmit(addProduct)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Tên
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            {...register("name", {
              required: "Không được bỏ trống",
              minLength: {
                value: 3,
                message: "Ít nhất 3 kí tự",
              },
            })}
          />
          {errors.name && (
            <small className="text-danger">{errors?.name?.message}</small>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Mô tả
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            {...register("description", {
              required: "Không được bỏ trống",
              minLength: {
                value: 3,
                message: "Ít nhất 3 kí tự",
              },
            })}
          />
          {errors.description && (
            <small className="text-danger">
              {errors?.description?.message}
            </small>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Giá
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputPassword1"
            {...register("price", {
              required: "Không được bỏ trống",
              minLength: {
                value: 3,
                message: "Ít nhất 3 kí tự",
              },
            })}
          />
          {errors.price && (
            <small className="text-danger">{errors?.price?.message}</small>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Giá
          </label>
          <select
            className="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
          >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">3</option>
            
          </select>
          {errors.price && (
            <small className="text-danger">{errors?.price?.message}</small>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Thêm sản phẩm
        </button>
      </form>
    </div>
  );
}
export default ProductAdd;
