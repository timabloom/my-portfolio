import {
  Box,
  Flex,
  Text,
  useMediaQuery,
  Button,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import TextAnimation from "./TextAnimation";
import TechStack from "./TechStack";
import { useRecoilValue } from "recoil";
import { language } from "../../Recoil/language/atom";
import GifAnimation from "./GifAnimation";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { Link as ReachLink } from "react-router-dom";

function Home() {
  const languageToggle = useRecoilValue(language);
  const [desktopSize] = useMediaQuery("(min-width: 1500px)");
  const [tabletSize] = useMediaQuery("(min-width: 1080px)");
  const [tabletSizeMax] = useMediaQuery("(max-width: 1079px)");
  const [phoneSize] = useMediaQuery("(min-width: 770px)");
  const [laptopSize] = useMediaQuery("(min-width: 1250px)");
  const bg = useColorModeValue("#24242e", "#414141");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeIn" }}
    >
      <Flex maxWidth="1500px" direction={!tabletSize && "column"}>
        {tabletSizeMax && (
          <Flex justify={phoneSize ? "space-between" : "center"}>
            <Flex direction="column" justify="space-between">
              <TextAnimation />
              <TechStack />
            </Flex>
            {phoneSize && <GifAnimation />}
          </Flex>
        )}
        <Flex
          w={tabletSize && "55%"}
          direction="column"
          justifyContent="space-between"
        >
          {tabletSize && <TextAnimation />}
          <Box>
            {tabletSize && <TechStack />}
            <Flex
              direction={!phoneSize && "column"}
              m={!phoneSize && "20px"}
              mb={!phoneSize && "5px"}
              align="center"
              p={
                desktopSize
                  ? "85px 0 85px 0"
                  : tabletSize
                  ? "5.5vw 0 5.5vw 0"
                  : phoneSize
                  ? "85px 0 85px 0"
                  : "50px 35px 50px 35px"
              }
              color="white"
              bg={bg}
            >
              {languageToggle === "GB" ? (
                <Text
                  fontSize="xl"
                  ml={laptopSize ? "80px" : phoneSize ? "6vw" : "0"}
                >
                  This portfolio is my first larger project outside of school. I
                  hope you like it. Other projects I have built can be found
                  under projects.
                </Text>
              ) : (
                <Text
                  fontSize="xl"
                  ml={laptopSize ? "80px" : phoneSize ? "6vw" : "0"}
                >
                  Den här portfolion är mitt första större projekt utanför
                  skolan. Jag hoppas du tycker om den. Andra projekt jag har
                  byggt finns under projekt.
                </Text>
              )}
              <Flex ml="30px" mr={desktopSize ? "40px" : "2.5vw"}>
                <Link
                  _hover={{ textDecor: "none" }}
                  mr={7}
                  as={ReachLink}
                  to="/Projects"
                >
                  <Button aria-label="To about me" mt={!phoneSize && "30px"}>
                    {languageToggle === "GB" ? "Projects" : "Projekt"}
                    <ArrowForwardIcon ml="7px" />
                  </Button>
                </Link>
              </Flex>
            </Flex>
            {!tabletSize && (
              <Flex justify="flex-end">
                <Text pos="absolute" m="5px" mr={!phoneSize && "20px"}>
                  {languageToggle === "GB"
                    ? "Last updated: 13-10-2022"
                    : "Senast uppdaterad: 13-10-2022"}
                </Text>
              </Flex>
            )}
          </Box>
        </Flex>
        {tabletSize && <GifAnimation />}
      </Flex>
    </motion.div>
  );
}

export default Home;
