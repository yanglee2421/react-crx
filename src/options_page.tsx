// React Imports
import React from "react";
import ReactDOM from "react-dom/client";
import { OptionsPage } from "@/apps/options_page";

init();

function init() {
  const container = document.getElementById("root");

  if (!container) {
    console.error("Can not find element #root");
    return;
  }

  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <OptionsPage />
    </React.StrictMode>
  );
}

console.log("popup", chrome);
