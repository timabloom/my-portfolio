import {
  Box,
  Button,
  Link,
  Image,
  Heading,
  Flex,
  Text,
} from "@chakra-ui/react";
import pdf from "../../documents/Timothy_Magee_CV.pdf";
import timothy from "../../assets/timothy.jpeg";
import { motion } from "framer-motion";
import { DownloadIcon } from "@chakra-ui/icons";

function About() {
  return (
    <Box ml="80px" maxW="1420px">
      <Heading m="50px 0 30px 0">About Me</Heading>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeIn" }}
      >
        <Flex>
          <Image w="300px" alt="Photo of me" src={timothy} />
          <Heading></Heading>
          <Text p="50px">
            År 2019 läste jag en kort HTML och CSS-kurs av eget intresse. Efter
            det har jag varit hemsidesansvarig på vägen där jag bor – jag har
            skapat och underhållit en wordpresshemsida för fyra föreningar. I
            förlängningen så resulterade mitt nya intresse i att jag avbröt mina
            socionomstudier och började med frontend-programmering. Sen 2021 har
            jag studerat på Change Maker Education i Stockholm. Jag har främst
            läst HTML, CSS, JavaScript, React och Git. Även lite om servrar och
            databaser, specifikt Node.js och SQL. Jag har länge haft en
            fascination för mjukvaror och har lätt för att fastna i att lösa
            problem och fixa buggar. Jag känner att jag har hamnat rätt i livet.
          </Text>
        </Flex>
        <Text mt="30px">My Resume</Text>
        <Link
          _hover={{ textDecor: "none" }}
          href={pdf}
          download="Timothy_Magee_CV.pdf"
        >
          <Button fontSize="sm" mt="10px">
            <DownloadIcon mr="16px" w="25px" h="25px" />
            PDF <br />
            Download
          </Button>
        </Link>
      </motion.div>
    </Box>
  );
}

export default About;
