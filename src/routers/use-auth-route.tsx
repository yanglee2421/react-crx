// React Imports
import React, { useMemo } from "react";

// Router Imports
import {
  useMatches,
  useSearchParams,
  Navigate,
  useOutlet,
} from "react-router-dom";
import { toIsInWl } from "./router-whitelist";

// Redux Imports
import { useAppSelector } from "@/redux";

export function useAuthPage() {
  // Router Hooks
  const outlet = useOutlet();
  const matches = useMatches();
  const [searchParams] = useSearchParams();

  const nextRoute = matches[matches.length - 1];

  // Redux Hooks
  const usr = useAppSelector((s) => s.login.usr);

  return useMemo(() => {
    const { id, pathname } = nextRoute;

    // To Login
    const isToLogin = id === "login";
    if (isToLogin) {
      const returnURL = searchParams.get("returnURL");
      const goPath = returnURL || "/";
      if (usr) return React.createElement(Navigate, { to: goPath });
      return outlet;
    }

    // To Whitelist
    const isInWhitelist = toIsInWl(id);
    if (isInWhitelist) return outlet;

    // Has Logged
    if (usr) return outlet;

    // Not Logged
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.set("returnURL", pathname);
    const search = urlSearchParams.toString();
    const to = { pathname: "/login", search };

    return React.createElement(Navigate, { to });
  }, [outlet, matches, searchParams, usr]);
}
