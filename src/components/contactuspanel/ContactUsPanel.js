import React from "react";
import { Grid, Box } from "@material-ui/core";

const PanelHeight = "10rem";

const BoxStyle = {
  backgroundColor: "#f8f0fc",
};

const GridRootStyle = {
  lineHeight: PanelHeight,
  width: "80%",
  margin: "0 auto",
};

const ContactUsPanel = () => {
  return (
    <Box height={PanelHeight} style={BoxStyle}>
      <Grid container style={GridRootStyle}>
        Contact Us Panel
      </Grid>
    </Box>
  );
};

export default ContactUsPanel;
