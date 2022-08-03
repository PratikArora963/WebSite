import React from "react";
import { Box } from "@mui/material";
import Content from "./Content";

const ContentWrapper = () => {
  return (
    <Box
      sx={{
        width: "100%" ,
        height: 'calc(100vh - 64px)',
        // backgroundColor: "primary.dark",
        // "&:hover": {
        //   backgroundColor: "primary.main",
        //   opacity: [0.9, 0.8, 0.7],
        // },
      }}
    >
        <Content/>
    </Box>
  );
};

export default ContentWrapper;
