import {
  Heading,
  Text,
  Flex,
  Link,
  Box,
  Image,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { useRecoilValue } from "recoil";
import { language } from "../../Recoil/language/atom";
import { Blurhash } from "react-blurhash";
import { useState } from "react";

function Project(props) {
  const languageToggle = useRecoilValue(language);
  const bg = useColorModeValue("#24242e", "#414141");
  const [tabletSize] = useMediaQuery("(min-width: 1080px)");
  const [mobileSize] = useMediaQuery("(min-width: 460px)");
  const [loaded, setLoaded] = useState(false);

  function handleLoad() {
    setLoaded(true);
  }

  return (
    <motion.div
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 1, opacity: 1 }}
      transition={{ duration: props.duration, ease: "easeIn", type: "spring" }}
    >
      <Flex
        direction={tabletSize ? "rows" : "column"}
        justify="space-between"
        color="white"
        p="30px"
        pl={tabletSize ? "80px" : "30px"}
        m="50px 0 0 0"
        mb={props.endOfList}
        bg={bg}
      >
        <Box flex={1} pr={tabletSize ? "50px" : "0"}>
          <Heading>{props.project.heading}</Heading>
          <Text fontSize="lg" mt="10px">
            {props.project.text1}
          </Text>
          <Box mt="8px" fontSize="lg">
            <Text color="yellow.500" display="inline">
              {languageToggle === "GB"
                ? "Technologies Used: "
                : "Använda tekniker: "}
            </Text>
            {props.project.text2}
          </Box>
        </Box>
        <Flex
          direction="column"
          alignSelf="center"
          align="center"
          maxW={tabletSize ? "360px" : "500px"}
          mt={tabletSize ? "0" : "30px"}
        >
          <Link
            _hover={{ opacity: "70%" }}
            target="blank"
            href={props.project.website}
          >
            <Flex>
              <Image
                src={props.project.image}
                width={mobileSize ? 360 : 275}
                height={mobileSize ? 280 : 214}
                loading="lazy"
                alt="Project picture"
                onLoad={handleLoad}
              />
              <Box position="absolute">
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: !loaded ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: "easeIn" }}
                >
                  <Blurhash
                    hash={props.project.hash}
                    width={mobileSize ? 360 : 275}
                    height={mobileSize ? 280 : 214}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                  />
                </motion.div>
              </Box>
            </Flex>
          </Link>
          <Flex>
            <Link
              m="10px"
              mb="0"
              href={props.project.githubLink}
              target="_blank"
              _hover={{ opacity: "70%" }}
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </Link>
            <Link href={props.project.website} target="_blank">
              <ExternalLinkIcon
                m="10px"
                mb="0"
                w={8}
                h={8}
                _hover={{ opacity: "70%" }}
              />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </motion.div>
  );
}

export default Project;
