import { useEffect, useState } from "react";
import axios from "axios";
import { Iproduct } from "../../interface/type";

function List() {
  const[product, setProduct] = useState<Iproduct[]>([])
  const getList = async() =>{
    try {
      const {data} = await axios.get("http://localhost:3000/products")
      setProduct(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getList()
  }, [])

  const deleteProduct = async(id:string|number) => {
    if(confirm("Bạn có chắc chắn muốn xóa sản phẩm không?")){
      try {
        await axios.delete(`http://localhost:3000/products/${id}`)
        alert("Xóa thành công");
        getList();
      } catch (error) {
        console.log(error)
      }
    }
  }
  return (
    <div className="container">
        <h2 className="text-center">Danh sách sản phẩm</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Image</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item,index)=>(
              <tr key={index}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td><img src={item.image} alt="" style={{width: "100px"}}/></td>
                <td>
                  <a href={`/product/edit/${item.id}`} className="btn"><button className="btn btn-info">Edit</button></a>
                  <button onClick={()=>deleteProduct(item.id)} className="btn btn-danger">Delete</button>
                </td>
              </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  );
}
export default List; 
