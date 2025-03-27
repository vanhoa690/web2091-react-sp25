import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/";

type ProviderProps = {
  resource: string;
  id?: number | string;
  values?: any;
};

export const getList = async ({ resource = "products" }) => {
  const { data } = await axios.get(resource);
  return data;
};

export const getOne = async ({ resource = "products", id }: ProviderProps) => {
  if (!id) return;
  const { data } = await axios.get(`${resource}/${id}`);
  return data;
};

// create
export const create = async ({
  resource = "products",
  values,
}: ProviderProps) => {
  const { data } = await axios.post(resource, values);
  return data;
};

// update
export const update = async ({
  resource = "products",
  id,
  values,
}: ProviderProps) => {
  if (!id) return;
  const { data } = await axios.put(`${resource}/${id}`, values);
  return data;
};

// delete
export const deleteOne = async ({
  resource = "products",
  id,
}: ProviderProps) => {
  if (!id) return;
  const { data } = await axios.delete(`${resource}/${id}`);
  return data;
};

// auth: register || login
export const auth = async ({
  resource = "register",
  values,
}: ProviderProps) => {
  const { data } = await axios.post(resource, values); // http://localhost:3000/login, values
  return data;
};
