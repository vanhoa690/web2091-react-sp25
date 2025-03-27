// API CRUD
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/";

export type Props = {
  resource: string;
  id?: number | string;
  values?: any;
};
// getList
export const getList = async ({ resource = "products" }) => {
  const { data } = await axios.get(resource); //"http://localhost:3000/products
  return data;
};

// getOne
export const getOne = async ({ resource = "products", id }: Props) => {
  if (!id) return;
  const { data } = await axios.get(`${resource}/${id}`);
  return data;
};
// create
export const create = async ({ resource = "products", values }: Props) => {
  const { data } = await axios.post(resource, values);
  return data;
};

// update
export const update = async ({ resource = "products", id, values }: Props) => {
  if (!id) return;
  const { data } = await axios.put(`${resource}/${id}`, values);
  return data;
};
// deleteOne
export const deleteOne = async ({ resource = "products", id }: Props) => {
  if (!id) return;
  const { data } = await axios.delete(`${resource}/${id}`);
  return data;
};

//http://localhost:3000/register
//http://localhost:3000/login

// auth provider: register || login
export const auth = async ({ resource = "register", values }: Props) => {
  const { data } = await axios.post(resource, values);
  return data;
};
