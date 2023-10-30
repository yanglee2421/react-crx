// MUI Imports
import { Backdrop, CircularProgress } from "@mui/material";

// Redux Imports
import {
  mutateSettings,
  mutateLogin,
  useAppDispatch,
  useAppSelector,
} from "@/redux";

// React Imports
import React from "react";

// Router Imports
import {
  useMatches,
  useSearchParams,
  Navigate,
  useOutlet,
} from "react-router-dom";
import { toIsInWl } from "./router-whitelist";

export function Component() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((s) => s.login.isLoading);
  const usr = useAppSelector((s) => s.login.usr);

  React.useEffect(() => {
    dispatch(mutateSettings({}));
    dispatch(mutateLogin({}));
  }, [dispatch]);

  // Router Hooks
  const outlet = useOutlet();
  const matches = useMatches();
  const [searchParams] = useSearchParams();

  const routeNode = React.useMemo(() => {
    const nextRoute = matches[matches.length - 1];
    if (!nextRoute) {
      console.error("Invalid route");
      return null;
    }

    // To Login
    const isToLogin = nextRoute.id === "login";
    if (isToLogin) {
      const returnURL = searchParams.get("returnURL") || "/";
      return usr ? <Navigate to={returnURL} replace /> : outlet;
    }

    // To Whitelist
    const isInWhitelist = toIsInWl(nextRoute.id);
    if (isInWhitelist) return outlet;

    // Has Logged
    if (usr) return outlet;

    // Not Logged
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.set("returnURL", nextRoute.pathname);
    const query = urlSearchParams.toString();
    const isGoHome = nextRoute.id === "home";
    const search = isGoHome ? void 0 : query;
    const to = { pathname: "/login", search };

    return <Navigate to={to} replace />;
  }, [matches, searchParams, outlet, usr]);

  return (
    <>
      {routeNode}
      <Backdrop
        open={isLoading}
        sx={{
          color: "common.white",
          zIndex(theme) {
            return theme.zIndex.mobileStepper - 1;
          },
        }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}
