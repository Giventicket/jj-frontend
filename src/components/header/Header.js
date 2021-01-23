import React from "react";
import HeaderButton from "./HeaderButton";
import { Grid, Box } from "@material-ui/core";

const headerHeight = "10rem";

const BoxStyle = {
  backgroundColor: "#f1f3f5",
};

const GridRootStyle = {
  lineHeight: headerHeight,
  width: "80%",
  margin: "0 auto",
};
const GridLeftStyle = { paddingLeft: "0.75rem" };
const GridRightStyle = { textAlign: "end" };

const Header = () => {
  return (
    <Box height={headerHeight} style={BoxStyle}>
      <Grid container style={GridRootStyle}>
        <Grid item xs style={GridLeftStyle}>
          J&J
        </Grid>
        <Grid item xs style={GridRightStyle}>
          <HeaderButton to="/">Home</HeaderButton>
          <HeaderButton to="/about">About</HeaderButton>
          <HeaderButton to="/blog">Blog</HeaderButton>
          <HeaderButton to="/contactus">Contact Us</HeaderButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
