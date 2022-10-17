import {
  Heading,
  Text,
  Flex,
  Link,
  Box,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { useRecoilValue } from "recoil";
import { language } from "../../Recoil/language/atom";

function Project(props) {
  const languageToggle = useRecoilValue(language);
  const bg = useColorModeValue("#24242e", "#414141");

  return (
    <motion.div
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 1, opacity: 1 }}
      transition={{ duration: props.duration, ease: "easeIn", type: "spring" }}
    >
      <Flex
        justify="space-between"
        color="white"
        p="30px"
        pl="80px"
        m="50px 0 0 0"
        mb={props.endOfList}
        bg={bg}
      >
        <Box flex={1} pr="100px">
          <Heading>{props.project.heading}</Heading>
          <Text mt="10px">{props.project.text1}</Text>
          <Box mt="8px">
            <Text color="yellow.500" display="inline">
              {languageToggle === "GB"
                ? "Technologies Used: "
                : "Använda tekniker: "}
            </Text>
            {props.project.text2}
          </Box>
        </Box>
        <Flex direction="column" align="center" w="260px">
          <Link
            _hover={{ opacity: "70%" }}
            target="blank"
            href={props.project.website}
          >
            <Image src={props.project.image} alt="Project picture" />
          </Link>
          <Flex>
            <Link
              m="10px"
              href={props.project.githubLink}
              target="_blank"
              _hover={{ opacity: "70%" }}
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </Link>
            <Link href={props.project.website} target="_blank">
              <ExternalLinkIcon
                m="10px"
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
