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
      color: mode("#1e1e1e", "white")(props),
      bg: mode("white", "#1e1e1e")(props),
    },
  }),
};

const theme = extendTheme({
  colorMode,
  styles,
});

export default theme;
