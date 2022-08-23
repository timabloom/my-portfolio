import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
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

function WelcomeAnimation() {
  const [typingAnimationTop, setTypingAnimationTop] = useState();
  const [typingAnimationBottom, setTypingAnimationBottom] = useState();
  const [animationDone, setAnimationDone] = useRecoilState(homeAnimation);
  const languageToggle = useRecoilValue(language);
  const [textMarkerAnimation, setTextMarkerAnimation] = useState();

  useEffect(() => {
    setAnimationDone(true);
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
      setTimeout(() => {
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
            {[
              "H",
              "e",
              "l",
              "l",
              "o",
              "!",
              "-",
              "I",
              "-",
              "A",
              "m",
              <br />,
              "T",
              "i",
              "m",
              "o",
              "t",
              "h",
              "y",
              "-",
              "M",
              "a",
              "g",
              "e",
              "e",
              ",",
            ].map((letters, index) => {
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
      }, "2400");
      setTimeout(() => {
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
        setTimeout(() => {
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
        }, "9400");
        setTypingAnimationBottom(
          <motion.div variants={container} initial="hidden" animate="visible">
            {[
              <br />,
              "a",
              "n",
              "d",
              ";",
              "W",
              "e",
              "l",
              "c",
              "o",
              "m",
              "e",
              ";",
              "t",
              "o",
              ";",
              "M",
              "y",
              ";",
              "P",
              "o",
              "r",
              "t",
              "f",
              "o",
              "l",
              "i",
              "o",
              ".",
            ].map((letters, index) => {
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
      }, "10000");
    } else {
      setTypingAnimationTop(
        <Text fontSize="36px">
          Hello! I Am
          <br />
          Timothy Magee,
        </Text>
      );
      setTypingAnimationBottom(
        <Text fontSize="18px" mt="24px">
          and Welcome to My Portfolio.
        </Text>
      );
      setTextMarkerAnimation(<Text display="none" />);
    }
  }, []);

  return (
    <Box
      h="300px"
      ml="80px"
      p="70px 70px 70px 0"
      borderTop="1px solid"
      fontSize="4xl"
      fontWeight="bold"
    >
      {languageToggle === "GB"
        ? typingAnimationTop
        : "Animation under utveckling."}
      {languageToggle === "GB"
        ? typingAnimationBottom
        : "Animation under utveckling."}
      {languageToggle === "GB" ? textMarkerAnimation : ""}
    </Box>
  );
}

export default WelcomeAnimation;
