import { Box, Typography, ImageList, ImageListItem } from "@mui/material";
import React from "react";
import { ImageBackground } from "@/components/ui/ImageBackground";
import { useThemeStore } from "@/hooks/store/useThemeStore";
import { useJokeList } from "@/hooks/api-autumnfish/useJokeList";
import { useBingGet } from "@/hooks/api-bing/useBingGet";

export function Blank() {
  const bgAlpha = useThemeStore((store) => store.bgAlpha);
  const bgBlur = useThemeStore((store) => store.bgBlur);
  const deferredAlpha = React.useDeferredValue(bgAlpha);
  const deferredBlur = React.useDeferredValue(bgBlur);

  // React.useEffect(() => {
  //   const controller = new AbortController();

  //   void (async () => {
  //     const res = await fetch("http://localhost:3002/chat/stream", {
  //       signal: controller.signal,
  //     });
  //     const reader = res.body?.getReader();

  //     while (reader) {
  //       const { done, value } = await reader.read();
  //       const detext = new TextDecoder("utf8");
  //       const text = detext.decode(value);

  //       console.log(text);

  //       if (done) {
  //         break;
  //       }
  //     }
  //   })();

  //   return () => {
  //     controller.abort();
  //   };
  // }, []);

  const jokeQuery = useJokeList({ num: 1 });
  const bingQuery = useBingGet({
    format: "js",
    idx: 0,
    n: 8,
  });

  return (
    <>
      <ImageBackground alpha={deferredAlpha} blur={deferredBlur} />
      <Box height={400}></Box>
      <Box position={"relative"} zIndex={2} sx={{ overflow: "auto" }}>
        {(() => {
          if (jokeQuery.isPending) {
            return "pending";
          }

          if (jokeQuery.isError) {
            return jokeQuery.error.message;
          }

          return <Typography>{jokeQuery.data}</Typography>;
        })()}
        {(() => {
          if (bingQuery.isPending) {
            return "pending";
          }

          if (bingQuery.isError) {
            return bingQuery.error.message;
          }

          return (
            <ImageList cols={3}>
              {bingQuery.data.images.map((item) => (
                <ImageListItem key={item.url}>
                  <img
                    src={`https://cn.bing.com${item.url}`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          );
        })()}
      </Box>
    </>
  );
}
