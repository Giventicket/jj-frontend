import React from "react";
import TextLink from "./common/TextLink";
import { Grid } from "@material-ui/core";

const headerHeight = "5rem";

const GridRootStyle = {
  lineHeight: headerHeight,
  width: "80%",
  margin: "0 auto",
};
const GridLeftStyle = { fontSize: "3rem" };

const Header = () => {
  return (
    <Grid container style={GridRootStyle}>
      <Grid item xs={4} style={GridLeftStyle}>
        J&J
      </Grid>
      <Grid item container xs={8} justify="flex-end">
        <TextLink to="/" header>
          Home
        </TextLink>
        <TextLink to="/aboutus" header>
          About
        </TextLink>
        <TextLink to="/blog?page=1" header>
          Blog
        </TextLink>
        <TextLink to="/contact" header>
          Contact
        </TextLink>
      </Grid>
    </Grid>
  );
};

export default Header;
