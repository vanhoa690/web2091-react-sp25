import { useMutation } from "@tanstack/react-query";
import { ProductForm, update } from "../providers/dataProvider";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

type useListParams = {
  resource: string;
  id?: string | number;
};

export const useUpdate = ({ resource, id }: useListParams) => {
  const nav = useNavigate();
  return useMutation({
    mutationFn: (data: ProductForm) => update({ resource, data, id }),
    onSuccess: () => {
      message.success("update ok");
      nav(`/${resource}`);
    },
  });
};
