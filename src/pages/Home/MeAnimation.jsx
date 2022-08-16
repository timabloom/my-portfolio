import { Box, Image } from "@chakra-ui/react";
import typingGif from "../../assets/typing.gif";
import wavingGif from "../../assets/waving.gif";
import typingStill from "../../assets/typing-still.png";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { homeAnimation } from "../../Recoil/homeAnimation/atom";

function MeAnimation() {
  const [meAnimation, setMeAnimation] = useState();
  const animationDone = useRecoilValue(homeAnimation);

  useEffect(() => {
    if (animationDone === false) {
      setMeAnimation(typingStill);
      setTimeout(() => {
        setMeAnimation(typingGif);
      }, "2000");
      setTimeout(() => {
        setMeAnimation(wavingGif);
      }, "18400");
      setTimeout(() => {
        setMeAnimation(typingGif);
      }, "24400");
    } else {
      setMeAnimation(typingGif);
    }
  }, []);

  return (
    <Box w="45%">
      <Image
        alt="Animation of me typing on a keyboard"
        src={meAnimation}
        borderTop="solid 1px"
      ></Image>
    </Box>
  );
}

export default MeAnimation;
