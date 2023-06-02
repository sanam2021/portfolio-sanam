import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";

import Introduction from "./components/Introduction";
import About from "./components/About";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Experiences from "./components/Experiences";
import Hero from "./components/Hero";
import styled from "styled-components";


const App = () => {
  return (
    <AppContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <MainContainer>
        <Introduction />
        <Hero />
        <About />
        <Blog />
        <Experiences />
        <Projects />
       
      </MainContainer>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  display: flex;
`;

const SidebarContainer = styled.div`
  flex: 0 0 200px; /* Sidebar width */
`;

const MainContainer = styled.div`
  flex: 1;
  /* padding: 20px; */
  overflow: hidden;
 text-align: center;

`;
export default App;


