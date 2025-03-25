// Hook

import { useQuery } from "@tanstack/react-query";
import { getList, getOne, Props } from "../providers";

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
