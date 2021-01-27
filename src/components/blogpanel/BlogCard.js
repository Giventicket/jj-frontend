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

const getCalendarInfo = publishedDate => {
  let parts = publishedDate.split("-");
  let calendarInfo = new Date(parts[0], parts[1] - 1, parts[2].slice(0, 2));
  calendarInfo = calendarInfo.toString().split(" ");
  return calendarInfo;
};

const BlogCard = ({ post, to = "/" }) => {
  const calendarInfo = getCalendarInfo(post.publishedDate);
  return (
    <div style={CardStyle}>
      <ResponsiveImage src={testImage} ratio={9 / 16} />
      <div style={calendarDivStyle}>
        <b>{calendarInfo[1]}</b>
        <hr style={{ margin: 0 }} />
        <b>{calendarInfo[2]}</b>
      </div>
      <div style={contentDivStyle}>
        <TextLink style={titleTextLinkStyle} to={to}>
          <b>{post.title}</b>
        </TextLink>
        <hr />
        <div style={bodyDivStyle}>{post.body}</div>
      </div>
    </div>
  );
};

export default BlogCard;
