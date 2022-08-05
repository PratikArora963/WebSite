import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { Box } from "@mui/material";
import Ludo from "../pages/Ludo";
import SnakeAndLadder from "../pages/SnakeAndLadder";
import About from "../pages/About";
import Content from "./Content";


const ContentWrapper = () => {
  const [position, setPosition] = useState(0);
  const [showPolicy, setShowPolicy]= useState(false);

  const pages = [<Ludo />, <SnakeAndLadder />, <About setShowPolicy={setShowPolicy}/>];

  const handlers = useSwipeable({
    onSwipedUp: (eventData) => {
      setPosition((prev) => (prev === pages.length - 1 ? prev : prev + 1));
      console.log("swipeup");
    },
    onSwipedDown: (eventData) => {
      setPosition((prev) => (prev === 0 ? 0 : prev - 1));
      console.log("swipedown");
    },
    delta: 10, // min distance(px) before a swipe starts. *See Notes*
    preventScrollOnSwipe: true, // prevents scroll during swipe (*See Details*)
    trackTouch: true, // track touch input
    trackMouse: true, // track mouse input
    rotationAngle: 0, // set a rotation angle
    swipeDuration: Infinity, // allowable duration of a swipe (ms). *See Notes*
    touchEventOptions: { passive: true },
  });

  return (
    <Box
      sx={{
        width: "100%",
        height: "calc(100vh - 64px)",
        maxHeight: "calc(100vh - 64px)",
        overflow: "auto",
      }}
    >
      { showPolicy ?
      <Content/>
      :
      <div {...handlers} className="row">
        {pages.map((page, i) => (
          <motion.div
            key={i}
            className="container"
            initial={{ rotate: 1 }}
            animate={{
              rotate: 0,
              top: `${(i - position) * 100 - 1}vh`,
            }}
            transition={{
              type: "tween",
              bounceStifafness: 260,
              bounceDamping: 20,
            }}
          >
            {page}
          </motion.div>
        ))}
      </div>
      }
    </Box>
  );
};

export default ContentWrapper;
