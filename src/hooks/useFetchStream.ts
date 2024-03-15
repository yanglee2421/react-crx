import React from "react";

export function useFetchStream() {
  React.useEffect(() => {
    const controller = new AbortController();

    void (async () => {
      const res = await fetch("http://localhost:3002/chat/stream", {
        signal: controller.signal,
      });
      const reader = res.body?.getReader();

      while (reader) {
        const { done, value } = await reader.read();
        const detext = new TextDecoder("utf8");
        const text = detext.decode(value);

        console.log(text);

        if (done) {
          break;
        }
      }
    })();

    return () => {
      controller.abort();
    };
  }, []);
}
