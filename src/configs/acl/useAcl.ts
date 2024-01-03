// Acl Imports
import { useAbility } from "@casl/react";

// React Imports
import React from "react";

// Types Imports
import { AppAbility, defineAbilityFor } from "./defineAbilityFor";

export function useAcl() {
  return useAbility(AclContext);
}

export const AclContext = React.createContext<AppAbility>(defineAbilityFor(""));
