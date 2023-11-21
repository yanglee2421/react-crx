// MUI Imports
import { createTheme } from "@mui/material";

import { ThemeSettings } from "@/redux";

export function toTheme(params: ThemeSettings) {
  const { isDark } = params;

  return createTheme({
    spacing(abs: number) {
      return `${abs * 0.25}rem`;
    },
    palette: { mode: isDark ? "dark" : "light" },
  });
}
