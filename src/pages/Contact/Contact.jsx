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

function Contact() {
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
      <Heading m="50px 0 0 0" align="center">
        Contact
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
          <Box bg="#414141" p="30px" mt="50px">
            <FormControl isDisabled>
              <FormLabel>Email *</FormLabel>
              <Input type="email" mb="20px" />
              <FormLabel>Subject *</FormLabel>
              <Input type="text" mb="20px" />
              <FormLabel>Message *</FormLabel>
              <Textarea type="text" resize="vertical" h="180px" mb="20px" />
              <Button isDisabled type="submit" w="100%">
                Submit
              </Button>
            </FormControl>
          </Box>
        </motion.div>
      </motion.div>
      <Box align="center">
        <Heading color="orange.500" m="30px 0 20px 0">
          API in development!
        </Heading>
        <Text>Contact form currently not working.</Text>
        <Text>
          Contact me through this email:{" "}
          <Link href="mailto:timabloom@proton.me">timabloom@proton.me</Link>
        </Text>
      </Box>
    </Box>
  );
}

export default Contact;
