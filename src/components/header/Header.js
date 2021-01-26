import React from "react";
import TextLink from "../common/TextLink";
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
const TextLinkStyle = {
  padding: "0.375rem 0.75rem",
};

const Header = () => {
  return (
    <Box height={headerHeight} style={BoxStyle}>
      <Grid container style={GridRootStyle}>
        <Grid item xs style={GridLeftStyle}>
          J&J
        </Grid>
        <Grid item xs style={GridRightStyle}>
          <TextLink to="/" style={TextLinkStyle}>
            Home
          </TextLink>
          <TextLink to="/about" style={TextLinkStyle}>
            About
          </TextLink>
          <TextLink to="/blog" style={TextLinkStyle}>
            Blog
          </TextLink>
          <TextLink to="/contactus" style={TextLinkStyle}>
            Contact Us
          </TextLink>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
