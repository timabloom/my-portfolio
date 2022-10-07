import { Heading, Text, Box, Flex, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

function Project(props) {
  return (
    <motion.div
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 1, opacity: 1 }}
      transition={{ duration: props.duration, ease: "easeIn", type: "spring" }}
    >
      <Box
        color="white"
        p="20px"
        pl="80px"
        m="50px 0 50px 0"
        h="300px"
        bg="#414141"
        w="1420px"
      >
        <Heading>{props.project.heading}</Heading>
        <Text>{props.project.text1}</Text>
        <Text>{props.project.text2}</Text>
        <Flex align="center">
          <Link
            m="10px"
            href={props.project.githubLink}
            _hover={{ opacity: "70%" }}
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </Link>
          <ExternalLinkIcon m="10px" w={8} h={8} _hover={{ opacity: "70%" }} />
        </Flex>
      </Box>
    </motion.div>
  );
}

export default Project;
