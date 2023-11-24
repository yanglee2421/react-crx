// MUI Imports
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Box,
} from "@mui/material";
import { LightOutlined, Microsoft } from "@mui/icons-material";

// Components Imports
import { BlankMenu } from "./blank-menu";

// Redux Imports
import { useAppDispatch, sliceTheme } from "@/redux";

// React Imports
import React from "react";

// Localforage Imports
import localforage from "localforage";

export function Blank() {
  const dispatch = useAppDispatch();

  const [bgImg, setBgImg] = React.useState("");

  const handleThemeChange = () => {
    const action = sliceTheme.actions.isDarkToggle();
    dispatch(action);
  };

  const handleFileChange: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >["onChange"] = async (evt) => {
    const files = evt.target.files;
    if (!files) return;
    if (!files.length) return;

    const dataURL = await new Promise((res, rej) => {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = (evt) => {
        const dataURL = evt.target?.result;

        if (typeof dataURL === "string") {
          res(dataURL);
          return;
        }

        rej(new Error(""));
      };
      reader.onerror = (evt) => {
        rej(evt.target?.error);
      };
    });

    await localforage.setItem("bgImg", dataURL);

    setBgImg((prev) => {
      const fileURL = URL.createObjectURL(files[0]);
      URL.revokeObjectURL(prev);
      return fileURL;
    });
  };

  React.useEffect(() => {
    // const db = indexedDB.open("sss", 3);
    // db.
  }, []);

  return (
    <>
      <Box
        position={"relative"}
        height={"100%"}
        sx={{
          backgroundImage: `url(${bgImg})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          "&::before,&::after": {
            content: '""',
            display: "table",
            clear: "both",
          },
        }}
      >
        <BlankMenu
          sx={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
          }}
        />
        <Grid container spacing={6} p={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardHeader />
              <CardContent>
                <IconButton>
                  <Microsoft />
                </IconButton>
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardHeader />
              <CardContent>
                <IconButton onClick={handleThemeChange}>
                  <LightOutlined />
                </IconButton>
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardHeader />
              <CardContent>
                <Button component="label" variant="contained">
                  <input
                    value={""}
                    onChange={handleFileChange}
                    type="file"
                    hidden
                    accept="image/*"
                  />
                  upload
                </Button>
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
