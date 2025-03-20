import axios from "axios";

type getListParams = {
  resource: string;
};

const API_URL = `http://localhost:3000`;

const dataProvider = {
  getList: async ({ resource }: getListParams) => {
    const response = await axios.get(`${API_URL}/${resource}`);
    return {
      data: response.data,
    };
  },
};

export const { getList } = dataProvider;
