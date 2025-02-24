import {
  Box,
  Image as ChakraImage,
} from "@chakra-ui/react";
import typingAnimation from "../../assets/typing.webp";

function GifAnimation({ onLoad }) {

  return (
    <Box w="45%">
      <ChakraImage
        alt="Animation of me typing on a keyboard"
        src={typingAnimation}
        onLoad={onLoad}
      ></ChakraImage>
    </Box>
  );
}

export default GifAnimation;
