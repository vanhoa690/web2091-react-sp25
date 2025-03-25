import { useQuery, useMutation } from "@tanstack/react-query";
import { create, getList } from "../providers";

export const useList = ({ resource = "products" }) => {
  return useQuery({
    queryKey: [resource],
    queryFn: () => getList({ resource }),
  });
};

// useOne: getDetail
// useCreate: addData
export const useCreate = ({ resource = "products" }) => {
  return useMutation({
    mutationFn: (values: any) => create({ resource, values }),
  });
};
// useUpdate: updateData
// useDelete : deleteOne
