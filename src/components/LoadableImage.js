import React, { useState } from "react";

const LoadableImage = ({ src, style }) => {
  const [loaded, setLoaded] = useState("false");
  return (
    <>
      <img
        alt="loading"
        src={src}
        style={{ display: "none" }}
        onLoad={() => {
          setLoaded(true);
        }}
      />
      {loaded && <img alt="actual" src={src} style={style} />}
    </>
  );
};

export default LoadableImage;
