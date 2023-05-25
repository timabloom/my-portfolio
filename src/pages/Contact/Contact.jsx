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
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { language } from "../../Recoil/language/atom";
import { useRecoilValue } from "recoil";
import axios from "axios";

function Contact() {
  const languageToggle = useRecoilValue(language);
  const bg = useColorModeValue("#24242e", "#414141");
  const color = useColorModeValue("white", "white");
  const colorHeader = useColorModeValue("#373852", "white");
  const [axiosResponse, setAxiosResponse] = useState("");
  const [responseColor, setResponseColor] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, subject, message } = formData;
    axios
      .post("https://nodemailer-api.onrender.com", { email, subject, message })
      .then((response) => {
        setResponseColor("green.500");
        if (languageToggle === "GB") {
          setAxiosResponse("Message sent successfully");
        } else {
          setAxiosResponse("Meddelande skickad");
        }
        setFormData({
          email: "",
          subject: "",
          message: "",
        });
        console.log(response);
      })
      .catch((error) => {
        setResponseColor("red.500");
        if (languageToggle === "GB") {
          setAxiosResponse("Something went wrong! Try again");
        } else {
          setAxiosResponse("Något gick fel! Försök igen");
        }
        console.error(error);
      });
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <Box align="center">
      <Heading m="80px 0 50px 0" color={colorHeader} align="center">
        {languageToggle === "GB" ? "Contact form" : "Kontaktformulär"}
      </Heading>
      <Box bg={bg} maxW="375px" p="30px" m="35px 20px 20px 20px" color={color}>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>
              {languageToggle === "GB" ? "Email*" : "Epost*"}
            </FormLabel>
            <Input
              isRequired
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              mb="20px"
            />
            <FormLabel>
              {languageToggle === "GB" ? "Subject*" : "Ämne*"}
            </FormLabel>
            <Input
              isRequired
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              mb="20px"
            />
            <FormLabel>
              {languageToggle === "GB" ? "Message*" : "Meddelande*"}
            </FormLabel>
            <Textarea
              isRequired
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              resize="vertical"
              h="180px"
              mb="20px"
            />
            <Button type="submit" w="100%">
              {languageToggle === "GB" ? "Submit" : "Skicka"}
            </Button>
          </FormControl>
        </form>
      </Box>
      <Box>
        <Text color={responseColor} fontSize="2xl" m="30px 0 20px 0">
          {axiosResponse}
        </Text>
      </Box>
    </Box>
  );
}

export default Contact;
