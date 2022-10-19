import { motion } from "framer-motion";
import { useMediaQuery } from "@chakra-ui/react";

function MarkerBottom(props) {
  const [laptopSize] = useMediaQuery("(max-width: 1250px)");
  const [phoneSize] = useMediaQuery("(min-width: 890px)");

  return (
    <motion.span
      animate={{ opacity: props.opacity }}
      transition={{ repeat: props.repeat, repeatDelay: props.repeatDelay }}
      style={{
        display: "inline",
        fontSize: !laptopSize ? "36px" : phoneSize ? "30px" : "26px",
        borderLeft: "2px solid",
      }}
    ></motion.span>
  );
}

export default MarkerBottom;
