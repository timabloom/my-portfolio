import { Box, Flex, Link } from "@chakra-ui/react";
import DarkMode from "./DarkMode";

function Header() {
  return (
    <Box m="0 70px 0 70px">
      <Flex justifyContent="space-between" align="center" p="30px 0 30px 0">
        <Link w="110px" fontSize="xl" to="/">
          My Portfolio
        </Link>
        <Box>
          <Link mr={7} to="/">
            Home
          </Link>
          <Link mr={7} to="/About">
            About
          </Link>
          <Link mr={7} to="/Projects">
            Projects
          </Link>
          <Link mr={7} to="/Uses">
            Uses
          </Link>
          <Link to="/Contact">Contact</Link>
        </Box>
        <DarkMode />
      </Flex>
    </Box>
  );
}

export default Header;
