// MUI Imports
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Box,
} from "@mui/material";
import { Microsoft } from "@mui/icons-material";

// Components Imports
import { BlankMenu } from "./blank-menu";

// React Imports
import React from "react";

export function Blank() {
  return (
    <>
      <Box
        position={"relative"}
        height={"100%"}
        color={"common.white"}
        sx={{
          "&::before, &::after": {
            content: '""',
            display: "table",
            clear: "both",
          },
        }}
      >
        <BlankMenu />
        <Grid container spacing={4} p={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardHeader
                action={
                  <IconButton size="small">
                    <Microsoft fontSize="small" />
                  </IconButton>
                }
              />
              <CardContent></CardContent>
              <CardActions></CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardHeader />
              <CardContent></CardContent>
              <CardActions></CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardHeader />
              <CardContent></CardContent>
              <CardActions></CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
