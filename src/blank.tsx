// React Imports
import React from "react";
import ReactDOM from "react-dom/client";

// Font Imports
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";

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
    <></>
  </React.StrictMode>
);
