import { Button, Form, Input, InputNumber } from "antd";

function ProductEdit() {
  // lay data theo id ve : useQuery + useParams lay id va data
  // data vao form : useForm trong Form cua Antd
  // onFinish = useMutation
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
