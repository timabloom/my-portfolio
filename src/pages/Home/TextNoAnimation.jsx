import { Text, useMediaQuery } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { language } from "../../Recoil/language/atom";

function TextNoAnimation(props) {
  const languageToggle = useRecoilValue(language);
  const [laptopSize] = useMediaQuery("(min-width: 1250px)");
  const [phoneSize] = useMediaQuery("(min-width: 890px)");

  return (
    <>
      {props.placement === "top" ? (
        <Text fontSize={laptopSize ? "6xl" : phoneSize ? "50px" : "42px"} fontWeight="bold">
          {languageToggle === "GB" ? "Hello! I Am" : "Hej! Jag Heter"}
          <br />
          Timothy Magee,
        </Text>
      ) : (
        <Text
          fontSize={laptopSize ? "4xl" : phoneSize ? "3xl" : "26px"}
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
