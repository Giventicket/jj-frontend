import React from "react";
import { Grid, Box } from "@material-ui/core";
import BlogCard from "./BlogCard";

//const PanelHeight = "15rem";
const PanelHeight = "none";

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
      <Grid container style={GridRootStyle} spacing={2}>
        <Grid item xs={6}>
          <BlogCard />
        </Grid>
        <Grid item xs={6}>
          <BlogCard />
        </Grid>
        <Grid item xs={6}>
          <BlogCard />
        </Grid>
        <Grid item xs={6}>
          <BlogCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BlogPanel;
