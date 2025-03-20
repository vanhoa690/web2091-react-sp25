import axios from "axios";

type getListParams = {
  resource: string;
};

type getOneParams = {
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
    const response = await axios.get(`${API_URL}/${resource}/${id}`);
    return response.data;
  },
};

export const { getList, getOne } = dataProvider;
