// MUI Imports
import {
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
  GlobalStyles,
} from "@mui/material";

// React Imports
import React from "react";

import { toTheme } from "./to-theme";

// Redux Imports
import { useAppSelector } from "@/redux";

export function ThemeProvider(props: React.PropsWithChildren) {
  // ** Props
  const { children } = props;

  const themeSettings = useAppSelector((s) => {
    return s.theme;
  });

  const theme = toTheme(themeSettings);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          "html,body,#root": {
            boxSizing: "border-box",
            height: "100%",
          },
        }}
      />
      {children}
    </MuiThemeProvider>
  );
}
