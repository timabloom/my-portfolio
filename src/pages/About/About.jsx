import {
  Box,
  Button,
  Link,
  Image,
  Heading,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import pdf from "../../documents/Timothy_Magee_CV.pdf";
import timothy from "../../assets/timothy.jpeg";
import { motion } from "framer-motion";
import { DownloadIcon } from "@chakra-ui/icons";
import { useRecoilValue } from "recoil";
import { language } from "../../Recoil/language/atom";

function About() {
  const languageToggle = useRecoilValue(language);
  const color = useColorModeValue("white", "white");
  const bg = useColorModeValue("#24242e", "#414141");
  const colorHeader = useColorModeValue("#373852", "white");

  return (
    <Box ml="80px" maxW="1420px">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeIn" }}
      >
        <Flex>
          <Flex direction="column" flex={1} m="80px 0 30px 0">
            <Box bg={bg} w="300px" p="8px">
              <Image alt="Photo of me" src={timothy} />
            </Box>
            <Heading mt="30px" fontSize="xl">
              {languageToggle === "GB" ? "My Resume" : "Mitt CV"}
            </Heading>
            <Link
              color={color}
              _hover={{ textDecor: "none" }}
              href={pdf}
              download="Timothy_Magee_CV.pdf"
            >
              <Button fontSize="sm" mt="10px">
                <DownloadIcon mr="16px" w="25px" h="25px" />
                PDF <br />
                {languageToggle === "GB" ? "Download" : "Ladda ner"}
              </Button>
            </Link>
          </Flex>
          {languageToggle === "GB" ? (
            <Flex direction="column" maxW="1120px">
              <Heading m="80px 0 30px 50px" color={colorHeader}>
                {languageToggle === "GB" ? "About me" : "Om mig"}
              </Heading>
              <Text fontSize="xl" p="0 50px 20px 50px">
                Hello, My name is Timothy Magee. I am a Frontend Developer from
                Uppsala, Sweden, and I am currently searching for an internship.
                I am fascinated with how much a programmer can do and all the
                intricacies that follow. I like to help others, and for a long
                time, I thought my role would be as a social worker or something
                similar, but I am happier as a programmer. Creating websites to
                obtain information easily is also an excellent way to help
                others. My goal as a programmer is to develop functional
                programs and websites with good user experience in mind.
              </Text>
              <Text fontSize="2xl" color="yellow.500" p="20px 50px 0 50px">
                My Tech Stack
              </Text>
              <Text fontSize="xl" p="20px 50px 0 50px">
                Programing Languages: HTML, CSS, JavaScript, SQL
              </Text>
              <Text fontSize="xl" p="20px 50px 0 50px">
                Version Control Software: Git
              </Text>
              <Text fontSize="xl" p="20px 50px 0 50px">
                JavaScript Runtime Environment: Node.js
              </Text>
              <Text fontSize="xl" p="20px 50px 0 50px">
                Libraries and Frameworks: React, Express.js, Chakra UI, Motion
                Framer, Socket.io
              </Text>
              <Text fontSize="xl" p="20px 50px 0 50px">
                Operating Systems: Linux, Windows, Mac, Android, iOS
              </Text>
              <Text fontSize="xl" p="20px 50px 0 50px">
                Softwares: VS Code, Insomnia, Gimp, Only Office
              </Text>
              <Text fontSize="xl" p="20px 50px 0 50px">
                Cloud Services: GitHub, Netlify, Heroku
              </Text>
            </Flex>
          ) : (
            <Flex direction="column" maxW="1120px">
              <Heading m="80px 0 30px 50px" color={colorHeader}>
                {languageToggle === "GB" ? "About me" : "Om mig"}
              </Heading>
              <Text fontSize="xl" p="0 50px 20px 50px">
                Hej, jag heter Timothy Magee. Jag är en frontend-utvecklare från
                Uppsala, Sverige och jag letar just nu efter en praktikplats.
                Jag är fascinerad av hur mycket en programmerare kan åstadkomma
                och alla förvecklingar som kan uppstå. Jag gillar att hjälpa
                andra och jag trodde länge att min roll skulle vara som socionom
                eller något liknande men jag känner mig mycket gladare nu när
                jag programmerar. Att skapa hemsidor så att informationen är
                lätt att hitta är också ett bra sätt att hjälpa andra. Mitt mål
                som programmerare är att skapa funktionella program och
                webbplatser med god användarupplevelse i åtanke.
              </Text>
              <Text fontSize="2xl" color="yellow.500" p="20px 50px 0 50px">
                Min teknikstack
              </Text>
              <Text fontSize="xl" p="20px 50px 0 50px">
                Programmeringsspråk: HTML, CSS, JavaScript, SQL
              </Text>
              <Text fontSize="xl" p="20px 50px 0 50px">
                Versionshanteringsprogram: Git
              </Text>
              <Text fontSize="xl" p="20px 50px 0 50px">
                JavaScript runtime-miljö: Node.js
              </Text>
              <Text fontSize="xl" p="20px 50px 0 50px">
                Bibliotek och Ramverk: React, Express.js, Chakra UI, Motion
                Framer, Socket.io
              </Text>
              <Text fontSize="xl" p="20px 50px 0 50px">
                Operativsystem: Linux, Windows, Mac, Android, iOS
              </Text>
              <Text fontSize="xl" p="20px 50px 0 50px">
                Mjukvaror: VS Code, Insomnia, Gimp, Only Office
              </Text>
              <Text fontSize="xl" p="20px 50px 0 50px">
                Molntjänster: GitHub, Netlify, Heroku
              </Text>
            </Flex>
          )}
        </Flex>
      </motion.div>
    </Box>
  );
}

export default About;
