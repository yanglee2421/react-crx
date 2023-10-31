// MUI Imports
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { FiberManualRecordOutlined } from "@mui/icons-material";

// React Imports
import React from "react";

// Router Imports
import { Link } from "react-router-dom";

export function MenuLink(props: MenuLinkProps) {
  // ** Props
  const { label } = props;

  return (
    <ListItemButton LinkComponent={Link}>
      <ListItemIcon>
        <FiberManualRecordOutlined />
      </ListItemIcon>
      <ListItemText>{label}</ListItemText>
    </ListItemButton>
  );
}

export interface MenuLinkProps {
  label: React.ReactNode;
}
