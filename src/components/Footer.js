import React from "react";
import { Box } from "@material-ui/core";

const textDivStyle = {
  textAlign: "center",
};

const Footer = () => {
  return (
    <>
      <hr style={{ margin: 0 }} />
      <Box mt={3} mb={3}>
        <div style={textDivStyle}>
          서울시 마포구 신촌로8길 8 / 8, Sinchon-ro 8-gil, Mapo-gu, Seoul,
          Republic of Korea.
        </div>
        <div style={textDivStyle}>
          T: +82 2 322 1747 / E: official@wejustmusic.com
        </div>
        <Box mt={3} />
        <div style={textDivStyle}>© JustMusic</div>
      </Box>
    </>
  );
};

export default Footer;
