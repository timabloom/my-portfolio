import {
  Heading,
  Flex,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { language } from "../../Recoil/language/atom";
import Project from "./Project";
import { projectsGB, projectsSV } from "../../data/projectInfo";

function Projects() {
  const languageToggle = useRecoilValue(language);
  const colorHeader = useColorModeValue("#373852", "white");
  const [tabletSize] = useMediaQuery("(min-width: 1080px)");
  let duration = 0.9;

  return (
    <Flex
      maxW={tabletSize ? "1420px" : "600px"}
      m={tabletSize ? "0 0 0 80px" : "0 20px 0 20px"}
      direction="column"
    >
      <Heading
        mt="80px"
        ml={tabletSize && "-80px"}
        align="center"
        color={colorHeader}
      >
        {languageToggle === "GB" ? "Projects" : "Projekt"}
      </Heading>
      {languageToggle === "GB" ?
        projectsGB.map((project, index) =>
          <Project key={index} duration={duration} project={project} endOfList={projectsGB.length === index && 0} />
        )
        :
        projectsSV.map((project, index) =>
          <Project key={index} duration={duration = duration + 0.1} project={project} endOfList={projectsGB.length === index && 0} />
        )
      }
    </Flex>
  );
}

export default Projects;
