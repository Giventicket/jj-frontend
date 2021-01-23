import React from "react";
import { Grid, Box } from "@material-ui/core";

const PanelHeight = "10rem";

const BoxStyle = {
  backgroundColor: "#f3d9fa",
};

const GridRootStyle = {
  lineHeight: PanelHeight,
  width: "80%",
  margin: "0 auto",
};

const BlogPanel = () => {
  return (
    <Box height={PanelHeight} style={BoxStyle}>
      <Grid container style={GridRootStyle}>
        Blog Panel
      </Grid>
    </Box>
  );
};

export default BlogPanel;
