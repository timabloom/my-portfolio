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

function Project({ duration, project, endOfList }) {
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
      transition={{ duration: duration, ease: "easeIn", type: "spring" }}
    >
      <Flex
        direction={tabletSize ? "rows" : "column"}
        justify="space-between"
        color="white"
        p="40px"
        pl={tabletSize ? "80px" : "30px"}
        m="50px 0 0 0"
        mb={endOfList}
        bg={bg}
      >
        <Box flex={1} pr={tabletSize ? "50px" : "0"}>
          <Flex>
            <Heading>{project.heading}</Heading>
            {project.subHeading && (
              <Text alignSelf="center" ml="15px" mt="5px" color="tomato">
                {project.subHeading}
              </Text>
            )}
          </Flex>
          <Text fontSize="lg" mt="20px">
            {project.text1}
          </Text>
          {project.text2 && (
            <Text fontSize="lg" mt="10px">
              {project.text2}
            </Text>
          )}
          <Box mt="20px" fontSize="lg">
            <Text color="yellow.500" display="inline">
              {languageToggle === "GB"
                ? "Technologies Used: "
                : "Använda tekniker: "}
            </Text>
            {project.technologies}
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
            href={project.website}
          >
            <Flex>
              <Image
                src={project.image}
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
                    hash={project.hash}
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
              href={project.githubLink}
              target="_blank"
              _hover={{ opacity: "70%" }}
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </Link>
            <Link href={project.website} target="_blank">
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
