// MUI Imports
import {
  Box,
  Drawer,
  IconButton,
  IconButtonProps,
  List,
  MenuItem,
} from "@mui/material";
import { Menu, Close, Dashboard } from "@mui/icons-material";

// React Imports
import React from "react";

// Components Imports
import { Scrollbar, MenuGroup } from "@/components/ui";

export function BlankMenu(props: IconButtonProps) {
  const { ...restProps } = props;
  const [open, setOpen] = React.useState(false);

  const closeHandler = () => {
    setOpen(false);
  };
  const openHandler = () => {
    setOpen(true);
  };

  return (
    <>
      <IconButton onClick={openHandler} {...restProps}>
        <Menu />
      </IconButton>
      <Drawer
        open={open}
        onClose={closeHandler}
        anchor="right"
        sx={{
          "& .MuiDrawer-paper": {
            width: "100%",
            maxWidth: { sm: 320 },
          },
        }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          boxSizing={"border-box"}
          height={"100%"}
        >
          <Box
            p={2}
            sx={{
              borderBottom: 1,
              borderColor(theme) {
                return theme.palette.divider;
              },
            }}
          >
            <IconButton onClick={closeHandler}>
              <Close />
            </IconButton>
          </Box>
          <Box flex={1} overflow={"hidden"}>
            <Scrollbar>
              <List disablePadding>
                <MenuGroup label="one" icon={<Dashboard />}>
                  <MenuItem>null</MenuItem>
                  <MenuItem>null</MenuItem>
                  <MenuItem>null</MenuItem>
                  <MenuItem>null</MenuItem>
                  <MenuItem>null</MenuItem>
                </MenuGroup>
              </List>
              <Box height={2000} px={2}></Box>
            </Scrollbar>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
