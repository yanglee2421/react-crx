// Router Imports
import { RouterProvider } from "react-router-dom";
import { router } from "@/router";

// Toast Imports
import { Toaster } from "react-hot-toast";

// MUI Imports
import { CssBaseline } from "@mui/material";

// Provider Imports
import { QueryProvider } from "@/api/provider";
import { AclProvider } from "@/configs/acl";

export function OptionsPage() {
  return (
    <QueryProvider>
      <AclProvider>
        <CssBaseline />
        <Toaster />
        <RouterProvider router={router} />
      </AclProvider>
    </QueryProvider>
  );
}
