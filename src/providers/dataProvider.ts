import axios from "axios";
export type ProductForm = {
  name: string;
  price: number;
};

type getListParams = {
  resource: string;
};

type getOneParams = {
  resource: string;
  id?: string | number;
};

type createParams = {
  resource: string;
  data: ProductForm;
};

type updateParams = {
  resource: string;
  data: ProductForm;
  id?: string | number;
};

type deleteParams = {
  resource: string;
  id: string | number;
};

const API_URL = `http://localhost:3000`;

const dataProvider = {
  getList: async ({ resource }: getListParams) => {
    const response = await axios.get(`${API_URL}/${resource}`);
    return response.data;
  },
  getOne: async ({ resource, id }: getOneParams) => {
    if (!id) return;
    const response = await axios.get(`${API_URL}/${resource}/${id}`);
    return response.data;
  },
  create: async ({ resource, data }: createParams) => {
    const response = await axios.post(`${API_URL}/${resource}`, data);
    return response.data;
  },
  update: async ({ resource, data, id }: updateParams) => {
    if (!id) return;
    const response = await axios.put(`${API_URL}/${resource}/${id}`, data);
    return response.data;
  },
  deleteOne: async ({ resource, id }: deleteParams) => {
    const response = await axios.delete(`${API_URL}/${resource}/${id}`);
    return response.data;
  },
};

export const { getList, getOne, create, update, deleteOne } = dataProvider;
