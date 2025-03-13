import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import toast from 'react-hot-toast';

function Product() {
  const [schools, setSChools] = useState();
  useEffect(() => {
    const getAllSchool = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/products`);
        setSChools(data);
      } catch (error) {
        toast.error((error as AxiosError).message);
      }
    };
    getAllSchool();
  }, []);
  const handleDelete = async (id: string) => {
    if (window.confirm('Xóa nhé')) {
      try {
        await axios.delete(`http://localhost:3000/products/${id}`);
        toast.success('Xóa thành công');
        setSChools((prev) => prev.filter((item) => item.id !== id));
      } catch (error) {
        toast.error((error as AxiosError).message);
      }
    }
  };

  return (
    <div>
      <h1>Danh sách</h1>
      <table className="table table-hover table-bordered table-striped">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên trường </th>
            <th>adrress </th>
            <th>ảnh</th>
            <th>số lượngdsfsdfsdfdfsdfds</th>
            <th>Danh mục</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {schools?.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.adrress}</td>
                <td>
                  <img
                    src={item.imageURL}
                    alt={item.title}
                    style={{ width: 100 }}
                  />
                </td>
                <td>{item.count}</td>
                <td>{item.category}</td>

                <td>
                  <button onClick={() => handleDelete(item.id)}>Xóa</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Product;
