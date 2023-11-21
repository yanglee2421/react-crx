// API Imports
import { useMutation } from "@tanstack/react-query";
import { html_post } from "@/api";
import type { Res, Req } from "@/api/html_post";

export function useHtmlPost() {
  // API Hooks
  return useMutation<Res, Error, Req>({
    mutationFn(req) {
      return html_post(req);
    },
  });
}
