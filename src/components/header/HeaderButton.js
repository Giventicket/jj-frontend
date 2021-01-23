import React from "react";
import { Link } from "react-router-dom";

const LinkStyle = {
  padding: "0.375rem 0.75rem",
  color: "black",
  "&:hover": {
    color: "red",
  },
};

const HeaderButton = ({ children, to }) => {
  return (
    <Link style={LinkStyle} to={to}>
      {children}
    </Link>
  );
};

export default HeaderButton;
