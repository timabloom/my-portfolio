import {
  Box,
  Text,
  Stack,
  Badge,
  useMediaQuery,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { language } from "../../Recoil/language/atom";

function TechStack() {
  const languageToggle = useRecoilValue(language);
  const [desktopSize] = useMediaQuery("(min-width: 1500px)");
  const [laptopSize] = useMediaQuery("(min-width: 1080px)");
  const colorHeader = useColorModeValue("#373852", "white");

  return (
    <Box>
      <Text
        p="20px 20px 20px 0"
        pb="1"
        mt="60px"
        ml={laptopSize ? "80px" : "6vw"}
        fontSize={desktopSize ? "4xl" : laptopSize ? "2.4vw" : "2xl"}
        color={colorHeader}
      >
        {languageToggle === "GB"
          ? "Frontend Programmer"
          : "Frontend-programmerare"}
      </Text>
      <Stack direction="row" p="0 16px 25px 16px" ml="60px">
        <Badge
          ml="1"
          fontSize={desktopSize ? "2xl" : "1.6vw"}
          colorScheme="green"
        >
          HTML
        </Badge>
        <Badge
          ml="1"
          fontSize={desktopSize ? "2xl" : "1.6vw"}
          colorScheme="red"
        >
          CSS
        </Badge>
        <Badge
          ml="1"
          fontSize={desktopSize ? "2xl" : "1.6vw"}
          colorScheme="yellow"
        >
          JS
        </Badge>
        <Badge
          ml="1"
          fontSize={desktopSize ? "2xl" : "1.6vw"}
          colorScheme="blue"
        >
          React
        </Badge>
        <Badge
          ml="1"
          fontSize={desktopSize ? "2xl" : "1.6vw"}
          colorScheme="orange"
        >
          Node
        </Badge>
        <Badge
          ml="1"
          fontSize={desktopSize ? "2xl" : "1.6vw"}
          colorScheme="purple"
        >
          Express
        </Badge>
        <Badge
          ml="1"
          fontSize={desktopSize ? "2xl" : "1.6vw"}
          colorScheme="pink"
        >
          SQL
        </Badge>
      </Stack>
    </Box>
  );
}
export default TechStack;
