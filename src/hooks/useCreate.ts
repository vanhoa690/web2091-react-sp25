import { useMutation } from "@tanstack/react-query";
import { create } from "../providers/dataProvider";

type useListParams = {
  resource: string;
};

export const useCreate = ({ resource }: useListParams) => {
  return useMutation({
    mutationFn: () => create({ resource }),
  });
};
