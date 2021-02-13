import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import palette from "../../lib/Palette";
let querystring = require("querystring");

const BlogNavigatorBox = ({ children, to, location }) => {
  const [clicked, setClicked] = useState(false);

  const [hover, setHover] = useState(false);

  const LinkStyle = {
    display: "inline-block",
    backgroundColor: clicked
      ? palette.grey[9]
      : hover
      ? palette.grey[5]
      : palette.grey[1],
    width: "2.5rem",
    height: "2.5rem",
    color: clicked ? palette.grey[0] : palette.grey[9],
    margin: "0.5rem",
    textAlign: "center",
    lineHeight: "2.5rem",
    borderRadius: "5px",
    border: `2px solid ${palette.grey[9]}`,
    boxSizing: "border-box",
  };

  useEffect(() => {
    let param = querystring.parse(location.search.slice(1));
    setClicked(param.page === children.toString());
  }, [children, location.search]);

  return (
    <Link to={to}>
      <div
        style={LinkStyle}
        onMouseOver={() => {
          setHover(true);
        }}
        onMouseOut={() => {
          setHover(false);
        }}
      >
        <b>{children}</b>
      </div>
    </Link>
  );
};

export default withRouter(BlogNavigatorBox);
