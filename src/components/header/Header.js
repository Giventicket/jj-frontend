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
const TextLinkStyle = {
  padding: "0.375rem 0.75rem",
};

const Header = () => {
  return (
    <Box height={headerHeight} style={BoxStyle}>
      <Grid container style={GridRootStyle}>
        <Grid item xs={4} style={GridLeftStyle}>
          J&J
        </Grid>
        <Grid item container xs={8} justify="flex-end">
          <TextLink to="/" style={TextLinkStyle} header>
            Home
          </TextLink>
          <TextLink to="/about" style={TextLinkStyle} header>
            About
          </TextLink>
          <TextLink to="/blog" style={TextLinkStyle} header>
            Blog
          </TextLink>
          <TextLink to="/contact" style={TextLinkStyle} header>
            Contact
          </TextLink>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
