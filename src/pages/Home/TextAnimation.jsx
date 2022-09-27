import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { default as retrieveText } from "../../data/textAnimation";
import { homeAnimation } from "../../Recoil/homeAnimation/atom";
import { language } from "../../Recoil/language/atom";

const container = {
  hidden: { display: "inline" },
  visible: {
    display: "inline",
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { display: "none" },
  visible: {
    display: "inline",
  },
};

function TextAnimation() {
  const [typingAnimationTop, setTypingAnimationTop] = useState();
  const [typingAnimationBottom, setTypingAnimationBottom] = useState();
  const [animationDone, setAnimationDone] = useRecoilState(homeAnimation);
  const languageToggle = useRecoilValue(language);
  const [textMarkerAnimation, setTextMarkerAnimation] = useState();

  useEffect(() => {
    setAnimationDone(true);
    let textTop = [];
    let textBottom = [];
    let count1 = "2400";
    let count2 = "";
    let count3 = "";
    if (languageToggle === "GB" || languageToggle === null) {
      count2 = "10000";
      count3 = "19400";
      const text = retrieveText("GB");
      textTop = text.textTop;
      textBottom = text.textBottom;
    } else {
      count2 = "11000";
      count3 = "21500";
      const text = retrieveText("SE");
      textTop = text.textTop;
      textBottom = text.textBottom;
    }
    if (animationDone === false) {
      setTextMarkerAnimation(
        <motion.span
          animate={{ opacity: [0, 0, 1, 1] }}
          transition={{
            repeat: Infinity,
            repeatDelay: 0.22,
          }}
          style={{
            display: "inline",
            borderLeft: "3px solid",
          }}
        ></motion.span>
      );
      const timer1 = setTimeout(() => {
        setTextMarkerAnimation(
          <motion.span
            animate={{ opacity: 1 }}
            transition={{
              repeat: 1,
              repeatDelay: 0,
            }}
            style={{
              display: "inline",
              borderLeft: "3px solid",
            }}
          ></motion.span>
        );
        setTypingAnimationTop(
          <motion.div variants={container} initial="hidden" animate="visible">
            {textTop.map((letters, index) => {
              if (letters === "-") {
                return (
                  <motion.span
                    key={index}
                    variants={item}
                    style={{ fontSize: "36px", opacity: 0 }}
                  >
                    {letters}
                  </motion.span>
                );
              } else {
                return (
                  <motion.span
                    key={index}
                    variants={item}
                    style={{ fontSize: "36px" }}
                  >
                    {letters}
                  </motion.span>
                );
              }
            })}
          </motion.div>
        );
      }, count1);
      const timer2 = setTimeout(() => {
        setTextMarkerAnimation(
          <motion.span
            animate={{ opacity: 1 }}
            transition={{
              repeat: 1,
              repeatDelay: 0,
            }}
            style={{
              fontSize: "18px",
              display: "inline",
              borderLeft: "2px solid",
            }}
          ></motion.span>
        );
        setTypingAnimationBottom(
          <motion.div variants={container} initial="hidden" animate="visible">
            {textBottom.map((letters, index) => {
              if (letters === ";") {
                return (
                  <motion.span
                    key={index}
                    variants={item}
                    style={{
                      fontSize: "18px",
                      opacity: 0,
                    }}
                  >
                    {letters}
                  </motion.span>
                );
              } else {
                return (
                  <motion.span
                    key={index}
                    variants={item}
                    style={{
                      fontSize: "18px",
                    }}
                  >
                    {letters}
                  </motion.span>
                );
              }
            })}
          </motion.div>
        );
      }, count2);
      const timer3 = setTimeout(() => {
        setTextMarkerAnimation(
          <motion.span
            animate={{ opacity: [0, 0, 1, 1] }}
            transition={{
              repeat: Infinity,
              repeatDelay: 0.22,
            }}
            style={{
              fontSize: "18px",
              display: "inline",
              borderLeft: "2px solid",
            }}
          ></motion.span>
        );
      }, count3);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    } else {
      setTypingAnimationTop(
        <Text fontSize="36px">
          {languageToggle === "GB" ? "Hello! I Am" : "Hej! Jag Heter"}
          <br />
          Timothy Magee,
        </Text>
      );
      setTypingAnimationBottom(
        <Text fontSize="18px" mt="24px">
          {languageToggle === "GB"
            ? "and Welcome to My Portfolio."
            : "och Välkommen till Min Portfolio."}
        </Text>
      );
      setTextMarkerAnimation(<Text display="none" />);
    }
  }, [languageToggle]);

  return (
    <Box
      h="300px"
      ml="80px"
      p="70px 70px 70px 0"
      borderTop="1px solid"
      fontSize="4xl"
      fontWeight="bold"
    >
      {typingAnimationTop}
      {typingAnimationBottom}
      {textMarkerAnimation}
    </Box>
  );
}

export default TextAnimation;