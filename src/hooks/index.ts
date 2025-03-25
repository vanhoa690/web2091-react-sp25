import { useMutation, useQuery } from "@tanstack/react-query";
import { getList, update } from "../providers";
import { message } from "antd";

type Props = {
  resource: string;
  id?: number | string;
};

export const useList = ({ resource = "products" }: Props) => {
  return useQuery({
    queryKey: [resource],
    queryFn: () => getList({ resource }),
  });
};

export const useOne = ({ resource = "products", id }: Props) => {
  console.log(resource, id);
};

export const useCreate = ({ resource = "products" }: Props) => {
  console.log(resource);
};

export const useUpdate = ({ resource = "products", id }: Props) => {
  return useMutation({
    mutationFn: (values: any) => update({ resource, id, values }),
    onSuccess: () => {
      message.success("Them thanh cong");
    },
    onError: () => {},
  });
};

export const useDelete = ({ resource = "products" }: Props) => {
  console.log(resource);
};
