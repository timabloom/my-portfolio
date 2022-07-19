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
  const [textMarker, setTextMarker] = useState({
    fontSize: "4xl",
    position: "static",
    top: 0,
    borderLeft: "3px solid",
    opacity: 1,
    repeat: 1,
    repeatDelay: 0,
  });
  const [markerDone, setMarkerDone] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (animationDone === false) {
        setTimeout(() => {
          setTextMarker({
            fontSize: "18px",
            position: "relative",
            top: "19px",
            borderLeft: "2px solid",
            opacity: 1,
            repeat: 1,
            repeatDelay: 0,
          });
        }, "7826");
        setTimeout(() => {
          setTextMarker({
            fontSize: "18px",
            position: "relative",
            top: "19px",
            borderLeft: "2px solid",
            opacity: [0, 0, 1, 1],
            repeat: Infinity,
            repeatDelay: 0.22,
          });
        }, "17000");
        setAnimationDone(true);
        setMarkerDone(true);
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
                      position: "relative",
                      top: "19px",
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
                      position: "relative",
                      top: "19px",
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
      }
    }, "1000");
    if (animationDone === true) {
      setTypingAnimation(
        <Box>
          <Text fontSize="36px">
            Hello! I Am
            <br />
            Timothy Magee,
          </Text>
          <Text display="inline" fontSize="18px">
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
      fontSize={textMarker.fontSize}
      fontWeight="bold"
    >
      {typingAnimation}
      {markerDone ? (
        <motion.span
          animate={{ opacity: textMarker.opacity }}
          transition={{
            repeat: textMarker.repeat,
            repeatDelay: textMarker.repeatDelay,
          }}
        >
          <Text
            display="inline"
            borderLeft={textMarker.borderLeft}
            position={textMarker.position}
            top={textMarker.top}
          ></Text>
        </motion.span>
      ) : (
        <Text display="none" />
      )}
    </Box>
  );
}

export default WelcomeAnimation;
