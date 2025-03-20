import { useQuery } from "@tanstack/react-query";
import { getOne } from "../providers/dataProvider";

type useOneParams = {
  resource: string;
  id?: number | string;
};

export const useOne = ({ resource, id }: useOneParams) => {
  if (!id) return;
  return useQuery({
    queryKey: [resource],
    queryFn: () => getOne({ resource, id }),
  });
};
