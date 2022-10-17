import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const colorMode = {
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
};

const styles = {
  global: (props) => ({
    body: {
      color: mode("#1e1e1e", "white")(props),
      bg: mode("white", "#1e1e1e")(props),
    },
  }),
};

// 1. define component configuration
const components = {
  Button: {
    baseStyle: ({ colorMode }) => ({
      bg: colorMode === "dark" ? "#505050" : "#373852",
      _hover: {
        bg: colorMode === "dark" ? "#606060" : "#4c4d70",
        _disabled: {bg: colorMode === "dark" ? "#505050" : "#373852"},
      },
    }),
    variants: ({ colorMode }) => ({
      solid: {
        bg: colorMode === "dark" ? "#505050" : "#373852",
        _hover: {
          bg: colorMode === "dark" ? "#606060" : "#4c4d70",
          _disabled: {bg: colorMode === "dark" ? "#505050" : "#373852"},
        },
      },
    }),
    defaultProps: {
      variants: "solid",
      colorScheme: "gray",
    },
  },
};

const theme = extendTheme({
  colorMode,
  styles,
  components,
});

export default theme;
