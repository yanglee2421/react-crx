import { useQuery } from "/vendor/.vite-deps-@tanstack_react-query.js__v--cd00750d.js";
export function useLoginVali() {
  return useQuery({
    queryKey: ["login-vali"],
    async queryFn() {
      return await chrome.storage.sync.get(["isLogged", "usr"]);
    }
  });
}
