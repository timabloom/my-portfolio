import { Box, Flex, Link, Image, Button, Tooltip } from "@chakra-ui/react";
import { useState } from "react";
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

  return (
    <Flex
      justify="space-between"
      align="center"
      p="30px 0 30px 0"
      m="0 200px 0 200px"
    >
      <Link w="309px" fontSize="xl" as={ReachLink} to="/">
        {languageToggle === "GB" ? "My Portfolio" : "Min Portfolio"}
      </Link>
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
    </Flex>
  );
}

export default Header;
