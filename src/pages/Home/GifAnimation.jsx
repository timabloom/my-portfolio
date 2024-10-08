import {
  Box,
  Image as ChakraImage,
  Text,
  Flex,
  useMediaQuery,
} from "@chakra-ui/react";
import typingAnimation from "../../assets/typing.webp";
import { useRecoilValue } from "recoil";
import { language } from "../../Recoil/language/atom";

function GifAnimation({ onLoad }) {
  const languageToggle = useRecoilValue(language);
  const [laptopSize] = useMediaQuery("(min-width: 1080px)");

  return (
    <Box w="45%">
      <ChakraImage
        alt="Animation of me typing on a keyboard"
        src={typingAnimation}
        onLoad={onLoad}
      ></ChakraImage>
      <Flex justifyContent="flex-end">
        {laptopSize && (
          <Text pos="absolute" m="5px">
            {languageToggle === "GB"
              ? "Last updated: 29-08-2024"
              : "Senast uppdaterad: 29-08-2024"}
          </Text>
        )}
      </Flex>
    </Box>
  );
}

export default GifAnimation;
