import {
  Box,
  Text,
  HStack,
  Badge,
  useMediaQuery,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { language } from "../../Recoil/language/atom";

function TechStack() {
  const languageToggle = useRecoilValue(language);
  const [desktopSize] = useMediaQuery("(min-width: 1500px)");
  const [laptopSizeFont] = useMediaQuery("(min-width: 1250px)");
  const [laptopSize] = useMediaQuery("(min-width: 1080px)");
  const [phoneSizeMargin] = useMediaQuery("(min-width: 660px)");
  const colorHeader = useColorModeValue("#373852", "white");

  return (
    <Box ml={laptopSizeFont ? "80px" : phoneSizeMargin ? "6vw" : "20px"}>
      <Text
        p="20px 20px 20px 0"
        pb="1"
        mt="60px"
        fontSize={desktopSize ? "4xl" : laptopSize ? "2.4vw" : "2xl"}
        color={colorHeader}
      >
        {languageToggle === "GB"
          ? "Full-Stack Programmer"
          : "Fullstack-utvecklare"}
      </Text>
      <HStack
        gap="5px 10px"
        wrap="wrap"
        p={laptopSize ? "0 16px 25px 0" : "0 16px 25px 0"}
        mr="30px"
        spacing={0}
      >
        <Badge
          fontSize={desktopSize ? "2xl" : laptopSizeFont ? "xl" : "lg"}
          colorScheme="blue"
        >
          .NET
        </Badge>
        <Badge
          fontSize={desktopSize ? "2xl" : laptopSizeFont ? "xl" : "lg"}
          colorScheme="orange"
        >
          C#
        </Badge>
        <Badge
          fontSize={desktopSize ? "2xl" : laptopSizeFont ? "xl" : "lg"}
          colorScheme="green"
        >
          HTML
        </Badge>
        <Badge
          ml="0"
          fontSize={desktopSize ? "2xl" : laptopSizeFont ? "xl" : "lg"}
          colorScheme="red"
        >
          CSS
        </Badge>
        <Badge
          fontSize={desktopSize ? "2xl" : laptopSizeFont ? "xl" : "lg"}
          colorScheme="yellow"
        >
          JavaScript
        </Badge>
        <Badge
          fontSize={desktopSize ? "2xl" : laptopSizeFont ? "xl" : "lg"}
          colorScheme="blue"
        >
          TypeScript
        </Badge>
        <Badge
          fontSize={desktopSize ? "2xl" : laptopSizeFont ? "xl" : "lg"}
          colorScheme="orange"
        >
          Svelte
        </Badge>
        <Badge
          fontSize={desktopSize ? "2xl" : laptopSizeFont ? "xl" : "lg"}
          colorScheme="blue"
        >
          React
        </Badge>
        <Badge
          fontSize={desktopSize ? "2xl" : laptopSizeFont ? "xl" : "lg"}
          colorScheme="orange"
        >
          Node.js
        </Badge>
        <Badge
          fontSize={desktopSize ? "2xl" : laptopSizeFont ? "xl" : "lg"}
          colorScheme="purple"
        >
          Express
        </Badge>
        <Badge
          fontSize={desktopSize ? "2xl" : laptopSizeFont ? "xl" : "lg"}
          colorScheme="pink"
        >
          SQLite
        </Badge>
        <Badge
          fontSize={desktopSize ? "2xl" : laptopSizeFont ? "xl" : "lg"}
          colorScheme="blue"
        >
          Microsoft SQL Server
        </Badge>
        <Badge
          fontSize={desktopSize ? "2xl" : laptopSizeFont ? "xl" : "lg"}
          colorScheme="green"
        >
          PostgreSQL
        </Badge>
      </HStack>
    </Box>
  );
}
export default TechStack;
