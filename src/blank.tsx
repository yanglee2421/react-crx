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

render();

function render() {
  const el = document.getElementById("root");
  if (!el) {
    console.error("Excepted element, got falsy");
    return;
  }

  ReactDOM.createRoot(el).render(
    <React.StrictMode>
      <BlankApp />
    </React.StrictMode>
  );
}
