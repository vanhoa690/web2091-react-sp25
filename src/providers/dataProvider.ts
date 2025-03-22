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
  values: ProductForm;
};

type updateParams = {
  resource: string;
  values: ProductForm;
  id?: string | number;
};

type deleteParams = {
  resource: string;
  id: string | number;
};

const API_URL = `http://localhost:3000`;

const dataProvider = {
  getList: async ({ resource }: getListParams) => {
    const { data } = await axios.get(`${API_URL}/${resource}`);
    return data;
  },
  getOne: async ({ resource, id }: getOneParams) => {
    if (!id) return;
    const { data } = await axios.get(`${API_URL}/${resource}/${id}`);
    return data;
  },
  create: async ({ resource, values }: createParams) => {
    const { data } = await axios.post(`${API_URL}/${resource}`, values);
    return data;
  },
  update: async ({ resource, values, id }: updateParams) => {
    if (!id) return;
    const { data } = await axios.put(`${API_URL}/${resource}/${id}`, values);
    return data;
  },
  deleteOne: async ({ resource, id }: deleteParams) => {
    const { data } = await axios.delete(`${API_URL}/${resource}/${id}`);
    return data;
  },
};

export const { getList, getOne, create, update, deleteOne } = dataProvider;
