// React Imports
import React from "react";

// Router Imports
import {
  // useMatches,
  // useSearchParams,
  // Navigate,
  useOutlet,
} from "react-router-dom";

// Nprogress Imports
import Nprogress from "nprogress";

import { useAcl } from "@/configs/acl";

export function Component() {
  const acl = useAcl();

  // Router Hooks
  const outlet = useOutlet();
  // const matches = useMatches();
  // const [searchParams] = useSearchParams();

  const routeNode = React.useMemo(() => {
    return outlet;
  }, [outlet]);

  React.useEffect(() => {
    Nprogress.done();

    return () => {
      Nprogress.start();
    };
  }, [routeNode]);

  return <>{routeNode}</>;
}
