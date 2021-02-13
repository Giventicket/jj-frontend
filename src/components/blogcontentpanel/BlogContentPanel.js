import React from "react";
import { Box, Button } from "@material-ui/core";
import palette from "../../lib/Palette";
import testImage from "../../public/testImage.jpg";
import ResponsiveImage from "../common/ResponsiveImage";

const BoxStyle = {
  backgroundColor: palette.grey[2],
  textAlign: "right",
};
const divTitle = {
  fontSize: "1.5rem",
  textAlign: "center",
};
const divInfo = {
  fontSize: "0.8rem",
};
const divContent = {
  fontSize: "1.0rem",
  textAlign: "justify",
};
const BlogContentPanel = () => {
  return (
    <Box width="60%" pl="20%" pr="20%" style={BoxStyle} pt={2} pb={2}>
      <div style={divTitle}>제목입니다</div>
      <hr style={{ margin: 0 }} />
      <Box pt={2} pb={2}>
        <div style={divInfo}>
          조회수 <b>591</b> | 작성일 <b> 2021.01.29</b>
        </div>
      </Box>
      <ResponsiveImage src={testImage} ratio={9 / 16} />
      <Box pt={2} pb={2}>
        <div style={divContent}>콘텐츠입니다</div>
      </Box>
      <Button
        variant="outlined"
        href="/blog?page=1"
        style={{ backgroundColor: "white" }}
      >
        <b>목록으로</b>
      </Button>
    </Box>
  );
};

export default BlogContentPanel;
