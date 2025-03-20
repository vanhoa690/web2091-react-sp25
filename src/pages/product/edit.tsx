import { useQuery } from "@tanstack/react-query";
import { Button, Form, Input, InputNumber } from "antd";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductEdit() {
  // get data product theo id
  const { id } = useParams();
  const getProductDetail = async () => {
    if (!id) return;
    const { data } = await axios.get(`http://localhost:3000/products/${id}`);
    return data;
  };
  const { data } = useQuery({
    queryKey: ["product"],
    queryFn: getProductDetail,
  });
  console.log({ data });

  // dien data vao form
  // onFinish
  return (
    <div>
      ProductEdit
      <Form>
        <Form.Item label="Name" name="name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true }, { type: "number", min: 0 }]}
        >
          <InputNumber />
        </Form.Item>
        <Button htmlType="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default ProductEdit;
