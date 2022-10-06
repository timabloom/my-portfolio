import { Heading, Text, Box, Flex, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Projects() {
  return (
    <Flex maxW="1350px" direction="column">
      <Heading alignSelf="flex-start" m="50px 0 0 80px">
        Projects
      </Heading>
      <Box
        p="20px"
        pl="80px"
        m="50px 0 50px 0"
        w="1350px"
        h="300px"
        bg="#414141"
      >
        <Heading>My Portfolio</Heading>
        <Text>I made this portfolio in react with chakra</Text>
        <Text>Technologies Used: React.js, Chakra</Text>
        <Flex align="center">
          <Link
            m="10px"
            href="https://github.com/timabloom/my-portfolio"
            _hover={{ opacity: "70%" }}
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </Link>
          <ExternalLinkIcon m="10px" w={8} h={8} _hover={{ opacity: "70%" }} />
        </Flex>
      </Box>
    </Flex>
  );
}

export default Projects;
