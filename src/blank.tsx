import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Blank } from "@/pages/blank/Blank";

const container = document.getElementById("root");

if (container) {
  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <Blank></Blank>
    </React.StrictMode>,
  );
}
