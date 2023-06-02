import React from "react";

import styled from "styled-components";

const BlogSection = styled.section`
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
  margin-right: 830px;

`;

const Description = styled.p`
  color: #888;
  margin-bottom: 100px;
  margin-right: 810px;
`;

const ExpertiseBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  margin-left:50px;
`;

const Expertise1 = styled.div`
  max-height: 430px;
  box-shadow: 0px 0px 56px -8px rgba(0, 0, 0, 0.20);
  border-bottom: 3px solid orangered;
  margin-bottom: 20px;
 
  h1 {
    font-size: 2em;
  }
`;


const Expertise2 = styled.div`
  max-height: 500px;
  box-shadow: 0px 0px 56px -8px rgba(0, 0, 0, 0.17);
  border-bottom: 3px solid blue;
  box-sizing: border-box;
  margin-bottom: 20px;
`;

const Expertise3 = styled.div`
  max-height: 500px;
  box-shadow: 0px 0px 56px -8px rgba(0, 0, 0, 0.17);
  box-sizing: border-box;
  border-bottom: 3px solid yellow;
  margin-bottom: 20px;
`;

const Expertise4 = styled.div`
  max-height: 500px;
  box-shadow: 0px 0px 56px -8px rgba(0, 0, 0, 0.17);
  box-sizing: border-box;
  border-bottom: 3px solid lightskyblue;
  margin-bottom: 20px;
`;

const Icon1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  width: 120px;
  position: relative;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  
 

  img {
    height: 150px;
    width: 150px;
  }
`;

const Icon2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  width: 120px;
  position: relative;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);

  img {
    height: 150px;
    width: 150px;
  }
`;

const Icon3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  width: 120px;
  position: relative;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);

  img {
    height: 150px;
    width: 150px;
  }
`;

const Icon4 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  width: 120px;
  position: relative;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);

  img {
    height: 150px;
    width: 150px;
  }
`;




const Blog = () => {
  return (
    <BlogSection id="blog">
      <Title>WHAT I DO?</Title>
      <Description>HERE ARE SOME OF MY EXPERTISE:</Description>

      <ExpertiseBox>
        <Expertise1>
          <Icon1>
            <img src="/images/Html.png" alt="Html Icon" />
          </Icon1>
          <h1>HTML</h1>
          <p>
            Creating Interactive Elements,experience in using heading tags
            (h1-h6), paragraphs (p), lists (ul, ol), and semantic tags like
            article, section, nav, and footer to provide meaningful structure to
            web pages.
          </p>
        </Expertise1>

        <Expertise2>
          <Icon2>
            <img src="/images/Css.png" alt="CSS Icon" />
          </Icon2>
          <h1>CSS</h1>
          <p>Using CSS to style web pages, applying colors, fonts, and layout
            properties to create visually appealing designs. CSS selectors,
            cascading rules, and the box model to control the appearance of HTML
            elements. Using CSS flexbox to create flexible and responsive
            layouts.
          </p>
        </Expertise2>

        <Expertise3>
          <Icon3>
            <img src="/images/Javascript.png" alt="JavaScript Icon" />
          </Icon3>
          <h1>JavaScript</h1>
          <p> Using JavaScript to manipulate the Document Object Model (DOM) of
            web pages.Experience with how to select elements, modify their
            properties, create new elements, and handle events. Experience
            writting custom validation functions to ensure that user input met
            specific criteria before submitting the form to the server.
          </p>
        </Expertise3>

        <Expertise4>
          <Icon4>
            <img src="/images/React.png" alt="React Icon" />
          </Icon4>
          <h1>React</h1>
          <p> Defin routes, handle navigation, and pass route parameters to create
            dynamic and interactive web applications.Fetching and Managing Data
            with React.Fetching data from APIs and managing it within React components.React Context API: I gained
          
          </p>
        </Expertise4>
      </ExpertiseBox>
    </BlogSection>
  );
};

export default Blog;
