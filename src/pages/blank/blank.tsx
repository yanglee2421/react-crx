// MUI Imports
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
} from "@mui/material";
import { Microsoft } from "@mui/icons-material";

// Components Imports
import { BlankMenu } from "./blank-menu";

export function Blank() {
  return (
    <>
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
            <CardContent></CardContent>
            <CardActions></CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
