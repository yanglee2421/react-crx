// React Imports
import React from "react";
import ReactDOM from "react-dom/client";
import { DefaultPopup } from "@/apps/default_popup";

init();

function init() {
  const container = document.getElementById("root");

  if (!container) {
    console.error("Can not find element #root");
    return;
  }

  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <DefaultPopup />
    </React.StrictMode>
  );
}

console.log("popup", chrome);
