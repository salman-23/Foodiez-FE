import Home from "./components/Home";
import { GlobalStyle } from "./styles";
import { Helmet } from "react-helmet";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "styled-components";
import React, { useState } from "react";

import Routes from "./components/Routes";

// const theme = {
//   light: {
//     mainColor: "#242424", // main font color
//     backgroundColor: "#fefafb", // main background color
//     pink: "#ff85a2",
//     red: "#ff3232",
//   },
//   dark: {
//     mainColor: "#fefafb", // main font color
//     backgroundColor: "#242424", // main background color
//     pink: "#ff85a2",
//     red: "#ff3232",
//   },
// };

//test
function App() {
  // const [currentTheme, setCurrentTheme] = useState("light");

  // const toggleTheme = () =>
  //   setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  return (
    <>
      {/* <ThemeProvider theme={theme[currentTheme]}> */}
      <GlobalStyle />
      {/* <NavBar /> */}
      {/* <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} /> */}
      {/* <Home /> */}
      <Routes />
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
