import { Text, useMediaQuery } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { language } from "../../Recoil/language/atom";

function TextNoAnimation(props) {
  const languageToggle = useRecoilValue(language);
  const [desktopSize] = useMediaQuery("(min-width: 1500px)");
  const [laptopSize] = useMediaQuery("(min-width: 1080px)");
  const [phoneSize] = useMediaQuery("(min-width: 660px)");

  return (
    <>
      {props.placement === "top" ? (
        <Text
          fontSize={
            desktopSize
              ? "6xl"
              : laptopSize
              ? "4vw"
              : phoneSize
              ? "4.5vw"
              : "4xl"
          }
        >
          {languageToggle === "GB" ? "Hello! I Am" : "Hej! Jag Heter"}
          <br />
          Timothy Magee,
        </Text>
      ) : (
        <Text
          fontSize={
            desktopSize
              ? "4xl"
              : laptopSize
              ? "2.4vw"
              : phoneSize
              ? "2.8vw"
              : "2xl"
          }
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
