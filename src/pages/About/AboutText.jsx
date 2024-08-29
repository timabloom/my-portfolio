import { useRecoilValue } from "recoil";
import { language } from "../../Recoil/language/atom";
import {
  useMediaQuery,
  Heading,
  Text,
  Flex,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import Photo from "./Photo";

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
      {languageToggle === "GB" ? (
        <Box maxW="1000px">
          <Text
            fontSize="xl"
            p={mobileSize ? "0 50px 20px 50px" : "30px 0 20px 0"}
          >
            Hello there! My name is Timothy Magee, a passionate frontend
            developer based in the beautiful Uppsala, Sweden. With a strong
            drive for constant learning and growth, I am currently exploring new
            opportunities to grow and make meaningful contributions within the
            tech industry
          </Text>
          <Text
            fontSize="xl"
            p={mobileSize ? "0 50px 20px 50px" : "0px 0 20px 0"}
          >
            My journey into development didn't start in the most conventional
            way. I've always had a strong desire to help others, which initially
            led me to consider a career in social work. However, life had
            different plans, and I discovered my true passion lies in
            programming.
          </Text>
          <Text
            fontSize="xl"
            p={mobileSize ? "0 50px 20px 50px" : "0px 0 20px 0"}
          >
            Now when I have found out that my creativity truly flourishes within
            programming. With the technical skills I've acquired, I feel that I
            have the tools to bring my visions to life and create solutions that
            make a difference. The freedom and satisfaction I feel when
            programming are unparalleled.
          </Text>
          <Text
            fontSize="xl"
            p={mobileSize ? "0 50px 20px 50px" : "0px 0 20px 0"}
          >
            I am excited about taking my skills to the next level and helping
            your team create innovative and meaningful solutions. Let's create
            something amazing together!"
          </Text>
        </Box>
      ) : (
        <Box maxW="1000px">
          <Text
            fontSize="xl"
            p={mobileSize ? "0 50px 20px 50px" : "30px 0 20px 0"}
          >
            Hej där! Mitt namn är Timothy Magee, en passionerad
            frontend-utvecklare baserad i vackra Uppsala, Sverige. Med en stark
            drivkraft för att ständigt lära och utvecklas, jag är för närvarande
            på jakt efter nya möjligheter att växa och göra betydelsefulla
            bidrag inom teknikvärlden.
          </Text>
          <Text
            fontSize="xl"
            p={mobileSize ? "0 50px 20px 50px" : "0px 0 20px 0"}
          >
            Min resa inom utveckling började inte på det mest konventionella
            sättet. Jag har alltid haft en stark vilja att hjälpa andra, vilket
            ledde mig till att ursprungligen överväga en karriär som socionom.
            Men livet hade andra planer, och jag upptäckte min sanna passion för
            programmering.
          </Text>
          <Text
            fontSize="xl"
            p={mobileSize ? "0 50px 20px 50px" : "0px 0 20px 0"}
          >
            Nu när jag upptäckt att min kreativitet verkligen blomstrar inom
            programmering. Med de tekniska färdigheter jag har förvärvat, känner
            jag att jag har verktygen för att förverkliga mina visioner och
            skapa lösningar som gör skillnad. Den frihet och tillfredsställelse
            jag känner när jag programmerar är oöverträffad.
          </Text>
          <Text
            fontSize="xl"
            p={mobileSize ? "0 50px 20px 50px" : "0px 0 20px 0"}
          >
            Jag ser fram emot att ta mina färdigheter till nästa nivå och att
            hjälpa ditt team med att skapa innovativa och meningsfulla
            lösningar. Låt oss skapa något fantastiskt tillsammans!
          </Text>
        </Box>
      )}
      <Text
        fontSize="2xl"
        color="yellow.500"
        p={mobileSize ? "20px 50px 0 50px" : "20px 0 0 0"}
      >
        {languageToggle === "GB" ? "My Tech Stack" : "Min teknikstack"}
      </Text>
      <Text fontSize="xl" p={mobileSize ? "20px 50px 0 50px" : "20px 0 0 0"}>
        {languageToggle === "GB"
          ? "Programing Languages: C#, HTML, CSS, JavaScript, TypeScript, SQL"
          : "Programmeringsspråk: C#, HTML, CSS, JavaScript, TypeScript, SQL"}
      </Text>
      <Text fontSize="xl" p={mobileSize ? "20px 50px 0 50px" : "20px 0 0 0"}>
        {languageToggle === "GB"
          ? "Version Control Software: Git"
          : "Versionshanteringsprogram: Git"}
      </Text>
      <Text fontSize="xl" p={mobileSize ? "20px 50px 0 50px" : "20px 0 0 0"}>
        {languageToggle === "GB"
          ? "Software Development Framework: .NET"
          : "Programmeringsramverk: .NET"}
      </Text>
      <Text fontSize="xl" p={mobileSize ? "20px 50px 0 50px" : "20px 0 0 0"}>
        {languageToggle === "GB"
          ? "JavaScript Runtime Environment: Node.js"
          : "JavaScript runtime-miljö: Node.js"}
      </Text>
      <Text fontSize="xl" p={mobileSize ? "20px 50px 0 50px" : "20px 0 0 0"}>
        {languageToggle === "GB"
          ? "Libraries and Frameworks: Svelte, React, Express.js"
          : "Bibliotek och Ramverk: Svelte, React, Express.js"}
      </Text>
      <Text fontSize="xl" p={mobileSize ? "20px 50px 0 50px" : "20px 0 0 0"}>
        {languageToggle === "GB"
          ? "Operating Systems: Linux, Windows, Mac, Android, iOS"
          : "Operativsystem: Linux, Windows, Mac, Android, iOS"}
      </Text>
      <Text fontSize="xl" p={mobileSize ? "20px 50px 0 50px" : "20px 0 0 0"}>
        {languageToggle === "GB"
          ? "Softwares: VS Code, Gimp, Only Office"
          : "Mjukvaror: VS Code, Gimp, Only Office"}
      </Text>
      <Text fontSize="xl" p={mobileSize ? "20px 50px 0 50px" : "20px 0 0 0"}>
        {languageToggle === "GB"
          ? "Databases: Microsoft SQL Server, PostgreSQL, SQLite"
          : "Databaser: Microsoft SQL Server, PostgreSQL, SQLite"}
      </Text>
      <Text fontSize="xl" p={mobileSize ? "20px 50px 0 50px" : "20px 0 0 0"}>
        {languageToggle === "GB"
          ? "Cloud Services: GitHub, Netlify, Heroku, Render"
          : "Molntjänster: GitHub, Netlify, Heroku, Render"}
      </Text>
    </Flex>
  );
}

export default AboutText;
