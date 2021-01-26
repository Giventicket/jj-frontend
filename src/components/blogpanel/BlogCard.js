import React from "react";
import ResponsiveImage from "../common/ResponsiveImage";
import TextLink from "../common/TextLink";
import testImage from "../../public/testImage.jpg";

const CardStyle = {
  display: "inline-block",
  backgroundColor: "#f8f0fc",
  position: "relative",
  overflow: "hidden",
  width: "100%",
  borderRadius: "10px",
};

const calendarDivStyle = {
  position: "absolute",
  top: "1rem",
  left: "1rem",
  backgroundColor: "red",
  opacity: 0.65,
  color: "white",
  width: "5rem",
  height: "5rem",
  textAlign: "center",
  borderRadius: "10px",
  fontSize: "1.5rem",
  lineHeight: "2.5rem",
};

const contentDivStyle = {
  margin: "5px",
};

const titleTextLinkStyle = {
  fontSize: "1.5rem",
  textAlign: "justify",
};

const bodyDivStyle = {
  fontSize: "1rem",
  textAlign: "justify",
};

const BlogCard = ({ to = "/" }) => {
  return (
    <div style={CardStyle}>
      <ResponsiveImage src={testImage} ratio={9 / 16} />
      <div style={calendarDivStyle}>
        <b>JAN</b>
        <hr style={{ margin: 0 }} />
        <b>26</b>
      </div>
      <div style={contentDivStyle}>
        <TextLink style={titleTextLinkStyle} to={to}>
          <b>Google inks pact for new 35-storey office</b>
        </TextLink>
        <hr />
        <div style={bodyDivStyle}>
          That dominion stars lights dominion divide years for fourth have don't
          stars is that he earth it first without heaven in place seed it second
          morning saying. That dominion stars lights dominion divide years for
          fourth have don't stars is that he earth it first without heaven in
          place seed it second morning saying.
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
