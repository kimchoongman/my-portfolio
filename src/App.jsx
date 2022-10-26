import React from "react";
import styled from "styled-components";
import About from "./pages/about/About";
import Info from "./pages/info/Info";
import Intro from "./pages/intro/Intro";
import Nav from "./pages/nav/Nav";
import Projects from "./pages/projects/Projects";
import GlobalStyle from "./style/GlobalStyle";

const App = () => {
  return (
    <StyledMain>
      <GlobalStyle />
      <Nav />
      <Intro />
      <Info />
      <About />
      <Projects />
    </StyledMain>
  );
};

const StyledMain = styled.div`
  width: 100%;
`;

export default App;
