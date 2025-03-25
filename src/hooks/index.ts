import { useQuery } from "@tanstack/react-query";
import { getList } from "../providers";

type Props = {
  resource: string;
};

export const useList = ({ resource = "products" }: Props) => {
  return useQuery({
    queryKey: [resource],
    queryFn: () => getList({ resource }),
  });
};
