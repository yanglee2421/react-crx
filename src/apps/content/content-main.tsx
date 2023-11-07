// React Imports
import React from "react";

// API Imports
import { useHtmlPost } from "@/hooks";

export function ContentMain() {
  // API Hooks
  const { mutate } = useHtmlPost();

  React.useEffect(() => {
    const data = {
      html: document.documentElement.outerHTML,
      url: globalThis.location.href,
    };
    const listener = () => {
      mutate({ data });
      return true;
    };

    chrome.runtime.onMessage.addListener(listener);
    return () => {
      chrome.runtime.onMessage.removeListener(listener);
    };
  }, [mutate]);

  return <></>;
}
