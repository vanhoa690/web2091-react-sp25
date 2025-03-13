import { useForm } from "react-hook-form";
import { ProductForm } from "../interface/type";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddProduct(){
    const nav = useNavigate()
    const{
        register,
        handleSubmit,
        formState:{errors}
    } = useForm<ProductForm>()

    const onSubmit = async(product:ProductForm)=>{
        try {
            await axios.post("http://localhost:3000/products", product)
            alert("Thêm thành công")
            nav("/")
        } catch (error) {
            alert("Thêm thất bại")
            console.log(error)
        }
    }
    return (
        <div className="container">
            <h2 className="text-center">Thêm sản phẩm</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" className="form-control" {...register("name",{
                    required:"Name không được để trống"
                })} />
                <small className="text-danger">{errors.name?.message}</small>
                </div>
                <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Price</label>
                <input type="number" className="form-control" {...register("price", {
                    required:"Price không được để trống",
                    min:{
                        value:0,
                        message:"Price phải là số không âm"
                    }
                })} />
                <small className="text-danger">{errors.price?.message}</small>
                </div>
                <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Image</label>
                <input type="text" className="form-control" {...register("image",{
                    required:"Image không được để trống"
                })} />
                <small className="text-danger">{errors.image?.message}</small>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
} 
export default AddProduct;