import React from "react";
import { Grid, Box } from "@material-ui/core";
import PanelLabel from "../common/PanelLabel";
import palette from "../../lib/Palette";
import AboutUsCard from "./AboutUsCard";
import person1 from "../../public/person1.jpg";
import person2 from "../../public/person2.jpg";
import person3 from "../../public/person3.jpg";
import person4 from "../../public/person4.jpg";

const BoxStyle = {
  backgroundColor: palette.grey[0],
};

const AboutUsPanel = () => {
  return (
    <Box style={BoxStyle}>
      <Box width="80%" ml="10%" mr="10%" pb={4}>
        <PanelLabel plusButton to="/aboutus">
          About us
        </PanelLabel>
        <Grid container spacing={4}>
          <Grid item xs>
            <AboutUsCard src={person1} />
          </Grid>
          <Grid item xs>
            <AboutUsCard src={person2} />
          </Grid>
          <Grid item xs>
            <AboutUsCard src={person3} />
          </Grid>
          <Grid item xs>
            <AboutUsCard src={person4} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutUsPanel;
