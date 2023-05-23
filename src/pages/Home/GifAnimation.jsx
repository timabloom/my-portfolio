import { Box, Image as ChakraImage, Text, Flex, useMediaQuery } from "@chakra-ui/react";
import typingGif from "../../assets/typing.gif";
import { useRecoilValue } from "recoil";
import { language } from "../../Recoil/language/atom";
import { useEffect, useState } from "react";

function GifAnimation() {
  const languageToggle = useRecoilValue(language);
  const [laptopSize] = useMediaQuery("(min-width: 1080px)");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.src = typingGif;
    img.onload = () => setLoading(true);
  }, []);

  return (
    <Box w="45%">
      {loading && (
        <ChakraImage
          alt="Animation of me typing on a keyboard"
          src={typingGif}
        ></ChakraImage>
      )}
      <Flex justifyContent="flex-end">
        {laptopSize && (
          <Text pos="absolute" m="5px">
            {languageToggle === "GB"
              ? "Last updated: 31-03-2023"
              : "Senast uppdaterad: 31-03-2023"}
          </Text>
        )}
      </Flex>
    </Box>
  );
}

export default GifAnimation;
