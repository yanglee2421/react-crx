import axios from "axios";
import type { AxiosError } from "axios";

export const axiosAutumnfish = axios.create({
  baseURL: "https://autumnfish.cn",
  timeout: 1000 * 30,
});

axiosAutumnfish.interceptors.request.use((config) => config);
axiosAutumnfish.interceptors.response.use(
  (res) => {
    if (String(res.data.code).startsWith("2")) {
      return res.data.data;
    }

    throw new Error(res.data.msg);
  },
  (error: AxiosError) => {
    throw new Error(error.message);
  },
);
