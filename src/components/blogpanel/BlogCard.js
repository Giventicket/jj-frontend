import React from "react";
import ResponsiveImage from "../ResponsiveImage";
import TextLink from "../TextLink";
import testImage from "../../public/testImage.jpg";
import { Link } from "react-router-dom";

const CardStyle = {
  display: "inline-block",
  backgroundColor: "#f8f0fc",
  position: "relative",
  overflow: "hidden",
  width: "100%",
  borderRadius: "10px",
};

const contentDivStyle = {
  margin: "5px",
};
const titleTextLinkStyle = {
  fontSize: "1.5rem",
};
const bodyDivStyle = {
  fontSize: "1rem",
};

const BlogCard = ({ to = "/" }) => {
  return (
    <div style={CardStyle}>
      <ResponsiveImage src={testImage} />
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
