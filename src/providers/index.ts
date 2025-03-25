import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/";

type ProviderProps<T> = {
  resource: string;
  id?: number | string;
  values?: T;
};

export const getList = async ({ resource = "products" }) => {
  const { data } = await axios.get(resource);
  return data;
};

export const getDetail = async <T>({
  resource = "products",
  id,
}: ProviderProps<T>) => {
  if (!id) return;
  const { data } = await axios.get(`${resource}/${id}`);
  return data;
};

// create
export const create = async <T>({
  resource = "products",
  values,
}: ProviderProps<T>) => {
  const { data } = await axios.post(resource, values);
  return data;
};

// update
export const update = async <T>({
  resource = "products",
  id,
  values,
}: ProviderProps<T>) => {
  if (!id) return;
  const { data } = await axios.put(resource, values);
  return data;
};

// delete
export const deleteOne = async <T>({
  resource = "products",
  id,
}: ProviderProps<T>) => {
  if (!id) return;
  const { data } = await axios.delete(`${resource}/${id}`);
  return data;
};
