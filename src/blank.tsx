import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { QueryProvider } from "@/components/QueryProvider";
import { Blank } from "@/pages/blank/Blank";
import { ThemeProvider } from "@/theme/ThemeProvider";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryProvider>
      <ThemeProvider>
        <Blank />
      </ThemeProvider>
    </QueryProvider>
  </React.StrictMode>,
);
