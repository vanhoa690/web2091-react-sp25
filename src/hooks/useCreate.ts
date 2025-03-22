import { useMutation } from "@tanstack/react-query";
import { create, ProductForm } from "../providers/dataProvider";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

type useListParams = {
  resource: string;
};

export const useCreate = ({ resource }: useListParams) => {
  const nav = useNavigate();
  return useMutation({
    mutationFn: (data: ProductForm) => create({ resource, data }),
    onSuccess: () => {
      message.success("add ok");
      nav(`/${resource}/list`);
    },
  });
};
