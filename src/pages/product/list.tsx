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
  const [orderBy, setOrderBy] = useState("desc");

  const { data, isLoading } = useQuery({
    queryKey: ["products", searchText, filter, orderBy],
    queryFn: async () => {
      const params = [];

      if (searchText) params.push(`name_like=${searchText}`);
      if (filter.category) params.push(`category=${filter.category}`);

      if (filter.status) params.push(`status=${filter.status}`);

      if (orderBy) params.push(`_sort=price&_order=${orderBy}`);

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
  const orderByOptions = [
    {
      label: "Tăng dần",
      value: "asc",
    },
    {
      label: "Giảm dần",
      value: "desc",
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
            style={{ width: 100 }}
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
            style={{ width: 100 }}
            onChange={(category) => setFilter({ ...filter, category })}
          />
          <Select
            options={statusOptions}
            allowClear
            placeholder="Filter Status"
            style={{ width: 100 }}
            onChange={(status) => setFilter({ ...filter, status })}
          />
          <Select
            options={orderByOptions}
            allowClear
            placeholder="Sort Price"
            style={{ width: 100 }}
            onChange={(orderBy) => setOrderBy(orderBy)}
          />
        </Space>
      </Space>
      <Table dataSource={data} columns={columns} loading={isLoading} />;
    </div>
  );
}

export default ProductList;
