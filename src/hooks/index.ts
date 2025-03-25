import { useQuery, useMutation } from "@tanstack/react-query";
import { create, getList } from "../providers";

type Props<T> = {
  resource: string;
  id?: number | string;
  values?: T;
};

export const useList = ({ resource = "products" }) => {
  return useQuery({
    queryKey: [resource],
    queryFn: () => getList({ resource }),
  });
};

// useOne: getDetail
export const useOne = ({ resource = "products" }) => {
  console.log({ resource });
};

// useCreate: addData
export const useCreate = <T>({ resource = "products" }: Props<T>) => {
  return useMutation({
    mutationFn: (values: T) => create({ resource, values }),
  });
};

// useUpdate: updateData
export const useUpdate = <T>({
  resource = "products",
  id,
  values,
}: Props<T>) => {
  console.log({ resource, id, values });
};

// useDelete : deleteOne
export const useDelete = <T>({ resource = "products", id }: Props<T>) => {
  console.log({ resource, id });
};
