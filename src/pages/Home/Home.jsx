import {
  Box,
  Flex,
  Text,
  useMediaQuery,
  Stack,
  Badge,
  Button,
  Link,
} from "@chakra-ui/react";
import TextAnimation from "./TextAnimation";
import { useRecoilValue } from "recoil";
import { language } from "../../Recoil/language/atom";
import GifAnimation from "./GifAnimation";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { Link as ReachLink } from "react-router-dom";

function Home() {
  const languageToggle = useRecoilValue(language);
  const [isSmallerThan644] = useMediaQuery("(max-width: 1000px)");
  const [isLargrThan1350] = useMediaQuery("(max-width: 1350px)");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeIn" }}
    >
      <Flex maxWidth="1500px">
        <Flex
          w={!isSmallerThan644 && "55%"}
          direction="column"
          justifyContent="space-between"
        >
          <TextAnimation />
          <Box>
            <Text p="20px" pb="1" ml="60px" fontSize="2xl" colorScheme="green">
              {languageToggle === "GB"
                ? "Frontend Programmer"
                : "Frontend-programmerare"}
            </Text>
            <Stack direction="row" p="0 16px 25px 16px" ml="60px">
              <Badge ml="1" fontSize="2xl" colorScheme="green">
                HTML
              </Badge>
              <Badge ml="1" fontSize="2xl" colorScheme="red">
                CSS
              </Badge>
              <Badge ml="1" fontSize="2xl" colorScheme="yellow">
                JS
              </Badge>
              <Badge ml="1" fontSize="2xl" colorScheme="blue">
                React
              </Badge>
              <Badge ml="1" fontSize="2xl" colorScheme="orange">
                Node
              </Badge>
              <Badge ml="1" fontSize="2xl" colorScheme="purple">
                Express
              </Badge>
            </Stack>
            <Flex
              align="center"
              p={isLargrThan1350 ? "6vw 0 6vw 0" : "80px 0 80px 0"}
              color="white"
              bg="#414141"
            >
              {languageToggle === "GB" ? (
                <Text fontSize="xl" ml="80px">
                  This portfolio is my first project outside of school.
                  <br />I hope you like it. Other projects i have built can be
                  found under projects.
                </Text>
              ) : (
                <Text fontSize="xl" ml="80px">
                  Den här portfolion är mitt första projekt utanför skolan.
                  <br />
                  Jag hoppas du tycker om den. Andra projekt jag har byggt finns
                  under projekt.
                </Text>
              )}
              <Flex flexDirection="column" ml="30px" mr="50px">
                <Link
                  _hover={{ textDecor: "none" }}
                  mr={7}
                  as={ReachLink}
                  to="/Projects"
                >
                  <Button aria-label="To about me">
                    {languageToggle === "GB" ? "Projects" : "Projekt"}
                    <ArrowForwardIcon ml="7px" />
                  </Button>
                </Link>
              </Flex>
            </Flex>
          </Box>
        </Flex>
        {!isSmallerThan644 && <GifAnimation />}
      </Flex>
    </motion.div>
  );
}

export default Home;
