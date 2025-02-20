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
import AboutParagraph from "./AboutParagraph";

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
          <AboutParagraph
            paragraph="Hello there! My name is Timothy Magee, a passionate Full Stack
            Developer based in the beautiful Uppsala, Sweden. With a strong
            drive for constant learning and growth, I am currently exploring new
            opportunities to grow and make meaningful contributions within the
            tech industry."
          />
          <AboutParagraph
            paragraph="My journey into development didn't start in the most conventional
            way. I've always had a strong desire to help others, which initially
            led me to consider a career in social work. However, life had
            different plans, and I discovered my true passion lies in
            programming."
          />
          <AboutParagraph
            paragraph="Now when I have found out that my creativity truly flourishes within
            programming. With the technical skills I've acquired, I feel that I
            have the tools to bring my visions to life and create solutions that
            make a difference. The freedom and satisfaction I feel when
            programming are unparalleled."
          />
          <AboutParagraph
            paragraph="I am excited about taking my skills to the next level and helping
            your team create innovative and meaningful solutions. Let's create
            something amazing together!"
          />
        </Box>
      ) : (
        <Box maxW="1000px">
          <AboutParagraph
            paragraph="Hej där! Mitt namn är Timothy Magee, en passionerad
            fullstack-utvecklare i vackra Uppsala. Med en stark
            drivkraft för att ständigt lära och utvecklas, så är jag för närvarande
            på jakt efter nya möjligheter att växa och göra betydelsefulla
            bidrag inom teknikvärlden."
          />
          <AboutParagraph
            paragraph="Min resa inom programmering har varit allt annat än traditionell. Med en stark vilja att hjälpa andra övervägde jag först en karriär som socionom. Men livet tog en oväntad vändning, och det var då jag upptäckte min sanna passion för programmering."
          />
          <AboutParagraph
            paragraph="Nu när jag upptäckt att min kreativitet verkligen blomstrar inom
            programmering och med de tekniska färdigheter jag har förvärvat, känner
            jag att jag har verktygen för att förverkliga mina visioner och
            skapa lösningar som gör skillnad. Den frihet och tillfredsställelse
            jag känner när jag programmerar är oöverträffad."
          />
          <AboutParagraph
            paragraph="Jag ser fram emot att ta mina färdigheter till nästa nivå och att
            hjälpa ditt team med att skapa innovativa och meningsfulla
            lösningar. Låt oss skapa något fantastiskt tillsammans!"
          />
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
