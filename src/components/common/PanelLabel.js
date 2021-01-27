import React from "react";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";

const labelDivStyle = {
  fontSize: "1rem",
  textAlign: "center",
  padding: "1rem",
};

const PanelLabel = ({ children, to = "/" }) => {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          paddingTop: "0.5rem",
        }}
      >
        <IconButton
          color="secondary"
          aria-label="show more"
          component="div"
          size="small"
          href={to}
        >
          <AddIcon />
        </IconButton>
      </div>
      <div style={labelDivStyle}>{children}</div>
    </div>
  );
};

export default PanelLabel;
