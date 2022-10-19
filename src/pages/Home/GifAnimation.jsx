import { Box, Image, Text, Flex, useMediaQuery } from "@chakra-ui/react";
import typingGif from "../../assets/typing.gif";
import wavingGif from "../../assets/waving.gif";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { homeAnimation } from "../../Recoil/homeAnimation/atom";
import { language } from "../../Recoil/language/atom";

function GifAnimation() {
  const [gifAnimation, setMeAnimation] = useState();
  const animationDone = useRecoilValue(homeAnimation);
  const languageToggle = useRecoilValue(language);
  const [laptopSize] = useMediaQuery("(min-width: 1080px)");

  useEffect(() => {
    let count1 = "";
    let count2 = "";
    if (languageToggle === "GB") {
      count1 = "12000";
      count2 = "17400";
    } else {
      count1 = "13500";
      count2 = "19100";
    }
    if (animationDone === false) {
      setMeAnimation(typingGif);
      const timer1 = setTimeout(() => {
        setMeAnimation(wavingGif);
      }, count1);
      const timer2 = setTimeout(() => {
        setMeAnimation(typingGif);
      }, count2);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    } else {
      setMeAnimation(typingGif);
    }
  }, [languageToggle]);

  return (
    <Box w="45%">
      <Image
        alt="Animation of me typing on a keyboard"
        src={gifAnimation}
      ></Image>
      <Flex justifyContent="flex-end">
        {laptopSize && (
          <Text pos="absolute" m="5px">
            {languageToggle === "GB"
              ? "Last updated: 19-10-2022"
              : "Senast uppdaterad: 19-10-2022"}
          </Text>
        )}
      </Flex>
    </Box>
  );
}

export default GifAnimation;
