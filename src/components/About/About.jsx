import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Profile from './Profile.jpg';
import { BsArrowUpRight } from 'react-icons/bs';
import { TfiDownload } from 'react-icons/tfi';
import { FaSquareXTwitter, FaLinkedin, FaSquareGithub } from 'react-icons/fa6';
import { Link } from 'react-scroll';

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.bg};
`;

const MainAbout2 = styled.div`
  width: 100%;
  max-width: 1200px;
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  h2 {
    color: ${(props) => props.theme.remainingTextColor};
  }
`;

const bounceAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
`;

const ProfileImage = styled.img`
  height: 180px;
  width: 180px;
  border-radius: 50%;
  margin-top: 50px;
  animation: ${bounceAnimation} 1s infinite alternate;
  @media (max-width: 600px) {
    height: 160px;
    width: 160px;
  }
`;

const Description = styled.i`
  font-weight: 100;
  text-align: center;
  color: ${(props) => props.theme.remainingTextColor};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.buttonBgColor};
  border: none;
  color: ${(props) => props.theme.textcolor};
  padding: 15px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 30px;
  margin: 10px;
  display: flex;
  align-items: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const ClickMeButton = styled(Button)`
  background-color: yellow;
  color: black;
`;

const IconWrapper = styled.span`
  margin-left: 8px;
`;

const CombinedTitle = styled.h1`
  font-size: 48px;
  text-align: center;
  color: ${(props) => props.theme.remainingTextColor};
`;

const ScoialIcon = styled.div`
  display: flex;
  font-size: 32px;
  gap: 20px;
  a {
    color: ${(props) => props.theme.remainingTextColor};
  }
`;

const HorizontalLine = styled.hr`
  width: 100%;
  border: 0;
  height: 1px;
  background-image: ${(props) => props.theme.gradient};

  margin-top: auto;
  margin-bottom: 30px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 450px;
  height: 650px;
  position: relative;
`;

const CloseButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 5px 9px;
  font-size: 14px;
  border-radius: 3px;
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 10px;

  &:hover {
    background-color: darkred;
  }
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDownloadCV = () => {
    const driveLink = "https://drive.google.com/file/d/1lIgn7DgIxLvTLhkv90WFLw0iytiy-S3W/view?usp=drive_link";
    window.open(driveLink, "_blank");
  };

  return (
    <AboutContainer id="about">
      <MainAbout2>
        <AboutContent>
          <ProfileImage src={Profile} alt="Profile" />
          <h2>Hi, I'm Robin Sharma</h2>
          <CombinedTitle>
            Passionate about Full Stack Development <br />
            and Creating Seamless User Experiences.
          </CombinedTitle>
          <Description>
            <p><i>Full-Stack Software Engineer with 3+ years of experience in backend and frontend technologies, including Java, C#, .NET, Python, Node.js, React, and Angular, with a strong focus on RESTful API development, microservices architecture and cloud-based solutions</i></p>
          </Description>
          <ScoialIcon>
            <a href="https://github.com/RobMinister" target="_blank" rel="noopener noreferrer">
              <FaSquareGithub />
            </a>
            <a href="https://www.linkedin.com/in/robinSharma11" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </ScoialIcon>
          <ButtonContainer>
            <Link to="contact" spy={true} smooth={true} offset={-80} duration={500} delay={200}>
              <Button>Contact Me <IconWrapper><BsArrowUpRight /></IconWrapper></Button>
            </Link>
            <Button onClick={handleDownloadCV}>Download CV <IconWrapper><TfiDownload /></IconWrapper></Button>
            <ClickMeButton onClick={handleOpenModal}>Click to Play a game</ClickMeButton>
          </ButtonContainer>
          {isModalOpen && (
            <ModalOverlay>
              <ModalContent>
                <CloseButton onClick={handleCloseModal}>Close</CloseButton>
                <Iframe
                  src="https://tictactoerobin.vercel.app"
                  title="Tic Tac Toe"
                />
              </ModalContent>
            </ModalOverlay>
          )}
          <HorizontalLine />
        </AboutContent>
      </MainAbout2>
    </AboutContainer>
  );
};

export default About;
