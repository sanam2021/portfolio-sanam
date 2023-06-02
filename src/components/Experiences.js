import React from "react";
import styled from "styled-components";
import { FaPen } from "react-icons/fa";

const ExperiencesSection = styled.section`
  display: flex;
  align-items: center;
  margin-left: 48px;
  background-color: #f8f8f8;
  padding: 20px;
 
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;
`;
const Timeline = styled.div`
  background-color: yellow;
  display: flex;
  align-items: center; 
  position: relative;


`;

const TimelineIcon1 = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
  width: 60px; 
  height: 60px; 
  border-radius: 50%;

  background-color: yellow;
  width: 40px;
  height: 40px;

  border-radius: 50%;
  border: 10px solid lightgrey;
  margin-right: 10px;

  position: absolute;
  top: -14px;
  left: -22px; 
`;

const TimelineIcon = styled.div`
  background-color: lightskyblue;

  display: flex;
  justify-content: center; 
  align-items: center; 
  width: 60px; 
  height: 60px; 
  border-radius: 50%;

  width: 40px;
  height: 40px;

  border-radius: 50%;
  border: 10px solid lightgrey;
  margin-right: 10px;

  position: absolute;
  top: -24px;
  left: -60px;
`;


const TimelineLine = styled.div`
  width: 6px;
  height: 630px;
  background: linear-gradient(to bottom, yellow 50%, lightblue 50%);
  border-radius: 50%;
  margin-right: 10px;
  align-self: flex-start;
  position: absolute;
  top: 18px;
  left: -20px;
  bottom: 40px;
`;


const ExperienceDetails = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  

  width: 100%;
  padding: 0 2rem;
 
h1{
 margin-right: 700px; 
}


  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
  }
`;

const TimelineHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1em;
  color: #888;
  margin-right: 860px;
`;

const Experiences = () => {
  return (
    <>
      <TimelineHeading>Experiences</TimelineHeading>
      <ExperiencesSection id="Experiences">
        <Container className="container">
          <ExperienceContainer className="experience-container">
            <Timeline>
              <TimelineIcon1>
                <FaPen></FaPen>
              </TimelineIcon1>
              <TimelineLine />
            </Timeline>

            <ExperienceDetails>
              <h1>Assisted Front-end Developer</h1>
              <p>February 2021 – October 2021</p>
              <h3>ThotBlox company</h3>
              <p>
                Project #1 - Nutrition Elite+
                <ul>
                  <li>
                    Created an Admin user interface, a web-based application for
                    the owners to manage and track daily inventories using
                    React.
                  </li>
                  <li>
                    Created an interactive user interface using React to help
                    with purchasing weekly meal subscriptions as well as
                    allowing variances in choice and ingredients.
                  </li>
                </ul>
                Project #2 - SBlox
                <ul>
                  <li>
                    Created an online interactive and immersive social media
                    using ReactJS and Bootstrap.
                  </li>
                  <li>
                    Utilized HTML, CSS, and bootstrap within framework to create
                    a responsive user interface.
                  </li>
                  <li>
                    Used React to allow users to instantly update the product
                    lists interface without reloading.
                  </li>
                </ul>
                Project #3 - ThotBlox
                <ul>
                  <li>
                    Developed the latest user-facing features using React.
                  </li>
                  <li>
                    Built reusable components and front-end libraries for future
                    use.
                  </li>
                  <li>
                    Operated a variety of languages such as HTML and CSS to
                    write and create user-friendly web pages.
                  </li>
                  <li>
                    Designed and maintained the company’s website by adding more
                    features and functionality to improve scalable applications.
                  </li>
                  <li>
                    Designed the user interface and deployed high-quality
                    cross-browser web app features.
                  </li>
                </ul>
              </p>
            </ExperienceDetails>
          </ExperienceContainer>

          <ExperienceContainer className="experience-container">
            <ExperienceDetails>
              <Timeline>
                <TimelineIcon>
                  <FaPen></FaPen>
                </TimelineIcon>
              </Timeline>

              <h1>Assisted Front-end Developer</h1>
              <p>December 2020 – March 2021</p>
              <h3>Del Euro stucco</h3>
              <p>
                Played a key role in designing, building, and maintaining
                website and software applications and updating client’s user
                interface. • Drafted design, testable, and efficient codes via
                Bootstrap and delivered high-quality codes. • Created the layout
                of the user interface for the website using standard HTML/CSS
                practices.
              </p>
            </ExperienceDetails>
          </ExperienceContainer>
        </Container>
      </ExperiencesSection>
    </>
  );
};

export default Experiences;
