import {
  Heading,
  Flex,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { language } from "../../Recoil/language/atom";
import Project from "./Project";
import { default as retrieveText } from "../../data/projectInfo";

function Projects() {
  const languageToggle = useRecoilValue(language);
  const colorHeader = useColorModeValue("#373852", "white");
  const [tabletSize] = useMediaQuery("(min-width: 1080px)");

  return (
    <Flex
      maxW={tabletSize ? "1420px" : "600px"}
      m={tabletSize ? "0 0 0 80px" : "0 20px 0 20px"}
      direction="column"
    >
      <Heading mt="80px" ml={tabletSize && "-80px"} align="center" color={colorHeader}>
        {languageToggle === "GB" ? "Projects" : "Projekt"}
      </Heading>
      <Project duration={1} project={retrieveText(languageToggle, 1)} />
      <Project duration={1.1} project={retrieveText(languageToggle, 2)} />
      <Project duration={1.2} project={retrieveText(languageToggle, 3)} />
      <Project
        duration={1.3}
        project={retrieveText(languageToggle, 4)}
        endOfList={0}
      />
    </Flex>
  );
}

export default Projects;
