import React from "react";
import { Grid, Box } from "@material-ui/core";
import BlogCard from "./BlogCard";
import PanelLabel from "../common/PanelLabel";

const BoxStyle = {
  backgroundColor: "#f3d9fa",
};

const ContainerGridStyle = {
  width: "80%",
  margin: "0 auto",
};

const BlogPanel = () => {
  return (
    <Box style={BoxStyle}>
      <PanelLabel>Blog</PanelLabel>
      <Grid container style={ContainerGridStyle} spacing={2}>
        <Grid item md={12} lg={6}>
          <BlogCard />
        </Grid>
        <Grid item md={12} lg={6}>
          <BlogCard />
        </Grid>
        <Grid item md={12} lg={6}>
          <BlogCard />
        </Grid>
        <Grid item md={12} lg={6}>
          <BlogCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BlogPanel;
