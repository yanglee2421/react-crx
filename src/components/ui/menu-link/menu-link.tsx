// MUI Imports
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItemButtonProps,
} from "@mui/material";
import { FiberManualRecordOutlined } from "@mui/icons-material";

// React Imports
import React from "react";

// Router Imports
import {
  Link,
  To,
  useResolvedPath,
  RelativeRoutingType,
  useLocation,
  UNSAFE_NavigationContext,
} from "react-router-dom";

export function MenuLink(props: MenuLinkProps) {
  // ** Props
  const { label, to, relative, caseSensitive, end, icon, ...restProps } = props;

  // Icon node
  const iconNode = React.useMemo(() => {
    if (icon) return icon;
    return <FiberManualRecordOutlined />;
  }, [icon]);

  // Get isActive
  const path = useResolvedPath(to, { relative });
  const location = useLocation();
  const { navigator } = React.useContext(UNSAFE_NavigationContext);

  let locationPathname = location.pathname;
  let toPathname = navigator.encodeLocation
    ? navigator.encodeLocation(path).pathname
    : path.pathname;

  if (!caseSensitive) {
    toPathname = toPathname.toLowerCase();
    locationPathname = locationPathname.toLowerCase();
  }

  const isActive =
    locationPathname === toPathname ||
    (!end &&
      locationPathname.startsWith(toPathname) &&
      locationPathname.charAt(toPathname.length) === "/");

  return (
    <ListItemButton component={Link} to={to} selected={isActive} {...restProps}>
      <ListItemIcon>{iconNode}</ListItemIcon>
      <ListItemText>{label}</ListItemText>
    </ListItemButton>
  );
}

export interface MenuLinkProps extends ListItemButtonProps {
  label: React.ReactNode;
  to: To;
  relative?: RelativeRoutingType;
  caseSensitive?: boolean;
  end?: boolean;
  icon?: React.ReactNode;
}
