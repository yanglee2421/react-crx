import { axiosWp } from "/src/api/axios-wp.ts.js";
export function html_post(req) {
  return axiosWp({
    url: "http://localhost:3002/crawler",
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data"
    },
    ...req
  });
}
