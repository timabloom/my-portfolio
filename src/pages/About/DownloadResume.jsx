import {
  Button,
  Link,
  useColorModeValue,
  Heading,
  useMediaQuery,
} from "@chakra-ui/react";
import pdfSE from "../../documents/Timothy_Magee_CV_SE.pdf";
import pdfEN from "../../documents/Timothy_Magee_CV_EN.pdf";
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
        textAlign={!mobileSize ? "center" : ""}
        color={color}
        _hover={{ textDecor: "none" }}
        href={languageToggle === "GB" ? pdfEN : pdfSE}
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
