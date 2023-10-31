// MUI Imports
import { IconButton } from "@mui/material";
import { Microsoft } from "@mui/icons-material";

// Components Imports
import { BlankMenu } from "./blank-menu";

export function Blank() {
  return (
    <>
      <IconButton>
        <Microsoft />
      </IconButton>
      <BlankMenu />
    </>
  );
}
