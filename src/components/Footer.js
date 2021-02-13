import React from "react";
import { Box } from "@material-ui/core";
import palette from "../lib/Palette";

const BoxStyle = {
  backgroundColor: palette.grey[8],
  color: palette.grey[0],
};

const textDivStyle = {
  textAlign: "center",
};

const Footer = () => {
  return (
    <Box pt={3} pb={3} style={BoxStyle}>
      <div style={textDivStyle}>
        서울시 마포구 신촌로8길 8 / 8, Sinchon-ro 8-gil, Mapo-gu, Seoul,
        Republic of Korea.
      </div>
      <div style={textDivStyle}>
        T: +82 2 322 1747 / E: official@wejustmusic.com
      </div>
      <Box pt={3} />
      <div style={textDivStyle}>© JustMusic</div>
    </Box>
  );
};

export default Footer;
