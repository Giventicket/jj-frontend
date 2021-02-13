import React from "react";
import ResponsiveImage from "../common/ResponsiveImage";
import palette from "../../lib/Palette";

const CardStyle = {
  display: "inline-block",
  position: "relative",
  width: "100%",
  backgroundColor: "transparent",
};

const contentDivStyle = {
  margin: "5px",
};

const nameDivStyle = {
  fontSize: "1.2rem",
  textAlign: "justify",
  color: palette.grey[9],
};
const positionDivStyle = {
  fontSize: "1.0rem",
  textAlign: "justify",
  color: palette.grey[5],
};

const bodyDivStyle = {
  fontSize: "1.0rem",
  textAlign: "justify",
  marginTop: "2rem",
};

const AboutUsCard = ({
  name = "name",
  position = "position",
  body = "body",
  src,
}) => {
  return (
    <div style={CardStyle}>
      <ResponsiveImage src={src} ratio={9 / 16} />
      <div style={contentDivStyle}>
        <div style={nameDivStyle}>
          <b>{name}</b>
        </div>
        <div style={positionDivStyle}>{position}</div>
        <div style={bodyDivStyle}>{body}</div>
      </div>
    </div>
  );
};

export default AboutUsCard;
