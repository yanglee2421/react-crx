// React Imports
import React from "react";
import ReactDOM from "react-dom/client";

// APP Imports
import { BlankApp } from "@/apps/blank";

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
