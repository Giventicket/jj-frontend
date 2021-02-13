import React from "react";
import { Grid, Box } from "@material-ui/core";
import BlogCard from "./BlogCard";
import BlogNavigatorBox from "./BlogNavigatorBox";
import PanelLabel from "../common/PanelLabel";
import palette from "../../lib/Palette";

const BoxStyle = {
  backgroundColor: palette.grey[2],
};

const divStyle = {
  textAlign: "center",
  paddingTop: "1rem",
  paddingBottom: "1rem",
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const BlogPanel = ({ to, posts, plusButton = false, navigator = false }) => {
  return (
    <Box style={BoxStyle}>
      <Box width="80%" ml="10%" mr="10%">
        <PanelLabel plusButton={plusButton} to={to}>
          Blog
        </PanelLabel>
        <Grid container spacing={2}>
          {posts.map((element, index) => (
            <Grid item md={12} lg={6} key={element._id}>
              <BlogCard post={element} to={`blog/${element._id}`} />
            </Grid>
          ))}
        </Grid>
        <div style={divStyle}>
          {navigator && (
            <>
              <BlogNavigatorBox>{"<<"}</BlogNavigatorBox>
              {numbers.map(number => (
                <BlogNavigatorBox key={number} to={`?page=${number}`}>
                  {number}
                </BlogNavigatorBox>
              ))}
              <BlogNavigatorBox>{">>"}</BlogNavigatorBox>
            </>
          )}
        </div>
      </Box>
    </Box>
  );
};

export default BlogPanel;
