import { Box, Image } from "@chakra-ui/react";
import typingGif from "../../assets/typing.gif";
import wavingGif from "../../assets/waving.gif";
import typingStill from "../../assets/typing-still.png";
import wavingStill from "../../assets/waving-still.png";
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
    } else {
      setMeAnimation(wavingStill);
    }
  }, []);

  return (
    <Box w="45%">
      <Image
        alt="Animation of me yyping on a keyboard"
        src={meAnimation}
        borderTop="solid 1px"
      ></Image>
    </Box>
  );
}

export default MeAnimation;
