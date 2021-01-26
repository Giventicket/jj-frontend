import React from "react";

const labelDivStyle = {
  fontSize: "3rem",
  textAlign: "center",
  padding: "1rem",
};

const PanelLabel = ({ children }) => {
  return <div style={labelDivStyle}>{children}</div>;
};

export default PanelLabel;
