import React from "react";
import LoadableImage from "./LoadableImage";

//ratio = hieght/width
const ResponsiveImage = ({ src, ratio = 3 / 4 }) => {
  const divWrapperStyle = {
    width: "100%",
    display: "relative",
    paddingTop: `${ratio * 100}%`,
    overflow: "hidden",
    position: "relative",
    height: 0,
  };

  const divStyle = {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  };

  const LoadableImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <div style={divWrapperStyle}>
      <div style={divStyle}>
        <LoadableImage src={src} style={LoadableImageStyle} />
      </div>
    </div>
  );
};

export default ResponsiveImage;
