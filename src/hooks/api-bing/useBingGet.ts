import { bing_get, Params } from "@/api/bing/bing_get";
import { useQuery } from "@tanstack/react-query";

export function useBingGet(params: Params) {
  return useQuery({
    queryKey: ["bing_get", params],
    queryFn({ signal }) {
      return bing_get({ signal, params });
    },
  });
}
