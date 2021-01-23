import React from "react";
import { Grid, Box } from "@material-ui/core";

const PanelHeight = "10rem";

const GridRootStyle = {
  backgroundColor: "f1f3f5",
  lineHeight: PanelHeight,
  width: "80%",
  margin: "0 auto",
};

const Footer = () => {
  return (
    <Box height={PanelHeight}>
      <Grid container style={GridRootStyle}>
        Footer
      </Grid>
    </Box>
  );
};

export default Footer;
