import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

import Routes from "./routes";
import Footer from "./views/pages/Footer";
import APIstate from "./context/APIstate";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <APIstate>
          <Routes />
        </APIstate>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
