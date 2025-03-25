// Hook

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteOne, getList, getOne, Props } from "../providers";
import { message } from "antd";

export const useList = ({ resource = "products" }) => {
  return useQuery({
    queryKey: [resource],
    queryFn: () => getList({ resource }),
  });
};

// useOne -> getOne

export const useOne = ({ resource = "products", id }: Props) => {
  return useQuery({
    queryKey: [resource, id],
    queryFn: () => getOne({ resource, id }),
  });
};
// useCreate -> create
// useUpdate -> update
// useDelete -> deleteOne
export const useDelete = ({ resource = "products" }: Props) => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id?: string | number) => deleteOne({ resource, id }),
    onSuccess: () => {
      message.success("Xoa thanh cong");
      qc.invalidateQueries({ queryKey: [resource] });
    },
  });
};
