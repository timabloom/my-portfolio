import { motion } from "framer-motion";
import { useMediaQuery } from "@chakra-ui/react";

function MarkerTop(props) {
  const [laptopSize] = useMediaQuery("(max-width: 1250px)");
  const [phoneSize] = useMediaQuery("(min-width: 890px)");

  return (
    <motion.span
      animate={{ opacity: props.opacity }}
      transition={{ repeat: props.repeat, repeatDelay: props.repeatDelay }}
      style={{
        display: "inline",
        fontSize: !laptopSize ? "60px" : phoneSize ? "50px" : "42px",
        borderLeft: "3px solid",
      }}
    ></motion.span>
  );
}

export default MarkerTop;
