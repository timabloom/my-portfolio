import { Heading, Text, Flex, Link, Box, Image } from "@chakra-ui/react";
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
      <Flex
        justify="space-between"
        color="white"
        p="30px"
        pl="80px"
        m="30px 0 50px 0"
        bg="#414141"
      >
        <Box flex={1} pr="100px">
          <Heading>{props.project.heading}</Heading>
          <Text>{props.project.text1}</Text>
          <Text>{props.project.text2}</Text>
        </Box>
        <Flex direction="column" align="center" w="260px">
          <Link _hover={{ opacity: "70%" }} target='blank' href={props.project.website}>
            <Image src={props.project.image} alt="Project picture" />
          </Link>
          <Flex>
            <Link
              m="10px"
              href={props.project.githubLink}
              target='_blank'
              _hover={{ opacity: "70%" }}
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </Link>
            <Link href={props.project.website} target='_blank'>
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
