// MUI Imports
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
} from "@mui/material";
import { LightOutlined, Microsoft } from "@mui/icons-material";

// Components Imports
import { BlankMenu } from "./blank-menu";

// Redux Imports
import { useAppDispatch, sliceTheme } from "@/redux";

export function Blank() {
  const dispatch = useAppDispatch();

  const handleThemeChange = () => {
    const action = sliceTheme.actions.isDarkToggle();
    dispatch(action);
  };

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
            <CardContent>
              <IconButton onClick={handleThemeChange}>
                <LightOutlined />
              </IconButton>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
