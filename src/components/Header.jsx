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
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  DrawerFooter,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { Link as ReachLink } from "react-router-dom";
import DarkMode from "./DarkMode";
import { useRecoilState } from "recoil";
import { language } from "../Recoil/language/atom";
import GB from "../assets/gb.svg";
import SE from "../assets/se.svg";

function Header() {
  const [languageToggle, setLanguageToggle] = useRecoilState(language);
  const [grayFlagSE, setGrayFlagSE] = useState("grayscale(100%)");
  const [grayFlagGB, setGrayFlagGB] = useState();
  const [flagDisabledSE, setFlagDisabledSE] = useState(false);
  const [flagDisabledGB, setFlagDisabledGB] = useState(true);
  const [tabletSize] = useMediaQuery("(min-width: 1080px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "#303030");

  useEffect(() => {
    handleFlagClicked(languageToggle);
  }, []);

  function handleFlagClicked(flag) {
    localStorage.setItem("language", JSON.stringify({ language: flag }));
    if (flag === "GB") {
      setLanguageToggle("GB");
      setGrayFlagGB("");
      setGrayFlagSE("grayscale(100%)");
      setFlagDisabledSE(false);
      setFlagDisabledGB(true);
    } else {
      setLanguageToggle("SE");
      setGrayFlagGB("grayscale(100%)");
      setGrayFlagSE("");
      setFlagDisabledSE(true);
      setFlagDisabledGB(false);
    }
  }

  function handleClick() {
    toggleColorMode();
  }

  return (
    <Flex
      maxWidth="1420px"
      flex={1}
      justifyContent="space-between"
      align="center"
      ml={tabletSize ? "80px" : "0"}
      p={tabletSize ? "30px 0 30px 0px" : "30px 35px 30px 35px"}
      borderBottom="solid 1px"
    >
      <Link
        _hover={{ textDecor: "none" }}
        w="220px"
        fontSize="xl"
        as={ReachLink}
        to="/"
      >
        {languageToggle === "GB" ? "My Portfolio" : "Min Portfolio"}
      </Link>
      {tabletSize ? (
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
                <Image filter={grayFlagGB} h="25px" alt="EN" src={GB} />
              </Button>
            </Tooltip>
            <Tooltip hasArrow label="Svenska">
              <Button
                onClick={() => handleFlagClicked("SE")}
                disabled={flagDisabledSE}
                _disabled
              >
                <Image filter={grayFlagSE} h="25px" alt="SV" src={SE} />
              </Button>
            </Tooltip>
          </Flex>
        </>
      ) : (
        <Flex>
          <IconButton
            ml="40px"
            icon={<HamburgerIcon w="30px" h="30px" />}
            onClick={onOpen}
          />
          <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent bg={bg}>
              <Flex
                ml="48px"
                borderBottom="1px solid"
                justifyContent="space-between"
                align="center"
                pr="24px"
              >
                <DrawerHeader h="100px" p="35px 20px 35px 0">
                  {languageToggle === "GB" ? "Menu" : "Meny"}
                </DrawerHeader>
                <IconButton
                  icon={<CloseIcon w="20px" h="20px" />}
                  onClick={onClose}
                />
              </Flex>
              <DrawerBody p="0" pl="48px">
                <Link as={ReachLink} to="/">
                  <Button
                    _hover={{ bg }}
                    _active={{ bg }}
                    onClick={onClose}
                    mt="10px"
                    p="20px 20px 40px 0"
                    bg={bg}
                    display="block"
                  >
                    {languageToggle === "GB" ? "Home" : "Hem"}
                  </Button>
                </Link>
                <Link as={ReachLink} to="/About">
                  <Button
                    _hover={{ bg }}
                    _active={{ bg }}
                    onClick={onClose}
                    p="20px 20px 40px 0"
                    bg={bg}
                    display="block"
                  >
                    {languageToggle === "GB" ? "About" : "Om mig"}
                  </Button>
                </Link>
                <Link as={ReachLink} to="/Projects">
                  <Button
                    _hover={{ bg }}
                    _active={{ bg }}
                    onClick={onClose}
                    p="20px 20px 40px 0"
                    bg={bg}
                    display="block"
                  >
                    {languageToggle === "GB" ? "Projects" : "Projekt"}
                  </Button>
                </Link>
                <Link as={ReachLink} to="/Contact">
                  <Button
                    _hover={{ bg }}
                    _active={{ bg }}
                    onClick={onClose}
                    p="20px 20px 40px 0"
                    bg={bg}
                    display="block"
                  >
                    {languageToggle === "GB" ? "Contact" : "Kontakt"}
                  </Button>
                </Link>
                <Button
                  _hover={{ textDecoration: "underline" }}
                  _active={{ bg }}
                  p="20px 20px 40px 0"
                  bg={bg}
                  display="block"
                  textAlign="left"
                  onClick={handleClick}
                  w="100%"
                >
                  {colorMode === "light"
                    ? languageToggle === "GB"
                      ? "Dark Theme"
                      : "Mörkt Tema"
                    : languageToggle === "GB"
                    ? "Light Mode"
                    : "Ljust Tema"}
                </Button>
              </DrawerBody>
              <DrawerFooter>
                <DrawerHeader minW="150px">
                  {languageToggle === "GB" ? "Language:" : "Språk:"}
                </DrawerHeader>
                <Tooltip hasArrow label="English">
                  <Button
                    mr="10px"
                    onClick={() => handleFlagClicked("GB")}
                    disabled={flagDisabledGB}
                    _disabled
                    p="0 12px 0 12px"
                  >
                    <Image filter={grayFlagGB} h="25px" alt="EN" src={GB} />
                  </Button>
                </Tooltip>
                <Tooltip hasArrow label="Svenska">
                  <Button
                    onClick={() => handleFlagClicked("SE")}
                    disabled={flagDisabledSE}
                    _disabled
                    p="0 12px 0 12px"
                  >
                    <Image filter={grayFlagSE} h="25px" alt="SV" src={SE} />
                  </Button>
                </Tooltip>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Flex>
      )}
    </Flex>
  );
}

export default Header;
