// MUI Imports
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Theme,
  useMediaQuery,
} from "@mui/material";
import { Menu, Close } from "@mui/icons-material";

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
            maxWidth: ["none", "none", 450],
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
          {/* <Divider>list</Divider> */}
          <Box flex={1} overflow={"hidden"} mt={2}>
            <Scrollbar>
              <Box height={2000} px={2}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusamus maxime optio voluptatibus eligendi ut praesentium
                possimus aperiam, itaque esse vero odio suscipit nobis
                accusantium libero amet, enim dolores. Magnam, illum.
                Dignissimos ullam illum ea non cupiditate ratione iusto,
                aspernatur dolorum beatae eos quibusdam ipsa eius dolores
                consectetur velit aut qui laudantium eveniet! Amet velit
                excepturi sequi vero eum. Excepturi, vel. Eligendi
                necessitatibus dolorem sunt sed fuga! Reprehenderit molestias
                ea, similique vitae, eveniet aspernatur tenetur eligendi veniam
                distinctio consectetur expedita incidunt veritatis optio nisi
                debitis, quasi quidem sequi ex voluptatibus magnam. Fuga libero,
                in possimus cumque delectus aspernatur obcaecati, autem
                asperiores voluptas distinctio deleniti, alias debitis eius
                nobis omnis error? Quisquam ducimus quaerat illum reprehenderit
                sunt similique mollitia beatae velit delectus! Voluptatum
                ducimus, eos porro veniam temporibus accusamus dolore eum quas
                nisi aut laudantium, fugit voluptatem quaerat error nesciunt
                pariatur aperiam excepturi quod dicta non quibusdam vel. Atque
                sint minima necessitatibus.
              </Box>
            </Scrollbar>
            D
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
