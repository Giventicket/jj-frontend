import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import palette from "../../lib/Palette";
let url = require("url");

const spanStyle = {
  color: palette.grey[9],
  verticalAlign: "bottom",
  textAlign: "center",
};

const hoverSpanStyleForHeader = {
  color: palette.grey[5],
  verticalAlign: "bottom",
  textAlign: "center",
};

const hoverSpanStyle = {
  color: palette.grey[6],
  verticalAlign: "bottom",
  textAlign: "center",
};

const TextLink = ({ children, to, style, header = false, location }) => {
  const pathname = location.pathname.split("/")[1];
  var toUrl = url.parse(to);
  const toPathname = toUrl.pathname.split("/")[1];
  const isMobile = useMediaQuery({ query: "(max-width : 960px)" });
  const [hover, setHover] = useState(false);

  const DivStyle = {
    minWidth: isMobile ? "4rem" : "4.5rem",
    textAlign: "center",
  };

  const clickedDivStyle = {
    minWidth: isMobile ? "4rem" : "4.5rem",
    textAlign: "center",
    borderBottom: `0.3rem solid ${palette.grey[6]}`,
  };

  if (header)
    return (
      <div style={pathname === toPathname ? clickedDivStyle : DivStyle}>
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

export default withRouter(TextLink);
