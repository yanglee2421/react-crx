import React from "react";
import { createRoot } from "react-dom/client";
import { DefaultPopup } from "@/pages/default_popup/DefaultPopup";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DefaultPopup />
  </React.StrictMode>,
);
