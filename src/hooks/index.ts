import { useQuery, useMutation } from "@tanstack/react-query";
import { create, deleteOne, getList, getOne, update } from "../providers";

type Props = {
  resource: string;
  id?: number | string;
  values?: any;
};

export const useList = ({ resource = "products" }) => {
  return useQuery({
    queryKey: [resource],
    queryFn: () => getList({ resource }),
  });
};

// useOne: getDetail
export const useOne = ({ resource = "products", id }: Props) => {
  return useQuery({
    queryKey: [resource, id],
    queryFn: () => getOne({ resource, id }),
  });
};

// useCreate: addData
export const useCreate = ({ resource = "products" }) => {
  return useMutation({
    mutationFn: (values: any) => create({ resource, values }),
  });
};

// useUpdate: updateData
export const useUpdate = ({ resource = "products", id }: Props) => {
  return useMutation({
    mutationFn: (values: any) => update({ resource, id, values }),
  });
};
// useDelete : deleteOne
export const useDelete = ({ resource = "products" }: Props) => {
  return useMutation({
    mutationFn: (id?: string | number) => deleteOne({ resource, id }),
  });
};
