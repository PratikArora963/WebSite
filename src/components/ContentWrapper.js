import React from "react";
import { Box } from "@mui/material";
import Content from "./Content";

const ContentWrapper = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "calc(100vh - 64px)",
        maxHeight: "calc(100vh - 64px)",
        overflow: 'auto',
      }}
    >
      <Content />
    </Box>
  );
};

export default ContentWrapper;
