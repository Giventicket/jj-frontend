import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const spanStyle = {
  color: "black",
  verticalAlign: "bottom",
  textAlign: "center",
};
const hoverSpanStyleForHeader = {
  color: "red",
  verticalAlign: "bottom",
  textAlign: "center",
  fontSize: "1.2rem",
};
const hoverSpanStyle = {
  color: "red",
  verticalAlign: "bottom",
  textAlign: "center",
};

const TextLink = ({ children, to, style, header = false }) => {
  const isMobile = useMediaQuery({ query: "(max-width : 960px)" });
  const [hover, setHover] = useState(false);

  const DivStyle = {
    minWidth: isMobile ? "2.5rem" : "4.5rem",
    textAlign: "center",
  };

  if (header)
    return (
      <div style={style}>
        <div style={DivStyle}>
          <Link to={to}>
            <span
              style={hover ? hoverSpanStyleForHeader : spanStyle}
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
        </div>
      </div>
    );
  else
    return (
      <div style={style}>
        <Link to={to}>
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
      </div>
    );
};

export default TextLink;
