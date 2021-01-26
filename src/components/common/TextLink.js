import React, { useState } from "react";
import { Link } from "react-router-dom";

const spanStyle = {
  color: "black",
};
const hoverSpanStyle = {
  color: "red",
};

const TextLink = ({ children, to, style }) => {
  const [hover, setHover] = useState(false);

  return (
    <Link to={to} style={style}>
      <span
        style={hover ? hoverSpanStyle : spanStyle}
        onMouseOver={() => {
          setHover(true);
        }}
        onMouseOut={() => {
          setHover(false);
        }}
      >
        {children}
      </span>
    </Link>
  );
};

export default TextLink;
