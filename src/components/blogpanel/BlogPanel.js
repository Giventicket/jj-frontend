import React from "react";
import { Grid, Box } from "@material-ui/core";
import BlogCard from "./BlogCard";
import BlogNavigatorBox from "./BlogNavigatorBox";
import PanelLabel from "../common/PanelLabel";
import palette from "../../lib/Palette";

const BoxStyle = {
  backgroundColor: palette.grey[3],
};

const ContainerGridStyle = {
  width: "80%",
  margin: "0 auto",
};

const BlogPanel = ({ to, posts, plusButton = false, navigator = false }) => {
  return (
    <Box style={BoxStyle}>
      <Box width="80%" ml="10%" mr="10%">
        <PanelLabel plusButton={plusButton} to={to}>
          Blog
        </PanelLabel>
      </Box>
      <Grid container style={ContainerGridStyle} spacing={2}>
        {posts.map(element => (
          <Grid item md={12} lg={6} key={element._id}>
            <BlogCard post={element} />
          </Grid>
        ))}
      </Grid>
      {navigator && <BlogNavigatorBox />}
    </Box>
  );
};

export default BlogPanel;
