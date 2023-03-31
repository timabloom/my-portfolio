import { Box, Image, Text, Flex, useMediaQuery } from "@chakra-ui/react";
import typingGif from "../../assets/typing.gif";
import { useRecoilValue } from "recoil";
import { language } from "../../Recoil/language/atom";

function GifAnimation() {
  const languageToggle = useRecoilValue(language);
  const [laptopSize] = useMediaQuery("(min-width: 1080px)");

  return (
    <Box w="45%">
      <Image alt="Animation of me typing on a keyboard" src={typingGif}></Image>
      <Flex justifyContent="flex-end">
        {laptopSize && (
          <Text pos="absolute" m="5px">
            {languageToggle === "GB"
              ? "Last updated: 19-10-2022"
              : "Senast uppdaterad: 19-10-2022"}
          </Text>
        )}
      </Flex>
    </Box>
  );
}

export default GifAnimation;
