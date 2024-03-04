import { Box } from "@mui/material";
import React from "react";
import { QueryProvider } from "@/components/QueryProvider";
import { Customer } from "@/components/shared/Customer";
import { ImageBackground } from "@/components/ui/ImageBackground";
import { useThemeStore } from "@/hooks/store/useThemeStore";
import { ThemeProvider } from "@/theme/ThemeProvider";

export function Blank() {
  const bgAlpha = useThemeStore((store) => store.bgAlpha);
  const bgBlur = useThemeStore((store) => store.bgBlur);
  const deferredAlpha = React.useDeferredValue(bgAlpha);
  const deferredBlur = React.useDeferredValue(bgBlur);

  return (
    <QueryProvider>
      <ThemeProvider>
        <ImageBackground alpha={deferredAlpha} blur={deferredBlur}>
          <Box>
            <Customer></Customer>
          </Box>
        </ImageBackground>
      </ThemeProvider>
    </QueryProvider>
  );
}
