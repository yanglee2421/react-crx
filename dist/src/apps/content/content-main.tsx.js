import { createHotContext as __vite__createHotContext } from "/vendor/vite-client.js";import.meta.hot = __vite__createHotContext("/src/apps/content/content-main.tsx.js");import __vite__cjsImport0_react_jsxDevRuntime from "/vendor/.vite-deps-react_jsx-dev-runtime.js__v--6540fe2b.js"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import RefreshRuntime from "/vendor/react-refresh.js";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.__vite_plugin_react_preamble_installed__) {
    throw new Error("@vitejs/plugin-react can't detect preamble. Something is wrong. See https://github.com/vitejs/vite-plugin-react/pull/11#discussion_r430879201");
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    RefreshRuntime.register(type, "C:/Users/yangl/Documents/yanglee/react-crx/src/apps/content/content-main.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/vendor/.vite-deps-react.js__v--6540fe2b.js"; const useEffect = __vite__cjsImport3_react["useEffect"];
import { useHtmlPost } from "/src/hooks/index.ts.js";
export function ContentMain() {
  _s();
  const {
    mutate
  } = useHtmlPost();
  useEffect(() => {
    const data = {
      html: document.documentElement.outerHTML,
      url: globalThis.location.href
    };
    const listener = () => {
      mutate({
        data
      });
      return true;
    };
    chrome.runtime.onMessage.addListener(listener);
    return () => {
      chrome.runtime.onMessage.removeListener(listener);
    };
  }, [mutate]);
  return /* @__PURE__ */ jsxDEV(Fragment, {}, void 0, false, {
    fileName: "C:/Users/yangl/Documents/yanglee/react-crx/src/apps/content/content-main.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_s(ContentMain, "Da56WZZ55c8XgJEm8BBc4azbNfo=", false, function() {
  return [useHtmlPost];
});
_c = ContentMain;
var _c;
$RefreshReg$(_c, "ContentMain");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/yangl/Documents/yanglee/react-crx/src/apps/content/content-main.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
