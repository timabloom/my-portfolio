import { Text, useMediaQuery } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { language } from "../../Recoil/language/atom";

function TextNoAnimation(props) {
  const languageToggle = useRecoilValue(language);
  const [desktopSize] = useMediaQuery("(min-width: 1180px)");

  return (
    <>
      {props.placement === "top" ? (
        <Text fontSize={desktopSize ? "5xl" : "4vw"}>
          {languageToggle === "GB" ? "Hello! I Am" : "Hej! Jag Heter"}
          <br />
          Timothy Magee,
        </Text>
      ) : (
        <Text
          fontSize={desktopSize ? "3xl" : "2.5vw"}
          fontWeight="medium"
          mt="24px"
        >
          {languageToggle === "GB"
            ? "and Welcome to My Portfolio."
            : "och Välkommen till Min Portfolio."}
        </Text>
      )}
    </>
  );
}

export default TextNoAnimation;
