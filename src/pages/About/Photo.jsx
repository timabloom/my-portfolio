import timothy from "../../assets/timothy.jpeg";
import { Blurhash } from "react-blurhash";
import { Box, Image, Flex, useColorModeValue, } from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";

function Photo() {
  const [loaded, setLoaded] = useState(false);
  const bg = useColorModeValue("#24242e", "#414141");

  function handleLoad() {
    setLoaded(true);
  }

  return (
    <Box bg={bg} w="300px" p="8px">
      <Flex>
        <Image
          src={timothy}
          height={378}
          width={284}
          alt="Photo of me"
          onLoad={handleLoad}
        />
        <Box position="absolute">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: !loaded ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeIn" }}
          >
            <Blurhash
              hash={"UZJ@zW~CMcoxvxngx]x]t6t7WCxYtRozV@aK"}
              height={378}
              width={284}
              resolutionX={32}
              resolutionY={32}
              punch={1}
            />
          </motion.div>
        </Box>
      </Flex>
    </Box>
  );
}

export default Photo;
