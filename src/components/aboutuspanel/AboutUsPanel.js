import React from "react";
import { Grid, Box } from "@material-ui/core";
import PanelLabel from "../common/PanelLabel";

const PanelHeight = "10rem";

const BoxStyle = {
  backgroundColor: "#f8f0fc",
};

const GridRootStyle = {
  backgroundColor: "#f8f0fc",
  lineHeight: PanelHeight,
  width: "80%",
  margin: "0 auto",
};

const AboutUsPanel = () => {
  return (
    <Box height={PanelHeight} style={BoxStyle}>
      <PanelLabel>About Us</PanelLabel>
      <Grid container style={GridRootStyle}>
        About Us Panel
      </Grid>
    </Box>
  );
};

export default AboutUsPanel;
