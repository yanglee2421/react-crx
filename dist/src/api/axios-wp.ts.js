import axios from "/vendor/.vite-deps-axios.js__v--c4303846.js";
export const axiosWp = axios.create({
  baseURL: "",
  timeout: 1e3 * 60
});
axiosWp.interceptors.request.use((config) => config);
axiosWp.interceptors.response.use(
  (res) => {
    const { data } = res;
    return data;
  },
  (err) => {
    const { message } = err;
    throw new Error(message);
  }
);
