import React from "react";
import { FaGithub, FaEnvelope, FaLinkedin, FaHeart } from "react-icons/fa";
import styled from "styled-components";

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 200px;
  background-color: grey;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding: 20px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  &::before,
  &::after {
    content: "";
    display: block;
    height: 20px;
    width: 100%;
    background: transparent;
    pointer-events: none;
    z-index: 1;
    position: sticky;
  }

  &::before {
    top: 0;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.5)
    );
  }

  &::after {
    bottom: 0;
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.5)
    );
  }

`;


const Logo = styled.h1`
  font-size: 24px;

  margin-bottom: 20px;
  color: #fff;

  a {
    color: #fff;
    text-decoration: none;
  }
`;


const MainMenu = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 10px;

      a {
        color: #fff;
        text-decoration: none;
        font-size: 20px;

        &:hover {
          color: #00bcd4;
        }
      }
    }
  }
`;
const MainMenu2 = styled.div`
  ul {
    list-style: none;
    padding: 60px;

    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    margin-left: -100px;
    gap: 20px;

    li {
      margin-right: 10px;

      a {
        color: #fff;
        font-size: 35px;

        &:hover {
          color: #00bcd4;
        }
      }
    }
  }
`;

const Footer = styled.div`
  margin-bottom: 150px;
  font-size: 1em;
`;
const Email = styled.p`
  color: #fff;
`;
const EmailIcon = styled(FaEnvelope)`
  margin-right: 10px;
`;
const AuthorImage = styled.div`
  width: 98px;
  height: 149px;
  background-image: url(/images/Sidebar.png);
  background-size: cover;
  border-radius: 52%;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <div>
        <div className="text-center">
          <div className="text-center">
            <AuthorImage />
            <Logo>Sanam Saadi</Logo>
            <Email>
              <EmailIcon />
              sanamsaadi@gmail.com
            </Email>
          </div>
        </div>
        <MainMenu>
          <ul>
            <li className="colorlib-active">
              <a href="#introduction">Introduction</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#Experiences">Experiences</a>
            </li>
          </ul>
        </MainMenu>
        <MainMenu2>
          <ul>
            <li>
              <a
                href="https://github.com/sanam2021/portfolio-sanam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/sanam-saadi-0482a2248/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </MainMenu2>

        <Footer>
          <p>
            Made with <FaHeart style={{ color: "red" }} /> by Sanam
          </p>
        </Footer>
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
