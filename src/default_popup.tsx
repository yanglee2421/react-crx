// React Imports
import React from "react";
import ReactDOM from "react-dom/client";
import { DefaultPopup } from "@/apps/default_popup";

init();

/**
 * @description Initialize React Application
 */
function init() {
  const container = document.getElementById("root");

  // No Container Element
  if (!container) {
    console.error("Can not find element #root");
    return;
  }

  // Has Container Element
  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <DefaultPopup />
    </React.StrictMode>
  );
}

console.log("popup", chrome);
