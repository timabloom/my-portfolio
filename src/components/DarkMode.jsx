import { IconButton, useColorMode } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

function DarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [iconToggle, setIconToggle] = useState();
  const [colorModeClicked, setColorModeClicked] = useState(false);
  const [clickTimer, setClickTimer] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem("chakra-ui-color-mode") === "light" &&
      colorModeClicked === false
    ) {
      setIconToggle(
        <AnimatePresence>
          <motion.div
            key="sunIcon"
            exit={{
              position: "absolute",
              zIndex: -1,
              opacity: 0,
              scale: 0,
              rotate: -180,
              transition: { duration: 0.5 },
            }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <SunIcon w="25px" h="25px" _hover={{ color: "orange.400" }} />
          </motion.div>
        </AnimatePresence>
      );
    } else if (
      localStorage.getItem("chakra-ui-color-mode") === "dark" &&
      colorModeClicked === false
    ) {
      setIconToggle(
        <AnimatePresence>
          <motion.div
            key="moonIcon"
            exit={{
              position: "absolute",
              zIndex: -1,
              opacity: 0,
              scale: 0,
              rotate: 180,
              transition: { duration: 0.5 },
            }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <MoonIcon w="25px" h="25px" _hover={{ color: "yellow.400" }} />
          </motion.div>
        </AnimatePresence>
      );
    } else if (colorMode === "dark") {
      setIconToggle(
        <AnimatePresence>
          <motion.div
            key="moonIcon"
            animate={{
              scale: [0, 1, 1],
              rotate: [180, -10, 0],
            }}
            exit={{
              position: "absolute",
              zIndex: -1,
              opacity: 0,
              scale: 0,
              rotate: 180,
              transition: { duration: 0.5 },
            }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <MoonIcon w="25px" h="25px" _hover={{ color: "yellow.400" }} />
          </motion.div>
        </AnimatePresence>
      );
    } else {
      setIconToggle(
        <AnimatePresence>
          <motion.div
            key="sunIcon"
            animate={{
              scale: [0, 1, 1],
              rotate: [0, 190, 180],
            }}
            exit={{
              position: "absolute",
              zIndex: -1,
              opacity: 0,
              scale: 0,
              rotate: 0,
              transition: { duration: 0.5 },
            }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <SunIcon w="25px" h="25px" _hover={{ color: "orange.400" }} />
          </motion.div>
        </AnimatePresence>
      );
    }
  }, [colorMode, colorModeClicked]);

  function handleClick() {
    setClickTimer(true);
    setColorModeClicked(true);
    toggleColorMode();
    setTimeout(() => {
      setClickTimer(false);
    }, "600");
  }

  return (
    <>
      <IconButton
        bg="none"
        _hover={{ bg: "none" }}
        _active={{
          bg: "none",
        }}
        opacity="1"
        disabled={clickTimer}
        _disabled
        onClick={handleClick}
        icon={iconToggle}
      />
    </>
  );
}

export default DarkMode;
