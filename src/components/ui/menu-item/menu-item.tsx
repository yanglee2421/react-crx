// MUI Imports
import {
  ListItemButton,
  Collapse,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  FiberManualRecordOutlined,
  KeyboardArrowRight,
} from "@mui/icons-material";

// React Imports
import React from "react";

// Router Imports
import { Link } from "react-router-dom";

export function MenuItem(props: MenuItemProps) {
  // ** Props
  const { children, label } = props;

  const [open, setOpen] = React.useState(false);
  const arrowIconNode = React.useMemo(() => {
    if (!children) return null;

    return (
      <KeyboardArrowRight
        sx={{
          transition(theme) {
            return theme.transitions.create("transform");
          },
          transform: open ? "rotate(90deg)" : "",
        }}
      />
    );
  }, [children, open]);

  const linkComponent = children ? void 0 : Link;
  const clickHandler = children ? () => setOpen((p) => !p) : void 0;

  return (
    <>
      <ListItemButton onClick={clickHandler}>
        <ListItemIcon>
          <FiberManualRecordOutlined />
        </ListItemIcon>
        <ListItemText>{label}</ListItemText>
        {arrowIconNode}
      </ListItemButton>
      <Collapse in={open} timeout={"auto"} unmountOnExit>
        {children}
      </Collapse>
    </>
  );
}

export interface MenuItemProps {
  children: React.ReactNode;
  label: string;
}
