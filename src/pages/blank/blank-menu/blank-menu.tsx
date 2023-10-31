// MUI Imports
import {
  Box,
  Drawer,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Menu, Close, CircleOutlined } from "@mui/icons-material";

// React Imports
import React from "react";

// Components Imports
import { Scrollbar } from "@/components/ui";

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
            maxWidth: { md: 450 },
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
              <MenuList>
                <MenuItem>
                  <ListItemIcon>
                    <CircleOutlined />
                  </ListItemIcon>
                  <ListItemText>Hello</ListItemText>
                  <Typography variant="body2" color={"text.secondary"}>
                    sub
                  </Typography>
                </MenuItem>
              </MenuList>
              <Box height={2000} px={2}></Box>
            </Scrollbar>
            D
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
