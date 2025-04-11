import { Button, Image, Input, Popconfirm, Select, Space, Table } from "antd";
import { Link } from "react-router-dom";
import { useDelete } from "../../hooks";
import { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { axiosClient } from "../../providers";

function ProductList() {
  const [searchText, setSearchText] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [filter, setFilter] = useState({
    category: "",
    status: "",
  });

  const { data, isLoading } = useQuery({
    queryKey: ["products", searchText, filter],
    queryFn: async () => {
      const params = [];

      if (searchText)
        params.push(`name_like=${encodeURIComponent(searchText)}`);
      if (filter.category)
        params.push(`category=${encodeURIComponent(filter.category)}`);

      if (filter.status)
        params.push(`status=${encodeURIComponent(filter.status)}`);

      const queryString = params.length > 0 ? `?${params.join("&")}` : "";

      const { data } = await axiosClient.get(`products${queryString}`);
      return data;
    },
  });
  const { mutate } = useDelete({ resource: "products" });

  const options = [
    {
      label: "BMW",
      value: "BMW",
    },
    {
      label: "Audi",
      value: "Audi",
    },
    {
      label: "Vin",
      value: "Vin",
    },
  ];
  const statusOptions = [
    {
      label: "Active",
      value: "true",
    },
    {
      label: "Inactive",
      value: "false",
    },
  ];
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (imageSrc: string) => {
        return <Image src={imageSrc} width={100} />;
      },
    },
    {
      title: "Description",
      dataIndex: "desc",
      key: "desc",
    },
    {
      title: "category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Actions",
      render: (product: any) => {
        return (
          <Space>
            <Button type="primary">
              <Link to={`/admin/product/${product.id}/edit`}>Edit</Link>
            </Button>
            <Popconfirm
              title="Delete the task"
              description="Are you sure to delete this task?"
              onConfirm={() => mutate(product.id)}
              okText="Cos"
              cancelText="ko"
            >
              <Button danger>Delete</Button>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];
  return (
    <div>
      <Space>
        <Space style={{ marginBottom: 16 }}>
          <Input
            placeholder="Nhập tên sản phẩm"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            style={{ width: 300 }}
          />
          <Button
            type="primary"
            icon={<SearchOutlined />}
            onClick={() => setSearchText(searchInput)}
          >
            Tìm kiếm
          </Button>
          <Select
            options={options}
            allowClear
            placeholder="Filter Category"
            style={{ width: "200px" }}
            onChange={(category) => setFilter({ ...filter, category })}
          />
          <Select
            options={statusOptions}
            allowClear
            placeholder="Filter Status"
            style={{ width: "200px" }}
            onChange={(status) => setFilter({ ...filter, status })}
          />
        </Space>
      </Space>
      <Table dataSource={data} columns={columns} loading={isLoading} />;
    </div>
  );
}

export default ProductList;
