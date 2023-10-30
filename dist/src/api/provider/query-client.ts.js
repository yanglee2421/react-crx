import { QueryClient } from "/vendor/.vite-deps-@tanstack_react-query.js__v--cd00750d.js";
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: queries(),
    mutations: mutations()
  }
});
queryClient.setQueryDefaults(["unique"], {
  async queryFn() {
    return { msg: "hello world" };
  }
});
queryClient.setMutationDefaults(["post-demo"], {
  async mutationFn() {
    return { msg: "successly" };
  }
});
function queries() {
  return {
    staleTime: 1e3 * 60 * 5,
    refetchOnWindowFocus: false,
    retryDelay(attemptIndex) {
      return Math.min(1e3 * 2 ** attemptIndex, 3e4);
    }
  };
}
function mutations() {
  return {};
}
