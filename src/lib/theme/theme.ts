import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
      //   main: "#1586FD", // Example of a custom color
    },
    secondary: {
      main: green[500],
      //   main: "#666f73",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained", // Default variant for all buttons
      },
      styleOverrides: {
        root: {
          padding: "8px 24px", // Set default padding
        },
      },
    },

    MuiContainer: {
      defaultProps: {
        maxWidth: "lg", // Default maxWidth for all containers
      },
    },
  },
  typography: {
    body1: {
      color: "#041134CC",
    },
  },
});
theme.shadows[1] = "0px 5px 22px lightgray"; // Example of overriding a shadow
