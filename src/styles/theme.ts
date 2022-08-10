import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "20": "#FFFFFF",
      "50": "#F5F8FA",
      "100": "#DADADA",
      "150": "#F5F8FA",
      "200": "#47585B",
    },
    yellow: {
      "400": "#FFBA08",
    },
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
      },
    },
  },
});
