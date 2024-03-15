import { QuestionAnswerOutlined } from "@mui/icons-material";
import {
  Box,
  Typography,
  ImageList,
  ImageListItem,
  Stack,
  IconButton,
} from "@mui/material";
import React from "react";
import { Customer } from "@/components/shared/Customer";
import { FixedImageBackground } from "@/components/ui/FixedImageBackground";
import { useJokeList } from "@/hooks/api-autumnfish/useJokeList";
import { useBingGet } from "@/hooks/api-bing/useBingGet";
import { useThemeStore } from "@/hooks/store/useThemeStore";

export function Blank() {
  const bgAlpha = useThemeStore((store) => store.bgAlpha);
  const bgBlur = useThemeStore((store) => store.bgBlur);
  const deferredAlpha = React.useDeferredValue(bgAlpha);
  const deferredBlur = React.useDeferredValue(bgBlur);

  const jokeQuery = useJokeList({ num: 1 });
  const bingQuery = useBingGet({
    format: "js",
    idx: 0,
    n: 8,
  });

  return (
    <>
      <FixedImageBackground alpha={deferredAlpha} blur={deferredBlur} />
      <Stack
        position={"fixed"}
        zIndex={3}
        top={"1.25rem"}
        right={"1.25rem"}
        direction={"row"}
        spacing={3}
      >
        <IconButton>
          <QuestionAnswerOutlined />
        </IconButton>
        <Customer />
      </Stack>
      <Box position={"relative"} zIndex={2} sx={{ overflow: "auto" }}>
        <Box height={400}>loremsadlkjalsdj</Box>
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
