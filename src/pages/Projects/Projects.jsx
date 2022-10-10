import { Heading, Flex } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { language } from "../../Recoil/language/atom";
import Project from "./Project";
import { default as retrieveText } from "../../data/projectInfo";

function Projects() {
  const languageToggle = useRecoilValue(language);
  return (
    <Flex maxW="1420px" ml="80px" direction="column">
      <Heading mt="50px">Projects</Heading>
      <Project duration={1} project={retrieveText(languageToggle, 1)} />
      <Project duration={1.1} project={retrieveText(languageToggle, 2)} />
      <Project duration={1.2} project={retrieveText(languageToggle, 3)} />
      <Project duration={1.3} project={retrieveText(languageToggle, 4)} />
    </Flex>
  );
}

export default Projects;
