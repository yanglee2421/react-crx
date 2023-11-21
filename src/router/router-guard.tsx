// MUI Imports
// import { Backdrop, CircularProgress } from "@mui/material";

// Redux Imports
import {
  mutateSettings,
  useAppDispatch,
  // useAppSelector
} from "@/redux";

// React Imports
import React from "react";

// Router Imports
import {
  // useMatches,
  // useSearchParams,
  // Navigate,
  useOutlet,
} from "react-router-dom";
// import { toIsInWl } from "./router-whitelist";

export function Component() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(mutateSettings({}));
  }, [dispatch]);

  // Router Hooks
  const outlet = useOutlet();
  // const matches = useMatches();
  // const [searchParams] = useSearchParams();

  const routeNode = React.useMemo(() => {
    return outlet;
  }, [outlet]);

  return <>{routeNode}</>;
}
