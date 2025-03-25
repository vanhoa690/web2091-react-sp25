import { useQuery } from "@tanstack/react-query";
import { getList } from "../providers";

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
  console.log(resource, id);
};

export const useDelete = ({ resource = "products" }: Props) => {
  console.log(resource);
};
