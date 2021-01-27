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

const BlogPanel = ({ posts }) => {
  return (
    <Box style={BoxStyle}>
      <Box width="80%" ml="10%" mr="10%">
        <PanelLabel>Blog</PanelLabel>
      </Box>
      <Grid container style={ContainerGridStyle} spacing={2}>
        {posts.map(element => (
          <Grid item md={12} lg={6} key={element._id}>
            <BlogCard post={element} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BlogPanel;
