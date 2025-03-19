import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  FormProps,
  Input,
  message,
  Rate,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from "antd";
import { useNavigate } from "react-router-dom";
import { addProduct, ProductForm } from "../../services/product";
import { useMutation, useQuery } from "@tanstack/react-query";
import { PlusOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";

function ProductAdd() {
  const { RangePicker } = DatePicker;

  const [form] = Form.useForm();
  const nav = useNavigate();
  const getAllCateory = async () => {
    const { data } = await axios.get("/categories");
    return data;
  };
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCateory,
  });
  console.log({ categories });

  const { mutate: handleAdd } = useMutation({
    mutationFn: addProduct,
  });

  const onFinish: FormProps<ProductForm>["onFinish"] = (values) => {
    handleAdd(values, {
      onSuccess: () => {
        message.success("Thêm sản phẩm thành công!");
        nav("/admin/product/list");
      },
      onError: () => {
        message.error("Lỗi khi thêm sản phẩm!");
      },
    });
  };
  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="price"
        label="Price"
        rules={[{ required: true, message: "Please enter price" }]}
      >
        <Input type="number" />
      </Form.Item>
      <Form.Item name="image" label="Image" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Checkbox" name="isFeature" valuePropName="checked">
        <Checkbox>Is Feature</Checkbox>
      </Form.Item>
      <Form.Item label="TreeSelect">
        <TreeSelect
          treeData={[
            {
              title: "Light",
              value: "light",
              children: [{ title: "Bamboo", value: "bamboo" }],
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="Category" name="category">
        <Select>
          {categories?.map((category: { id: number; name: string }) => (
            <Select.Option key={category.id} value={category.id}>
              {category.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="Description" name="description">
        <TextArea rows={4} />
      </Form.Item>
      <Form.Item label="DatePicker">
        <DatePicker />
      </Form.Item>
      <Form.Item label="RangePicker">
        <RangePicker />
      </Form.Item>
      <Form.Item label="Rate">
        <Rate />
      </Form.Item>
      <Form.Item label="Slider">
        <Slider />
      </Form.Item>
      <Form.Item label="Upload" valuePropName="fileList">
        <Upload listType="picture-card">
          <button
            style={{
              color: "inherit",
              cursor: "inherit",
              border: 0,
              background: "none",
            }}
            type="button"
          >
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
          </button>
        </Upload>
      </Form.Item>
      <Form.Item label="Switch" valuePropName="checked">
        <Switch />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ProductAdd;
