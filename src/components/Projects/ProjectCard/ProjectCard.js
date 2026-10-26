import React from "react";
import { ProjectList } from "../../../data/ProjectData";
import {
  Card,
  CardLeft,
  CardRight,
  TechCardContainer,
  TechCard,
  BtnGroup,
} from "./ProjectCardElements";

function ProjectCard() {
  return (
    <div className="project-list">
      {ProjectList.map((list) => (
        <Card key={list.title}>
          <CardLeft>
            <img src={list.img} alt="" />
          </CardLeft>
          <CardRight>
            <h3>{list.title}</h3>
            <p>{list.description}</p>
            <TechCardContainer>
              {list.tech_stack.map((tech) => (
                <TechCard key={tech}>{tech}</TechCard>
              ))}
            </TechCardContainer>
            <BtnGroup>
              {list.demo_url.length > 0 && (
                <a
                  className="btn PrimaryBtn"
                  href={list.demo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View project
                </a>
              )}
            </BtnGroup>
          </CardRight>
        </Card>
      ))}
    </div>
  );
}

export default ProjectCard;
