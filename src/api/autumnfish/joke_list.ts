import { axiosAutumnfish } from "./axiosAutumnfish";
import { AxiosRequestConfig } from "axios";

export function joke_list(req: Req) {
  return axiosAutumnfish<unknown, string[]>({
    url: "/api/joke/list",
    ...req,
  });
}

export type Req = AxiosRequestConfig & {
  params: Params;
};

export interface Params {
  num: number;
}
