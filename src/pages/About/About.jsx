import { Box, Button, Link } from "@chakra-ui/react";
import pdf from "../../documents/Timothy_Magee_CV.pdf";

function About() {
  return (
    <Box>
      <Link href={pdf} download="Timothy_Magee_CV.pdf">
        <Button>Resume</Button>
      </Link>
    </Box>
  );
}

export default About;
