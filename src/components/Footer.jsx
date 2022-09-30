import { Box, Link, Text, Flex, useColorModeValue } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useRecoilValue } from "recoil";
import { language } from "../Recoil/language/atom";

function Footer() {
  const color = useColorModeValue("#414141", "white");
  const languageToggle = useRecoilValue(language);

  return (
    <Flex p="70px 0 70px 0" direction="column" alignItems="center">
      <Box mb={5} color={color}>
        <Link mr={6} href="" _hover={{ color: "#0a66c2" }}>
          <FontAwesomeIcon icon={faLinkedin} size="2x" fixedWidth />
        </Link>
        <Link
          mr={6}
          href="https://github.com/timabloom"
          _hover={{ opacity: "70%" }}
        >
          <FontAwesomeIcon icon={faGithub} size="2x" fixedWidth />
        </Link>
        <Link href="" _hover={{ color: "#ffd43b" }}>
          <FontAwesomeIcon icon={faEnvelope} size="2x" fixedWidth />
        </Link>
      </Box>
      <Text>
        {languageToggle === "GB"
          ? "Vestibulum accumsan placerat tellus"
          : "Morbi cursus bibendum vestibulum."}
      </Text>
    </Flex>
  );
}

export default Footer;
