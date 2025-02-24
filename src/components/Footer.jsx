import {
  Box,
  Link,
  Text,
  Flex,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useRecoilValue } from "recoil";
import { language } from "../Recoil/language/atom";

function Footer() {
  const languageToggle = useRecoilValue(language);
  const color = useColorModeValue("#373852", "white");

  return (
    <Flex p="70px 0 70px 0" direction="column" alignItems="center" m="0 13px 0 13px">
      <Box mb={5} color={color}>
        <Link
          mr={6}
          href="https://www.linkedin.com/in/timothymagee/"
          _hover={{ color: "#0a66c2" }}
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" fixedWidth />
        </Link>
        <Link
          mr={6}
          href="https://github.com/timabloom"
          _hover={{ opacity: "70%" }}
        >
          <FontAwesomeIcon icon={faGithub} size="2x" fixedWidth />
        </Link>
        <Link href="mailto:timabloom@proton.me" _hover={{ color: "#ffd43b" }}>
          <FontAwesomeIcon icon={faEnvelope} size="2x" fixedWidth />
        </Link>
      </Box>
      {languageToggle === "GB" ? (
        <Box align="center">
          <Text>Copyright © 2022 Timothy Magee</Text>
          <Link
            rel="license"
            href="https://creativecommons.org/licenses/by-nd/4.0/"
          >
            <Image
              m="7px"
              alt="Creative Commons Licence"
              src="https://i.creativecommons.org/l/by-nd/4.0/80x15.png"
            />
          </Link>
          <Text>
            This work is licensed under a{" "}
            <Link
              color="cyan.400"
              rel="license"
              href="https://creativecommons.org/licenses/by-nd/4.0/"
            >
              Creative Commons Attribution-NoDerivatives 4.0 International
              License.
            </Link>
          </Text>
          <Text>
            The source code for this website can be found on{" "}
            <Link
              color="cyan.400"
              rel="external"
              href="https://github.com/timabloom/my-portfolio/"
            >
              GitHub.
            </Link>
          </Text>
        </Box>
      ) : (
        <Box align="center">
          <Text>Copyright © 2022 Timothy Magee</Text>
          <Link
            rel="license"
            href="https://creativecommons.org/licenses/by-nd/4.0/deed.sv"
          >
            <Image
              m="7px"
              alt="Creative Commons Licence"
              src="https://i.creativecommons.org/l/by-nd/4.0/80x15.png"
            />
          </Link>
          <Text>
            Detta verk är licensierat under en{" "}
            <Link
              color="cyan.400"
              rel="license"
              href="https://creativecommons.org/licenses/by-nd/4.0/deed.sv"
            >
              Creative Commons Erkännande-IngaBearbetningar 4.0 Internationell
              Licens.
            </Link>
          </Text>
          <Text>
            Källkoden för den här hemsidan finns på{" "}
            <Link
              color="cyan.400"
              rel="external"
              href="https://github.com/timabloom/my-portfolio/"
            >
              GitHub.
            </Link>
          </Text>
        </Box>
      )}
    </Flex>
  );
}

export default Footer;
