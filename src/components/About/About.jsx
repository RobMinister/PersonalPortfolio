import React from 'react';
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

const About = () => {
  const handleDownloadCV = () => {
    const driveLink = "https://drive.google.com/file/d/13PiOzkRlt4TaG8A48h29-fkmrF0e9E6H/view?usp=drive_link";
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
            <p><i>I am a software engineer with expertise in both front-end and back-end technologies, currently working as a Software Engineer II at the University of Wisconsin - Superior.</i></p>
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
          </ButtonContainer>
          <HorizontalLine />
        </AboutContent>
      </MainAbout2>
    </AboutContainer>
  );
};

export default About;
