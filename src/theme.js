import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const colorMode = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
});

const styles = {
  global: (props) => ({
    body: {
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("white", "#282923")(props),
    },
  }),
};

const theme = extendTheme({
  colorMode,
  styles,
});

export default theme;
