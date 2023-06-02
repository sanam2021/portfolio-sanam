import React from "react";
import styled from "styled-components";

const ProjectsSection = styled.section`
  background-color: #f8f8f8;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1em;
  color: #888;
  margin-top: -30px;
  margin-right:860px;
`;

const ProjectDescription = styled.p`
  color: #888;
`;

const ProjectImage = styled.img`
  min-width: 300px;
  height: 300px;
  margin-top: 50px;
`;

const ProjectLink = styled.a`
  margin-top: 20px;
  color: blue;
`;
const Description = styled.p`
  color: #888;
  margin-bottom: 40px;
  margin-right: 810px;
`;

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <Title>My Project</Title>
      <ProjectDescription>
        <Description>Game App called "I CAN HIT THE EARTH?!??":</Description>
       
        <br />
        In the game, you play as an EARTH. The only thing you can do is move
        left or right with the arrows of your keyboard.
        <br />
        The goal of the game is to stay alive as long as possible by avoiding
        the Metro Showers who are raining from the sky and trying to hit you.
        The longer you stay alive, the higher your score!
      </ProjectDescription>
      <ProjectImage src="images/gala.png" alt="Your Image" />

      <ProjectLink
        href="https://github.com/sanam2021/project-js-nyan-cat"
        target="_blank"
        rel="noopener noreferrer"
      >
        Link to GitHub Repository
      </ProjectLink>
    </ProjectsSection>
  );
};

export default Projects;
