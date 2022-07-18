import { Box, Flex } from "@chakra-ui/react";
import WelcomeAnimation from "./WelcomeAnimation";

function Home() {
  return (
    <Box w="55%">
      <Flex direction="column">
        <WelcomeAnimation />
        <Box p="70px" color="whiteAlpha.900" bg="#414141">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        </Box>
      </Flex>
    </Box>
  );
}

export default Home;
