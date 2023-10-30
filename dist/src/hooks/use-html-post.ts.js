import { useMutation } from "/vendor/.vite-deps-@tanstack_react-query.js__v--cd00750d.js";
import { html_post } from "/src/api/index.ts.js";
import __vite__cjsImport2_react from "/vendor/.vite-deps-react.js__v--6540fe2b.js"; const useRef = __vite__cjsImport2_react["useRef"];
import { toast } from "/vendor/.vite-deps-react-hot-toast.js__v--37fe7b0d.js";
export function useHtmlPost() {
  const toastIdRef = useRef(crypto.randomUUID());
  return useMutation({
    mutationFn(req) {
      return html_post(req);
    },
    onMutate() {
      const id = toastIdRef.current;
      toast.loading("Fetching...", { id });
    },
    onSettled(data, error) {
      const id = toastIdRef.current;
      if (error) {
        toast.error(error.message, { id });
        return;
      }
      if (data) {
        toast.success("Crawled successfully", { id });
        return;
      }
    }
  });
}
