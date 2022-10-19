import { motion } from "framer-motion";
import { useMediaQuery } from "@chakra-ui/react";

function TextBottom(props) {
  const [laptopSize] = useMediaQuery("(max-width: 1250px)");
  const [phoneSize] = useMediaQuery("(min-width: 890px)");

  const item = {
    hidden: { display: "none" },
    visible: {
      display: "inline",
    },
  };

  return (
    <motion.span
      key={props.index}
      variants={item}
      style={{
        fontSize: !laptopSize ? "36px" : phoneSize ? "30px" : "26px",
        fontWeight: "medium",
        opacity: props.opacity,
      }}
    >
      {props.letters}
    </motion.span>
  );
}

export default TextBottom;
