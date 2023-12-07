// React Imports
import React from "react";
import ReactDOM from "react-dom/client";
import { OptionsPage } from "@/apps/options_page";

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
      <OptionsPage />
    </React.StrictMode>
  );
}

console.log("popup", chrome);
