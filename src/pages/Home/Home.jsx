import {
  Box,
  Flex,
  Text,
  useMediaQuery,
  Stack,
  Badge,
  IconButton,
} from "@chakra-ui/react";
import TextAnimation from "./TextAnimation";
import { useRecoilValue } from "recoil";
import { language } from "../../Recoil/language/atom";
import GifAnimation from "./GifAnimation";
import { ArrowDownIcon } from "@chakra-ui/icons";

function Home() {
  const languageToggle = useRecoilValue(language);
  const [isSmallerThan644] = useMediaQuery("(max-width: 1000px)");
  const [isLargrThan1350] = useMediaQuery("(max-width: 1350px)");

  return (
    <Flex maxWidth="1500px">
      <Flex
        w={!isSmallerThan644 && "55%"}
        direction="column"
        justifyContent="space-between"
      >
        <TextAnimation />
        <Box>
          <Text p="20px" pb="1" ml="60px" fontSize="2xl" colorScheme="green">
            Frontend Programmer:
          </Text>
          <Stack direction="row" p="0 16px 25px 16px" ml="60px">
            Area of Knowledge:
            <Badge ml="1" fontSize="2xl" colorScheme="green">
              HTML
            </Badge>
            <Badge ml="1" fontSize="2xl" colorScheme="red">
              CSS
            </Badge>
            <Badge ml="1" fontSize="2xl" colorScheme="yellow">
              JS
            </Badge>
            <Badge ml="1" fontSize="2xl" colorScheme="blue">
              React
            </Badge>
            <Badge ml="1" fontSize="2xl" colorScheme="orange">
              Node
            </Badge>
            <Badge ml="1" fontSize="2xl" colorScheme="purple">
              SQL
            </Badge>
          </Stack>
          <Flex
            align="center"
            p={isLargrThan1350 ? "6vw 0 6vw 0" : "80px 0 80px 0"}
            color="white"
            bg="#414141"
          >
            {languageToggle === "GB" ? (
              <Text fontSize="xl" ml="80px">
                This portfolio is my first project outside of school. I hope you
                like it. More projects are on their way.
              </Text>
            ) : (
              <Text ml="80px">
                Duis interdum eu ex ac dignissim. Aenean pretium tristique
                egestas.
              </Text>
            )}
            <Flex flexDirection="column" ml="30px" mr="50px">
              <Text align="center" w="80px">
                About Me
              </Text>
              <IconButton
                fontSize="2xl"
                aria-label="To about me"
                icon={<ArrowDownIcon />}
              />
            </Flex>
          </Flex>
        </Box>
      </Flex>
      {!isSmallerThan644 && <GifAnimation />}
    </Flex>
  );
}

export default Home;
