import { useQuery } from "@tanstack/react-query";
import { _endpoints, getAllTags } from "../../services/tags-api-service";

export const useGetAllTags = () => {
  return useQuery({
    queryKey: [_endpoints.get_tags()],
    queryFn: () => getAllTags(),
  });
};
