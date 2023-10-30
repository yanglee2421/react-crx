import __vite__cjsImport0_react from "/vendor/.vite-deps-react.js__v--6540fe2b.js"; const React = __vite__cjsImport0_react.__esModule ? __vite__cjsImport0_react.default : __vite__cjsImport0_react;
export function useObserverResize(elRef) {
  const [entry, setEntry] = React.useState(null);
  React.useEffect(() => {
    const dom = elRef.current;
    const isElement = dom instanceof Element;
    if (!isElement) {
      console.error("Excepted an element, got falsy!");
      return;
    }
    const obverser = new ResizeObserver(([entry2]) => {
      setEntry(entry2);
    });
    obverser.observe(dom);
    return () => {
      obverser.disconnect();
      setEntry(null);
    };
  }, [elRef, setEntry]);
  return entry;
}
