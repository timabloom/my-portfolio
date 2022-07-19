import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { homeAnimation } from "../../Recoil/atom";

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
  const [typingAnimation, setTypingAnimation] = useState();
  const [animationDone, setAnimationDone] = useRecoilState(homeAnimation);
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
        >
          <Text display="inline" borderLeft="3px solid"></Text>
        </motion.span>
      );
      setTimeout(() => {
        setTextMarkerAnimation(
          <motion.span
            animate={{ opacity: 1 }}
            transition={{
              repeat: 1,
              repeatDelay: 0,
            }}
          >
            <Text display="inline" borderLeft="3px solid"></Text>
          </motion.span>
        );
        setTimeout(() => {
          setTextMarkerAnimation(
            <motion.span
              animate={{ opacity: 1 }}
              transition={{
                repeat: 1,
                repeatDelay: 0,
              }}
            >
              <Text
                fontSize="18"
                display="inline"
                borderLeft="2px solid"
              ></Text>
            </motion.span>
          );
        }, "7822");
        setTimeout(() => {
          setTextMarkerAnimation(
            <motion.span
              animate={{ opacity: [0, 0, 1, 1] }}
              transition={{
                repeat: Infinity,
                repeatDelay: 0.22,
              }}
            >
              <Text
                fontSize="18"
                display="inline"
                borderLeft="2px solid"
              ></Text>
            </motion.span>
          );
        }, "16750");
        setTypingAnimation(
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
              } else if (letters === "-") {
                return (
                  <motion.span
                    key={index}
                    variants={item}
                    style={{ fontSize: "36px", opacity: 0 }}
                  >
                    {letters}
                  </motion.span>
                );
              } else if (index > 26) {
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
    } else {
      setTextMarkerAnimation(<Text display="none" />);
      setTypingAnimation(
        <Box>
          <Text fontSize="36px">
            Hello! I Am
            <br />
            Timothy Magee,
          </Text>
          <Text fontSize="18px" mt="24px">
            and Welcome to My Portfolio.
          </Text>
        </Box>
      );
    }
  }, []);

  return (
    <Box
      h="300px"
      ml="70px"
      p="70px 70px 70px 0"
      borderTop="1px solid"
      fontSize="4xl"
      fontWeight="bold"
    >
      {typingAnimation}
      {textMarkerAnimation}
    </Box>
  );
}

export default WelcomeAnimation;
