import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/";

type ProviderProps = {
  resource: string;
  id?: number | string;
};
export const getList = async ({ resource = "products" }) => {
  const { data } = await axios.get(resource);
  return data;
};

export const getDetail = async ({
  resource = "products",
  id,
}: ProviderProps) => {
  if (!id) return;
  const { data } = await axios.get(`${resource}/${id}`);
  return data;
};
