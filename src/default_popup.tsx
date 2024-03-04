import React from "react";
import ReactDOM from "react-dom/client";
import { DefaultPopup } from "@/pages/default_popup/DefaultPopup";

const container = document.getElementById("root");

if (container) {
  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <DefaultPopup></DefaultPopup>
    </React.StrictMode>,
  );
}
