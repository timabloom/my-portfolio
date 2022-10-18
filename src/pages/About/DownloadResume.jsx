import {
  Button,
  Link,
  useColorModeValue,
  Heading,
  useMediaQuery,
} from "@chakra-ui/react";
import pdf from "../../documents/Timothy_Magee_CV.pdf";
import { DownloadIcon } from "@chakra-ui/icons";
import { useRecoilValue } from "recoil";
import { language } from "../../Recoil/language/atom";

function DownloadResume() {
  const color = useColorModeValue("white", "white");
  const languageToggle = useRecoilValue(language);

  const [mobileSize] = useMediaQuery("(min-width: 966px)");

  return (
    <>
      <Heading
        mt={mobileSize ? "30px" : "40px"}
        align={!mobileSize ? "center" : ""}
        fontSize="xl"
      >
        {languageToggle === "GB" ? "My Resume" : "Mitt CV"}
      </Heading>
      <Link
        align={!mobileSize ? "center" : ""}
        color={color}
        _hover={{ textDecor: "none" }}
        href={pdf}
        download="Timothy_Magee_CV.pdf"
      >
        <Button fontSize="sm" mt="10px">
          <DownloadIcon mr="16px" w="25px" h="25px" />
          PDF <br />
          {languageToggle === "GB" ? "Download" : "Ladda ner"}
        </Button>
      </Link>
    </>
  );
}

export default DownloadResume;
