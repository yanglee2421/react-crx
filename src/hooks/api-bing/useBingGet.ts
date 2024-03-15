import { useQuery } from "@tanstack/react-query";
import { bing_get } from "@/api/bing/bing_get";
import type { Params } from "@/api/bing/bing_get";

export function useBingGet(params: Params) {
  return useQuery({
    queryKey: ["bing_get", params],
    queryFn({ signal }) {
      return bing_get({ signal, params });
    },
  });
}
