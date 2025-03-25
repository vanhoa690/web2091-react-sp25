import { useQuery, useMutation } from "@tanstack/react-query";
import { create, getList } from "../providers";

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
export const useOne = ({ resource = "products" }) => {
  console.log({ resource });
};

// useCreate: addData
export const useCreate = ({ resource = "products" }) => {
  return useMutation({
    mutationFn: (values: any) => create({ resource, values }),
  });
};

// useUpdate: updateData
export const useUpdate = ({ resource = "products", id, values }: Props) => {
  console.log({ resource, id, values });
};

// useDelete : deleteOne
export const useDelete = ({ resource = "products", id }: Props) => {
  console.log({ resource, id });
};
