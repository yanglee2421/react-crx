// React Imports
import React from "react";
import ReactDOM from "react-dom/client";

// APP Imports
import { BlankApp } from "@/apps/blank";

// Font Imports
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";

init();

function init() {
  const container = document.getElementById("root");

  if (!container) {
    console.error("Can not find element #root");
    return;
  }

  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <BlankApp />
    </React.StrictMode>
  );
}
