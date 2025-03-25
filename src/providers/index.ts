// API CRUD

import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/";

type Props = {
  resource: string;
  id?: number | string;
  values?: any;
};
// getList
export const getList = async ({ resource = "products" }) => {
  const { data } = await axios.get(resource);
  return data;
};

// getOne
export const getOne = async ({ resource = "products", id }: Props) => {
  console.log(resource, id);
};
// create
export const create = async ({ resource = "products", values }: Props) => {
  console.log(resource, values);
};

// update
export const update = async ({ resource = "products", id, values }: Props) => {
  console.log(resource, id), values;
};

// deleteOne
export const deleteOne = async ({ resource = "products", id }: Props) => {
  console.log(resource, id);
};
