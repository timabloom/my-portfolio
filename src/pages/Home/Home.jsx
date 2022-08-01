import { Box, Flex } from "@chakra-ui/react";
import WelcomeAnimation from "./WelcomeAnimation";
import { useRecoilValue } from "recoil";
import { language } from "../../Recoil/language/atom";

function Home() {
  const languageToggle = useRecoilValue(language);

  return (
    <Flex w="55%" direction="column">
      <WelcomeAnimation />
      <Box p="70px" color="whiteAlpha.900" bg="#414141">
        {languageToggle === "GB"
          ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          : "Duis interdum eu ex ac dignissim. Aenean pretium tristique egestas."}
      </Box>
    </Flex>
  );
}

export default Home;
