import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styled from "@emotion/styled";
import { profile } from "../../data/ProfileData";

const SocialContainer = styled.div`
  position: fixed;
  top: 48%;
  left: 1.1rem;
  transform: translateY(-50%);
  z-index: 20;

  ul {
    display: grid;
    gap: 0.8rem;
  }

  a {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: #fffaf3;
    color: #1a1814;
    border: 1px solid rgba(26, 24, 20, 0.1);
    font-size: 1.15rem;
  }

  a:hover {
    color: #c4622d;
  }

  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

function FixSocialIcon() {
  return (
    <SocialContainer>
      <ul>
        <li>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
        </li>
      </ul>
    </SocialContainer>
  );
}

export default FixSocialIcon;
