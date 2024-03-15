import { useQuery } from "@tanstack/react-query";
import { joke_list } from "@/api/autumnfish/joke_list";
import type { Params } from "@/api/autumnfish/joke_list";

export function useJokeList(params: Params) {
  return useQuery({
    queryKey: ["joke_list", params],
    queryFn({ signal }) {
      return joke_list({ signal, params });
    },
  });
}
