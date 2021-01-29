import React, { useState } from "react";
import { Link } from "react-router-dom";
import palette from "../../lib/Palette";

const LinkStyle = {
  display: "inline-block",
  backgroundColor: palette.grey[6],
  width: "1.5rem",
  height: "1.5rem",
  color: "white",
};

const hoverLinkStyle = {
  display: "inline-block",
  backgroundColor: palette.grey[9],
  width: "1.5rem",
  height: "1.5rem",
  color: "white",
};

const BlogNavigatorBox = ({ children, to }) => {
  const [hover, setHover] = useState(false);
  return (
    <Link to={to}>
      <div
        style={hover ? hoverLinkStyle : LinkStyle}
        onMouseOver={() => {
          setHover(true);
        }}
        onMouseOut={() => {
          setHover(false);
        }}
      >
        {children}
      </div>
    </Link>
  );
};

export default BlogNavigatorBox;
