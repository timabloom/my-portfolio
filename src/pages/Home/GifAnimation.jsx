import { Box, Image } from "@chakra-ui/react";
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

  useEffect(() => {
    let count1 = "";
    let count2 = "";
    if (languageToggle === "GB") {
      count1 = "18400";
      count2 = "24000";
    } else {
      count1 = "20500";
      count2 = "26100";
    }
    if (animationDone === false) {
      setMeAnimation(typingGif);
      const firstTimer = setTimeout(() => {
        setMeAnimation(wavingGif);
      }, count1);
      const secondTimer = setTimeout(() => {
        setMeAnimation(typingGif);
      }, count2);
      return () => {
        clearTimeout(firstTimer);
        clearTimeout(secondTimer);
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
        borderTop="solid 1px"
      ></Image>
    </Box>
  );
}

export default GifAnimation;
