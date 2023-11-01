// MUI Imports
import {
  FiberManualRecordOutlined,
  KeyboardArrowRight,
} from "@mui/icons-material";
import {
  Collapse,
  ListItemButton,
  ListItemButtonProps,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

// React Imports
import React from "react";

export function MenuGroup(props: MenuGroupProps) {
  // ** Props
  const { label, children, icon, ...restProps } = props;

  const [open, setOpen] = React.useState(false);
  const toggleHandler = () => {
    setOpen((p) => !p);
  };

  // Arrow icon node
  const arrowNode = React.useMemo(() => {
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
  }, [open]);

  // Menu icon node
  const iconNode = React.useMemo(() => {
    if (icon) return icon;
    return <FiberManualRecordOutlined />;
  }, [icon]);

  return (
    <>
      <ListItemButton
        onClick={toggleHandler}
        sx={{
          bgcolor(theme) {
            return open ? theme.palette.action.selected : void 0;
          },
        }}
        {...restProps}
      >
        <ListItemIcon>{iconNode}</ListItemIcon>
        <ListItemText>{label}</ListItemText>
        {arrowNode}
      </ListItemButton>
      <Collapse in={open} timeout={"auto"} unmountOnExit>
        {children}
      </Collapse>
    </>
  );
}

export interface MenuGroupProps extends ListItemButtonProps {
  label: React.ReactNode;
  icon?: React.ReactNode;
}
