import React from 'react';
import styled from 'styled-components';
import { workExperience } from '../../data/content';
import MuiTimelineItem from '@mui/lab/TimelineItem';
import MuiTimelineSeparator from '@mui/lab/TimelineSeparator';
import MuiTimelineConnector from '@mui/lab/TimelineConnector';
import MuiTimelineContent from '@mui/lab/TimelineContent';
import MuiTimelineDot from '@mui/lab/TimelineDot';
import { useTheme } from '@mui/material/styles';

const WorkContainer = styled.div`
  background-color: ${(props) => props.theme.bg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const WorkContent = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  padding-top: 20px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  text-align: center;
  color: ${(props) => props.theme.remainingTextColor};
`;

const WorkList = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  @media (max-width: 660px) {
    align-items: center;
  }
`;

const Card = styled.div`
  width: 650px;
  border-radius: 10px;
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;

  @media only screen and (max-width: 768px){
    padding: 10px;
    gap: 8px;
    width: 300px;
  }

  border: 2px dashed ${(props) => props.theme.borderColor};
`;

const WorkCard = styled.div`
  .top {
    width: 100%;
    display: flex;
    gap: 12px;
  }

  .imager {
    height: 55px;
    width: 55px;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
      height: 40px;
    }
  }

  .body-work {
    width: 100%;
    display: flex;
    flex-direction: column; 
  }

  .position {
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => props.theme.remainingTextColor};
    @media only screen and (max-width: 768px){
      font-size: 14px;
    }
  }

  .company {
    font-size: 14px;
    font-weight: 500;
    font-style: italic;
    color: ${(props) => props.theme.remainingTextColor};
    @media only screen and (max-width: 768px){
      font-size: 12px;
    }
  }

  .date {
    position: absolute;
    top: 12px;
    right: 16px;
    font-size: 14px;
    font-weight: 500;
    color: ${(props) => props.theme.remainingTextColor};
    @media only screen and (max-width: 768px){
      font-size: 12px;
    }
  }

  .description {
    margin-top: 10px;
    color: ${(props) => props.theme.remainingTextColor};
    font-size: 14px;
    @media only screen and (max-width: 768px){
      font-size: 12px;
    }

    ul {
      margin: 0;
      padding-left: 18px;
    }

    li {
      list-style-type: disc;
    }
  }
`;

const WorkCardComponent = ({ workData }) => {
  return (
    <MuiTimelineItem>
      <MuiTimelineSeparator>
        <MuiTimelineDot variant="outlined" color="secondary" />
        <MuiTimelineConnector />
      </MuiTimelineSeparator>
      <MuiTimelineContent>
        <Card>
          <WorkCard>
            <div className="top">
              <img className="imager" src={workData.img} alt="Company Logo" />
              <div className="body-work">
                <div className="company">{workData.company}</div>
                <div className="position">{workData.role}</div>
              </div>
            </div>
            <div className="date">{workData.date}</div>
            <div className="description">
              <ul>
                {workData.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </WorkCard>
        </Card>
      </MuiTimelineContent>
    </MuiTimelineItem>
  );
};

const Work = () => {
  const theme = useTheme();
  return (
    <WorkContainer id="work">
      <WorkContent>
        <Title>Work Experience</Title>
        <WorkList>
          {workExperience.map((workData, index) => (
            <WorkCardComponent key={index} workData={workData} />
          ))}
        </WorkList>
      </WorkContent>
    </WorkContainer>
  );
};

export default Work;
