import React from "react";
import AddIcon from "@material-ui/icons/Add";
import { Button } from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const greyTheme = createMuiTheme({ palette: { primary: grey } });

const labelDivStyle = {
  fontSize: "2rem",
  textAlign: "center",
  padding: "1rem",
  lineHeight: "4rem",
};

const buttonDivStyle = {
  position: "absolute",
  right: 0,
  top: 0,
  bottom: 0,
  paddingTop: "1rem",
};

const PanelLabel = ({ children, to = "/", plusButton = false }) => {
  return (
    <div style={{ position: "relative" }}>
      {plusButton && (
        <div style={buttonDivStyle}>
          <MuiThemeProvider theme={greyTheme}>
            <Button href={to}>
              <AddIcon />
            </Button>
          </MuiThemeProvider>
        </div>
      )}
      <div style={labelDivStyle}>{children}</div>
    </div>
  );
};

export default PanelLabel;
