import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
    fontSize: 16,
    h1: {
      fontSize: "2rem",
      fontWeight: "bold",
    },
    h4: {
      fontFamily: "Mulish, sans-serif",
      fontWeight: "bold",
      color: "#181818",
      marginBottom: 5,
      fontSize: "30px"
    },
    subtitle1: {
      fontSize: "14px"
    },
    subtitle2: {
      fontSize: "13px",
      fontWeight: "normal",
      lineHeight: 1.2,
      color: "#393939",
    },
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
