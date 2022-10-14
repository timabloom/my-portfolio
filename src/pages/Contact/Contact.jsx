import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { language } from "../../Recoil/language/atom";
import { useRecoilValue } from "recoil";

function Contact() {
  const languageToggle = useRecoilValue(language);
  const [formShake, setFormShake] = useState();
  const [clickToggle, setClickToggle] = useState();

  function handleClick() {
    setClickToggle(!clickToggle);
    if (clickToggle) {
      setFormShake({ rotate: [0, -3, 5, -2, 5, 0] });
    } else {
      setFormShake({ rotate: [0, -3, 4, -2, 5, 0] });
    }
  }

  return (
    <Box>
      <Heading m="80px 0 30px 0" align="center">
        {languageToggle === "GB" ? "Contact form" : "Kontaktformulär"}
      </Heading>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeIn",
          type: "spring",
        }}
      >
        <motion.div
          onClick={handleClick}
          animate={formShake}
          transition={{ duration: 0.3 }}
        >
          <Box bg="#414141" p="30px">
            <FormControl isDisabled>
              <FormLabel>
                {languageToggle === "GB" ? "Email*" : "Epost*"}
              </FormLabel>
              <Input type="email" mb="20px" />
              <FormLabel>
                {languageToggle === "GB" ? "Subject*" : "Ämne*"}
              </FormLabel>
              <Input type="text" mb="20px" />
              <FormLabel>
                {languageToggle === "GB" ? "Message*" : "Meddelande*"}
              </FormLabel>
              <Textarea type="text" resize="vertical" h="180px" mb="20px" />
              <Button isDisabled type="submit" w="100%">
                {languageToggle === "GB" ? "Submit*" : "Skicka*"}
              </Button>
            </FormControl>
          </Box>
        </motion.div>
      </motion.div>
      <Box align="center">
        <Heading color="orange.500" m="30px 0 20px 0">
          {languageToggle === "GB"
            ? "API in development!"
            : "API under utveckling!"}
        </Heading>
        <Text>
          {languageToggle === "GB"
            ? "Contact form currently not working."
            : "Kontaktformuläret fungerar inte för tillfället."}
        </Text>
        <Text>
          {languageToggle === "GB"
            ? "Contact me through this email:"
            : "Kontakta mig via den här epostadressen:"}

          <Link href="mailto:timabloom@proton.me">timabloom@proton.me</Link>
        </Text>
      </Box>
    </Box>
  );
}

export default Contact;
