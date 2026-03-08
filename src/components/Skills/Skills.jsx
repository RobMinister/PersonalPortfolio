import React, { useMemo } from 'react';
import styled from 'styled-components';
import { skills } from '../../data/content';

const CATEGORY_ORDER = [
  'Backend & Languages',
  'Frontend',
  'Databases',
  'Tools',
];

const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.bg};
`;

const SkillsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
`;

const Title = styled.h2`
  margin-top: 20px;
  text-align: center;
  color: ${(props) => props.theme.remainingTextColor};
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px 24px;
  padding: 20px 100px;
`;

const ToolsGroup = styled.div`
  display: inline-flex;
  flex-wrap: nowrap;
  gap: 12px;
  @media (max-width: 768px) {
    gap: 8px;
  }
`;

const SkillItem = styled.div`
  font-size: 20px;
  font-weight: 400;
  border: 2px solid ${(props) => props.theme.borderColor};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  border-style: dashed;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin: 10px;
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const ResponsiveSkillList = styled(SkillList)`
  @media (max-width: 768px) {
    gap: 8px 12px;
    padding: 0px 10px;
  }
`;

const ResponsiveSkillItem = styled(SkillItem)`
  font-size: 16px;
  padding: 8px 12px;
  color: ${(props) => props.theme.remainingTextColor};
`;

const Skills = () => {
  const { otherSkills, toolsSkills } = useMemo(() => {
    const grouped = {};
    skills.forEach((skill) => {
      const cat = skill.category || 'Other';
      if (!grouped[cat]) grouped[cat] = [];
      grouped[cat].push(skill);
    });
    const tools = grouped['Tools'] || [];
    const other = CATEGORY_ORDER.filter((cat) => cat !== 'Tools' && grouped[cat])
      .flatMap((cat) => grouped[cat]);
    return { otherSkills: other, toolsSkills: tools };
  }, []);

  return (
    <SkillsContainer id="skills">
      <SkillsContent>
        <Title>Skills</Title>
        <ResponsiveSkillList>
          {otherSkills.map((item) => (
            <ResponsiveSkillItem key={item.name} title={item.name}>
              <SkillImage src={item.image} alt={item.name} />
              {item.name}
            </ResponsiveSkillItem>
          ))}
          <ToolsGroup>
            {toolsSkills.map((item) => (
              <ResponsiveSkillItem key={item.name} title={item.name}>
                <SkillImage src={item.image} alt={item.name} />
                {item.name}
              </ResponsiveSkillItem>
            ))}
          </ToolsGroup>
        </ResponsiveSkillList>
      </SkillsContent>
    </SkillsContainer>
  );
};

export default Skills;
