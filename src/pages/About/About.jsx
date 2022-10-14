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
import { useRecoilValue } from "recoil";
import { language } from "../../Recoil/language/atom";

function About() {
  const languageToggle = useRecoilValue(language);

  return (
    <Box ml="80px" maxW="1420px">
      <Heading m="80px 0 30px 0">
        {languageToggle === "GB" ? "About me" : "Om mig"}
      </Heading>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeIn" }}
      >
        <Flex>
          <Flex direction="column" flex={1}>
            <Image w="300px" alt="Photo of me" src={timothy} />
            <Text mt="30px">
              {languageToggle === "GB" ? "My Resume" : "Mitt CV"}
            </Text>
            <Link
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
              <Text fontSize="xl" p="0 50px 20px 50px">
                Hello, My name is Timothy Magee. I am a Frontend Developer from
                Uppsala, Sweden and I am currently in search of an internship. I
                am fascinated with how much a programmer can do and all the
                intricacies that follow. I like to help others and for a long
                time i thought my role would be as a social worker or something
                alike but i am more happy as a programmer. Creating websites so
                that the information is easily obtained is also a good way to
                help others. My goal as a programmer is to create functional
                programs and websites with good user experience in mind.
              </Text>
              <Text fontSize="2xl" p="20px 50px 0 50px">
                My Tech Stack
              </Text>
              <Text fontSize="xl" p="20px 50px 0 50px">
                Programing Languages: HTML, CSS, JavaScript
              </Text>
              <Text fontSize="xl" p="20px 50px 0 50px">
                Libraries and Frameworks: Node.js, React, Express.js, Chakra UI,
                Motion Framer, Socket.io
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
              <Text fontSize="xl" p="20px 50px 0 50px">
                Programmeringsspråk: HTML, CSS, JavaScript
              </Text>
              <Text fontSize="xl" p="20px 50px 0 50px">
                Bibliotek och Ramverk: Node.js, React, Express.js, Chakra UI,
                Motion Framer, Socket.io
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
