import { Box, Flex, Text } from "@chakra-ui/react";
import TextAnimation from "./TextAnimation";
import { useRecoilValue } from "recoil";
import { language } from "../../Recoil/language/atom";
import GifAnimation from "./GifAnimation";

function Home() {
  const languageToggle = useRecoilValue(language);

  return (
    <Flex>
      <Flex w="55%" direction="column" justifyContent="space-between">
        <TextAnimation />
        <Box p="70px 0 70px 0" color="white" bg="#414141">
          {languageToggle === "GB" ? (
            <Text ml="200px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          ) : (
            <Text ml="200px">
              Duis interdum eu ex ac dignissim. Aenean pretium tristique
              egestas.
            </Text>
          )}
        </Box>
      </Flex>
      <GifAnimation />
    </Flex>
  );
}

export default Home;
