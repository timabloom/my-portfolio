import {
  Box,
  Flex,
  Link,
  Image,
  Button,
  Tooltip,
  useMediaQuery,
  IconButton,
  useColorMode,
  useColorModeValue,
  Slide,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useEffect, useState, useRef } from "react";
import { Link as ReachLink } from "react-router-dom";
import DarkMode from "./DarkMode";
import { useRecoilState } from "recoil";
import { language } from "../Recoil/language/atom";

function Header() {
  const [languageToggle, setLanguageToggle] = useRecoilState(language);
  const [grayFlagSE, setGrayFlagSE] = useState("grayscale(100%)");
  const [grayFlagGB, setGrayFlagGB] = useState();
  const [flagDisabledSE, setFlagDisabledSE] = useState(false);
  const [flagDisabledGB, setFlagDisabledGB] = useState(true);
  const [isLargerThan1340] = useMediaQuery("(min-width: 1340px)");
  const [isOpen, setIsOpen] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#edf2f7", "#303030");
  const refNav = useRef(null);

  function handleNav() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (refNav.current && !refNav.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside, true);
    return () =>
      document.removeEventListener("click", handleClickOutside, true);
  }, [refNav]);

  function handleFlagClicked(flag) {
    if (flag === "SE") {
      setLanguageToggle("SE");
      setGrayFlagGB("grayscale(100%)");
      setGrayFlagSE("");
      setFlagDisabledSE(true);
      setFlagDisabledGB(false);
    } else {
      setLanguageToggle("GB");
      setGrayFlagGB("");
      setGrayFlagSE("grayscale(100%)");
      setFlagDisabledSE(false);
      setFlagDisabledGB(true);
    }
  }

  function handleClick() {
    toggleColorMode();
  }

  return (
    <Flex
      justify="space-between"
      align="center"
      p="30px 0 30px 0"
      m="0 80px 0 80px"
    >
      {isLargerThan1340 ? (
        <Link w="300px" fontSize="xl" as={ReachLink} to="/">
          {languageToggle === "GB" ? "My Portfolio" : "Min Portfolio"}
        </Link>
      ) : (
        <Link fontSize="xl" as={ReachLink} to="/">
          {languageToggle === "GB" ? "My Portfolio" : "Min Portfolio"}
        </Link>
      )}
      {isLargerThan1340 ? (
        <>
          <Box>
            <Link mr={7} as={ReachLink} to="/">
              {languageToggle === "GB" ? "Home" : "Hem"}
            </Link>
            <Link mr={7} as={ReachLink} to="/About">
              {languageToggle === "GB" ? "About" : "Om mig"}
            </Link>
            <Link mr={7} as={ReachLink} to="/Projects">
              {languageToggle === "GB" ? "Projects" : "Projekt"}
            </Link>
            <Link mr={7} as={ReachLink} to="/Uses">
              {languageToggle === "GB" ? "Uses" : "Verktyg"}
            </Link>
            <Link as={ReachLink} to="/Contact">
              {languageToggle === "GB" ? "Contact" : "Kontakt"}
            </Link>
          </Box>
          <Flex alignItems="center">
            <DarkMode />
            <Tooltip hasArrow label="English">
              <Button
                mr="10px"
                onClick={() => handleFlagClicked("GB")}
                disabled={flagDisabledGB}
                _disabled
              >
                <Image
                  filter={grayFlagGB}
                  h="25px"
                  alt="EN"
                  src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg"
                />
              </Button>
            </Tooltip>
            <Tooltip hasArrow label="Svenska">
              <Button
                onClick={() => handleFlagClicked("SE")}
                disabled={flagDisabledSE}
                _disabled
              >
                <Image
                  filter={grayFlagSE}
                  h="25px"
                  alt="SV"
                  src="http://purecatamphetamine.github.io/country-flag-icons/3x2/SE.svg"
                />
              </Button>
            </Tooltip>
          </Flex>
        </>
      ) : (
        <Flex>
          <Tooltip hasArrow label="English">
            <Button
              mr="10px"
              onClick={() => handleFlagClicked("GB")}
              disabled={flagDisabledGB}
              _disabled
            >
              <Image
                filter={grayFlagGB}
                h="25px"
                alt="EN"
                src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg"
              />
            </Button>
          </Tooltip>
          <Tooltip hasArrow label="Svenska">
            <Button
              onClick={() => handleFlagClicked("SE")}
              disabled={flagDisabledSE}
              _disabled
            >
              <Image
                filter={grayFlagSE}
                h="25px"
                alt="SV"
                src="http://purecatamphetamine.github.io/country-flag-icons/3x2/SE.svg"
              />
            </Button>
          </Tooltip>
          <IconButton
            ml="40px"
            icon={
              isOpen === true ? (
                <CloseIcon w="20px" h="20px" />
              ) : (
                <HamburgerIcon w="30px" h="30px" />
              )
            }
            onClick={handleNav}
          />
          <Slide
            direction="left"
            in={isOpen}
            style={{ zIndex: "10", width: "none" }}
          >
            <Box h="100vh" bg={bg} ref={refNav}>
              <Heading h="100px" p="30px 20px 20px 30px">
                {languageToggle === "GB" ? "Menu" : "Meny"}
              </Heading>
              <Link as={ReachLink} to="/">
                <Button
                  onClick={handleNav}
                  p="20px 20px 40px 30px"
                  bg={bg}
                  display="block"
                  textAlign="left"
                  w="300px"
                  borderRadius="none"
                >
                  {languageToggle === "GB" ? "Home" : "Hem"}
                </Button>
              </Link>
              <Link as={ReachLink} to="/About">
                <Button
                  onClick={handleNav}
                  p="20px 20px 40px 30px"
                  bg={bg}
                  display="block"
                  textAlign="left"
                  w="300px"
                  borderRadius="none"
                >
                  {languageToggle === "GB" ? "About" : "Om mig"}
                </Button>
              </Link>
              <Link as={ReachLink} to="/Projects">
                <Button
                  onClick={handleNav}
                  p="20px 20px 40px 30px"
                  bg={bg}
                  display="block"
                  textAlign="left"
                  w="300px"
                  borderRadius="none"
                >
                  {languageToggle === "GB" ? "Projects" : "Projekt"}
                </Button>
              </Link>
              <Link as={ReachLink} to="/Uses">
                <Button
                  onClick={handleNav}
                  p="20px 20px 40px 30px"
                  bg={bg}
                  display="block"
                  textAlign="left"
                  w="300px"
                  borderRadius="none"
                >
                  {languageToggle === "GB" ? "Uses" : "Verktyg"}
                </Button>
              </Link>
              <Link as={ReachLink} to="/Contact">
                <Button
                  onClick={handleNav}
                  p="20px 20px 40px 30px"
                  bg={bg}
                  display="block"
                  textAlign="left"
                  w="300px"
                  borderRadius="none"
                >
                  {languageToggle === "GB" ? "Contact" : "Kontakt"}
                </Button>
              </Link>
              <Button
                p="20px 20px 40px 30px"
                bg={bg}
                display="block"
                textAlign="left"
                w="300px"
                borderRadius="none"
                onClick={handleClick}
              >
                {colorMode === "light"
                  ? languageToggle === "GB"
                    ? "Dark Theme"
                    : "Mörkt Tema"
                  : languageToggle === "GB"
                  ? "Light Mode"
                  : "Ljust Tema"}
              </Button>
            </Box>
          </Slide>
        </Flex>
      )}
    </Flex>
  );
}

export default Header;
