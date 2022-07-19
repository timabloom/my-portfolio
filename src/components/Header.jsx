import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import DarkMode from "./DarkMode";

function Header() {
  return (
    <Flex
      justify="space-between"
      align="center"
      p="30px 0 30px 0"
      m="0 70px 0 70px"
    >
      <Link w="110px" fontSize="xl" as={ReachLink} to="/">
        My Portfolio
      </Link>
      <Box>
        <Link mr={7} as={ReachLink} to="/">
          Home
        </Link>
        <Link mr={7} as={ReachLink} to="/About">
          About
        </Link>
        <Link mr={7} as={ReachLink} to="/Projects">
          Projects
        </Link>
        <Link mr={7} as={ReachLink} to="/Uses">
          Uses
        </Link>
        <Link as={ReachLink} to="/Contact">
          Contact
        </Link>
      </Box>
      <DarkMode />
    </Flex>
  );
}

export default Header;
