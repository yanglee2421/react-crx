// React Imports
import React from "react";
import ReactDOM from "react-dom/client";
import { OptionsPage } from "@/apps/options_page";

const container = (() => {
  const containerId = "root";
  const existedEl = document.getElementById(containerId);
  if (existedEl) {
    return existedEl;
  }

  const newEl = document.createElement("div");
  newEl.id = containerId;
  document.body.append(newEl);

  return newEl;
})();

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <OptionsPage />
  </React.StrictMode>
);

console.log("popup", chrome);
