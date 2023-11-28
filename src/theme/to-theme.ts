// MUI Imports
import { createTheme } from "@mui/material";

export function toTheme() {
  return createTheme({
    spacing(abs: number) {
      return `${abs * 0.25}rem`;
    },
    palette: { mode: "light" },
  });
}
