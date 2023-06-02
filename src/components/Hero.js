import React, { useState } from "react";
import styled from "styled-components";
import { FaBriefcase,  FaDownload } from "react-icons/fa";



const slides = [1, 2];


const HeroSection = styled.div`
  background-image: url("images/background.jpg");
  background-size: cover;
  margin-left:40px;

  margin-top: 0px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row-reverse;
  gap: 20px;
  position: relative;
`;

const Image = styled.img`
height: 100vh;

  align-self: flex-start;


`;

const SideContent = styled.div`
position:absolute;
top:150px;
left:100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  gap: 20px;

`;

const SlideButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: #ccc;
  border: none;
  margin: 10px;
  border-radius: 93px;
  cursor: pointer;

  margin-right: 4px;
  margin-bottom: 4px;
  font-family: "Quicksand", Arial, sans-serif;
  transition: 0.5s;

  display: inline-block;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  
`;

const Slide1Container = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
 
  font-style: italic;
  font-size: 1em;
`;

const Slide2Container = styled.div`
 
  display: flex;
  flex-direction: column;
  align-items: center;
 
  font-style: italic;
  font-size: 1em;
`;
  const ViewCVButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    border-radius: 5px;
    text-decoration: none;
    color: #000;
    border: 5px solid blue;
    box-shadow: 10 10 20px rgba(255, 255, 255, 20);
   

    font-size: 19px;
    text-transform: uppercase;

    font-weight: 450;
  `;

  const ViewProjectsButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;

    border-radius: 5px;
    text-decoration: none;
    color: #000;
    border: 5px solid blue;
    box-shadow: 10 10 20px rgba(255, 255, 255, 10);
    font-size: 19px;
    text-transform: uppercase;

    font-weight: 450;
  `;

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleSlideClick = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };


  return (
    <HeroSection>
      <Image src="images/me1.png" alt="Your Image" />
      <SideContent>
        {currentSlide === 1 && (
          <Slide1Container>
            <h2>
              Hi! <br />
              I'm Sanam
            </h2>

            <p>
              <ViewCVButton
                href="https://docs.google.com/document/d/1cDHfjKrTKyPLAOfpL8q1iMUXsrPk1pg6Sp99sbDUcWo/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <span>View CV</span>
                  <FaDownload style={{ marginLeft: "15px" }} />
                </div>
              </ViewCVButton>
            </p>
          </Slide1Container>
        )}
        {currentSlide === 2 && (
          <Slide2Container>
            <h2>
              I love building
              <br /> THINGS !!
            </h2>

            <p>
              <ViewProjectsButton
                href="https://github.com/sanam2021"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <span>View Projects</span>
                 
                </div>
                <FaBriefcase style={{ marginLeft: "15px" }} />
               
              </ViewProjectsButton>
            </p>
          </Slide2Container>
        )}
        {slides.map((number) => (
          <SlideButton
            key={number}
            onClick={() => handleSlideClick(number)}
            style={{
              backgroundColor: currentSlide === number ? "blue" : "#ccc",
            }}
          />
        ))}
      </SideContent>
    </HeroSection>
  );
};
 export default Hero;












