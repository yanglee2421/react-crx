// MUI Imports
import {
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
  GlobalStyles,
} from "@mui/material";

// React Imports
import React from "react";

import { toTheme } from "./to-theme";

export function ThemeProvider(props: React.PropsWithChildren) {
  // ** Props
  const { children } = props;

  const theme = toTheme();

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
