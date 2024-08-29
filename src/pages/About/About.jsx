import {
  Box,
  Flex,
  useMediaQuery,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Photo from "./Photo";
import AboutText from "./AboutText";

function About() {
  const [tabletSize] = useMediaQuery("(min-width: 1080px)");
  const [mobileSize] = useMediaQuery("(min-width: 966px)");

  return (
    <Box m ={tabletSize ? "0 0 0 80px" : "0 30px 0 30px"} maxW="1420px">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeIn" }}
      >
        <Flex>
          {mobileSize && (
            <Flex direction="column" flex={1} m="80px 0 30px 0">
              <Photo />
            </Flex>
          )}
          <AboutText />
        </Flex>
      </motion.div>
    </Box>
  );
}

export default About;
