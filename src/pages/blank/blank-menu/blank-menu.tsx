// MUI Imports
import {
  Box,
  Drawer,
  IconButton,
  List,
  Theme,
  useMediaQuery,
} from "@mui/material";
import { Menu, Close } from "@mui/icons-material";

// React Imports
import React from "react";

// Components Imports
import { Scrollbar, MenuItem } from "@/components/ui";

export function BlankMenu() {
  const [open, setOpen] = React.useState(false);

  const closeHandler = () => {
    setOpen(false);
  };
  const openHandler = () => {
    setOpen(true);
  };

  const isSmall = useMediaQuery<Theme>((theme) => {
    return theme.breakpoints.down("md");
  });
  console.log(isSmall);

  return (
    <>
      <IconButton onClick={openHandler}>
        <Menu />
      </IconButton>
      <Drawer
        open={open}
        onClose={closeHandler}
        anchor="right"
        sx={{
          "& .MuiDrawer-paper": {
            width: "100%",
            maxWidth: { md: 320 },
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
          <Box flex={1} overflow={"hidden"} mt={2}>
            <Scrollbar>
              <List>
                <MenuItem label="one">
                  <MenuItem label="one one">{null}</MenuItem>
                  <MenuItem label="one two">{null}</MenuItem>
                  <MenuItem label="one three">{null}</MenuItem>
                  <MenuItem label="one four">{null}</MenuItem>
                  <MenuItem label="one five">null</MenuItem>
                </MenuItem>
              </List>
              <Box height={2000} px={2}></Box>
            </Scrollbar>
            D
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
