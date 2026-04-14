import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  components: {
    Popover: {
      baseStyle: (props: any) => ({
        content: {
          bg: mode("white", "gray.800")(props),
        },
        header: {
          bg: mode("white", "gray.800")(props),
        },
        body: {
          bg: mode("white", "gray.800")(props),
        },
      }),
    },

    Modal: {
      baseStyle: (props: any) => ({
        dialog: {
          bg: mode("white", "gray.800")(props),
        },
        header: {
          bg: "transparent",
        },
        body: {
          bg: "transparent",
        },
      }),
    },
    Card: {
      baseStyle: (props: any) => ({
        container: {
          bg: mode("white", "gray.800")(props),
        },
        header: {
          bg: "transparent",
        },
        body: {
          bg: "transparent",
        },
        footer: {
          bg: "transparent",
        },
      }),
    },
  },
});
export default theme;
