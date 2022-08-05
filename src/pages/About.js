import React from "react";
import { Box, Typography } from "@mui/material";

const About = ({setShowPolicy}) => {
  return (
    <Box
      sx={{
        background: "transparent",
        color: "white",
        padding: "0 1rem",
        textAlign: "justify",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
        justifyContent: "space-between",
        height: "calc(100vh - 64px)",
      }}
    >
      <Typography
        gutterBottom
        variant="p"
        component="div"
        style={{ paddingTop: "2rem", fontSize: "1.2rem" }}
      >
        Skill Based Games is a company Registered in Gondia Maharashtra. With
        his team, our founder Mr. Pratik Arora has been keenly involved in
        developing the favourite Indian games in 3D. We bring you back your
        childhood games upgraded with technology. Enjoy niostaligia with our 3D
        Games…
      </Typography>

      <Typography gutterBottom variant="h5" component="div" className="">
        Call us At: +91-8485046957
        <br />
        <br />
        Email: arorapratik963@gmail.com
        <br />
        <br />
        Address: SBG Office, Near Star Fine Arts, Railtoli, Gondia - 441601
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "space-between",
          width: "100%",
          paddingBottom: "1.5rem",
        }}
        onClick={()=> setShowPolicy(true)}
      >
        <Typography sx={{ minWidth: 100 }}>Privacy Policy</Typography>
        <Typography sx={{ minWidth: 100 }}>T&C</Typography>
        <Typography sx={{ minWidth: 100 }}>Refund Policy</Typography>
      </Box>
    </Box>
  );
};

export default About;
