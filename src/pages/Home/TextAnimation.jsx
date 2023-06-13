import { Box, Text, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { default as retrieveText } from "../../data/textAnimation";
import { homeAnimation } from "../../Recoil/homeAnimation/atom";
import { language } from "../../Recoil/language/atom";
import TextNoAnimation from "./TextNoAnimation";
import TextTop from "./TextTop";
import TextBottom from "./TextBottom";
import MarkerTop from "./MarkerTop";
import MarkerBottom from "./MarkerBottom";

const container = {
  hidden: { display: "inline" },
  visible: {
    display: "inline",
    transition: {
      staggerChildren: 0.18,
    },
  },
};

function TextAnimation({ onLoad }) {
  const [typingAnimationTop, setTypingAnimationTop] = useState();
  const [typingAnimationBottom, setTypingAnimationBottom] = useState();
  const [animationDone, setAnimationDone] = useRecoilState(homeAnimation);
  const languageToggle = useRecoilValue(language);
  const [textMarkerAnimation, setTextMarkerAnimation] = useState();
  const [laptopSize] = useMediaQuery("(min-width: 1250px)");
  const [phoneSizeMargin] = useMediaQuery("(min-width: 660px)");

  useEffect(() => {
    if (onLoad) {
      let textTop = [];
      let textBottom = [];
      let count1 = "2400";
      let count2 = "";
      let count3 = "";
      if (languageToggle === "GB" || languageToggle === null) {
        count2 = "7100";
        count3 = "12500";
        const text = retrieveText("GB");
        textTop = text.textTop;
        textBottom = text.textBottom;
      } else {
        count2 = "7700";
        count3 = "14000";
        const text = retrieveText("SE");
        textTop = text.textTop;
        textBottom = text.textBottom;
      }
      if (animationDone === false) {
        setTextMarkerAnimation(
          <MarkerTop
            opacity={[0, 0, 1, 1]}
            repeat={Infinity}
            repeatDelay={0.22}
          />
        );
        const timer1 = setTimeout(() => {
          setTextMarkerAnimation(
            <MarkerTop opacity={1} repeat={1} repeatDelay={0} />
          );
          setTypingAnimationTop(
            <motion.div variants={container} initial="hidden" animate="visible">
              {textTop.map((letters, index) => {
                if (letters === "-") {
                  return <TextTop key={index} letters={letters} opacity={0} />;
                } else {
                  return <TextTop key={index} letters={letters} opacity={1} />;
                }
              })}
            </motion.div>
          );
        }, count1);
        const timer2 = setTimeout(() => {
          setTextMarkerAnimation(
            <MarkerBottom opacity={1} repeat={1} repeatDelay={0} />
          );
          setTypingAnimationBottom(
            <motion.div variants={container} initial="hidden" animate="visible">
              {textBottom.map((letters, index) => {
                if (letters === ";") {
                  return (
                    <TextBottom key={index} letters={letters} opacity={0} />
                  );
                } else {
                  return (
                    <TextBottom key={index} letters={letters} opacity={1} />
                  );
                }
              })}
            </motion.div>
          );
        }, count2);
        const timer3 = setTimeout(() => {
          setTextMarkerAnimation(
            <MarkerBottom
              opacity={[0, 0, 1, 1]}
              repeat={Infinity}
              repeatDelay={0.22}
            />
          );
        }, count3);
        return () => {
          clearTimeout(timer1);
          clearTimeout(timer2);
          clearTimeout(timer3);
          setAnimationDone(true);
        };
      } else {
        setTypingAnimationTop(<TextNoAnimation placement="top" />);
        setTypingAnimationBottom(<TextNoAnimation placement="Bottom" />);
        setTextMarkerAnimation(<Text display="none" />);
      }
    }
  }, [languageToggle, onLoad]);

  return (
    <Box
      ml={laptopSize ? "80px" : phoneSizeMargin ? "6vw" : "20px"}
      pt={laptopSize ? "80px" : "6vw"}
    >
      {typingAnimationTop}
      {typingAnimationBottom}
      {textMarkerAnimation}
    </Box>
  );
}

export default TextAnimation;
