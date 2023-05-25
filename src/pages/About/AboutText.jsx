import { useRecoilValue } from "recoil";
import { language } from "../../Recoil/language/atom";
import {
  useMediaQuery,
  Heading,
  Text,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import Photo from "./Photo";
import DownloadResume from "./DownloadResume";

function AboutText() {
  const languageToggle = useRecoilValue(language);
  const colorHeader = useColorModeValue("#373852", "white");
  const [mobileSize] = useMediaQuery("(min-width: 966px)");

  return (
    <Flex direction="column" maxW="1120px">
      <Heading
        m={mobileSize ? "80px 0 30px 50px" : "80px 0 30px 0"}
        color={colorHeader}
      >
        {languageToggle === "GB" ? "About me" : "Om mig"}
      </Heading>
      {!mobileSize && <Photo />}
      <Text
        fontSize="xl"
        p={mobileSize ? "0 50px 20px 50px" : "30px 0 20px 0"}
      >
        {languageToggle === "GB"
          ? "Hello, My name is Timothy Magee. I am a Frontend Developer from Uppsala, Sweden, and I am currently searching for a job. I am fascinated with how much a programmer can do and all the intricacies that follow. I like to help others, and for a long time, I thought my role would be as a social worker or something similar, but I am happier as a programmer. Creating websites to obtain information easily is also an excellent way to help others. My goal as a programmer is to develop functional programs and websites with good user experience in mind."
          : "Hej, jag heter Timothy Magee. Jag är en frontend-utvecklare från Uppsala, Sverige och jag letar just nu efter ett jobb. Jag är fascinerad av hur mycket en programmerare kan åstadkomma och alla förvecklingar som kan uppstå. Jag gillar att hjälpa andra och jag trodde länge att min roll skulle vara som socionom eller något liknande men jag känner mig mycket gladare nu när jag programmerar. Att skapa hemsidor så att informationen är lätt att hitta är också ett bra sätt att hjälpa andra. Mitt mål som programmerare är att skapa funktionella program och webbplatser med god användarupplevelse i åtanke."}
      </Text>
      <Text
        fontSize="2xl"
        color="yellow.500"
        p={mobileSize ? "20px 50px 0 50px" : "20px 0 0 0"}
      >
        {languageToggle === "GB" ? "My Tech Stack" : "Min teknikstack"}
      </Text>
      <Text fontSize="xl" p={mobileSize ? "20px 50px 0 50px" : "20px 0 0 0"}>
        {languageToggle === "GB"
          ? "Programing Languages: HTML, CSS, JavaScript, SQL"
          : "Programmeringsspråk: HTML, CSS, JavaScript, SQL"}
      </Text>
      <Text fontSize="xl" p={mobileSize ? "20px 50px 0 50px" : "20px 0 0 0"}>
        {languageToggle === "GB"
          ? "Version Control Software: Git"
          : "Versionshanteringsprogram: Git"}
      </Text>
      <Text fontSize="xl" p={mobileSize ? "20px 50px 0 50px" : "20px 0 0 0"}>
        {languageToggle === "GB"
          ? "JavaScript Runtime Environment: Node.js"
          : "JavaScript runtime-miljö: Node.js"}
      </Text>
      <Text fontSize="xl" p={mobileSize ? "20px 50px 0 50px" : "20px 0 0 0"}>
        {languageToggle === "GB"
          ? "Libraries and Frameworks: React, Express.js, Chakra UI, Motion"
          : "Bibliotek och Ramverk: React, Express.js, Chakra UI, Motion Framer, Socket.io"}
        Framer, Socket.io
      </Text>
      <Text fontSize="xl" p={mobileSize ? "20px 50px 0 50px" : "20px 0 0 0"}>
        {languageToggle === "GB"
          ? "Operating Systems: Linux, Windows, Mac, Android, iOS"
          : "Operativsystem: Linux, Windows, Mac, Android, iOS"}
      </Text>
      <Text fontSize="xl" p={mobileSize ? "20px 50px 0 50px" : "20px 0 0 0"}>
        {languageToggle === "GB"
          ? "Softwares: VS Code, Insomnia, Gimp, Only Office"
          : "Mjukvaror: VS Code, Insomnia, Gimp, Only Office"}
      </Text>
      <Text fontSize="xl" p={mobileSize ? "20px 50px 0 50px" : "20px 0 0 0"}>
        {languageToggle === "GB"
          ? "Cloud Services: GitHub, Netlify, Heroku"
          : "Molntjänster: GitHub, Netlify, Heroku"}
      </Text>
      {!mobileSize && <DownloadResume />}
    </Flex>
  );
}

export default AboutText;
