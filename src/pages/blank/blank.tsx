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
  >["onChange"] = (evt) => {
    const files = evt.target.files;
    if (!files) return;
    if (!files.length) return;

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
        <Grid container spacing={6} p={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardHeader />
              <CardContent>
                <IconButton>
                  <Microsoft />
                </IconButton>
                <BlankMenu />
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
