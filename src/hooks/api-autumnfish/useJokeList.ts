import { joke_list, Params } from "@/api/autumnfish/joke_list";
import { useQuery } from "@tanstack/react-query";

export function useJokeList(params: Params) {
  return useQuery({
    queryKey: ["joke_list", params],
    queryFn({ signal }) {
      return joke_list({ signal, params });
    },
  });
}
