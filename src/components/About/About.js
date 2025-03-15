import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image src="/man-svgrepo-com.svg" alt="man-svgrepo" />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! My name is <strong>Haseeb Ahmed Khan</strong>. I'm
              originally from Pakistan and have been working as a developer for
              the past 4.5 years, gaining valuable experience in backend
              development, Shopify app creation, and full-stack web solutions.
              Throughout my career, I’ve honed my problem-solving skills,
              adaptability, and ability to build scalable applications.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              My journey into technology began with a deep passion for coding
              and logic-driven development. Over the years, I have worked
              extensively with Laravel, Node.js, React, and MongoDB,
              specializing in Shopify app development, API integrations, and
              performance optimization. I have contributed to diverse projects,
              including POS systems, bidding platforms, and automation tools,
              helping businesses streamline their operations.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              I thrive in collaborative environments, working with teams to
              build impactful solutions. My focus remains on backend
              engineering, Shopify ecosystem development, and scalable eCommerce
              solutions. I look forward to exploring new challenges and
              contributing to innovative projects in the tech world! 🚀
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
