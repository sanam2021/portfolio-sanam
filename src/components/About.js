import React from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  align-items: center;
  left: 600px;
    background-color: #f8f8f8;
  padding: 20px;
`;

const Content = styled.div`
 display: flex;
  flex-direction: column;
 border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  padding: 20px;


`;


const Heading = styled.h1`
  font-size: 1em;
  color: #888;
  margin-right: 920px;

`;
const Heading2 = styled.h2`
  font-size: .5em;
  color: #888;
  margin-right: 850px;
`;

const About = () => {
  return (
    <Section id="about">
      <Content>
        <Heading>
          <h1>Who am I?</h1>
        </Heading>
        <p>
          Coding has been my passion since high school; however, my journey led
          me into the medical field. I studied as a Registered Nurse in 2004 and
          then opened a Chiropractic clinic. Later, I decided to pursue a career
          as a massage therapist and graduated with a Massage Therapy degree in
          2015. I enjoyed working with patients and managing and growing my
          clinic, which eventually led me into Eastern Medicine. I graduated as
          a Naturopath practitioner and Acupuncturist. However, I found that the
          industry I was in was not very appealing to me. After that, I
          dedicated two full years to learning about becoming a front-end
          developer. I am passionate about coding and constantly strive to
          improve my skills in web development.
        </p>
        <Heading2>
          <h2>What do you like to do for fun?</h2>
        </Heading2>
        <p>
          Outside of coding, I have a love for traveling and have visited over
          35 countries. I hope to explore the world before retirement. I also
          enjoy various outdoor activities such as rock climbing, hiking, and
          cycling. I often spend my weekends hiking and engage in beach
          volleyball during the summer and skiing in the winter. Cooking is
          another hobby I enjoy, especially when accompanied by my favorite
          music.
        </p>
      </Content>
      
    </Section>
  );
};

export default About;
