import React from "react";
import { FaTimes } from "react-icons/fa";
import styled from "@emotion/styled";
import { profile } from "../../data/ProfileData";

const SiderBar = styled.div`
  background: rgba(6, 10, 16, 0.72);
  backdrop-filter: blur(24px) saturate(1.4);
  border-left: 1px solid rgba(255, 255, 255, 0.08);
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  z-index: 999;
  transition: 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const CloseIcon = styled(FaTimes)`
  font-size: 1.6rem;
  color: #f6f1e8;
  position: absolute;
  right: 1.4rem;
  top: 1.4rem;
  cursor: pointer;
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  a {
    color: #f6f1e8;
    font-size: 1.7rem;
    font-family: "Fraunces", serif;
  }

  a:hover {
    color: #e7b79a;
  }

  a + a {
    margin-top: 1.6rem;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.4rem;
`;

function Dropdown({ isOpen, toggle }) {
  return (
    <SiderBar isOpen={isOpen} onClick={toggle} aria-hidden={!isOpen}>
      <CloseIcon onClick={toggle} />
      <NavMenu>
        <a href="#experience" onClick={toggle}>
          Experience
        </a>
        <a href="#projects" onClick={toggle}>
          Work
        </a>
        <a href="#about" onClick={toggle}>
          About
        </a>
        <a href="#contact" onClick={toggle}>
          Contact
        </a>
      </NavMenu>
      <NavBtn onClick={toggle}>
        <a className="btn PrimaryBtn" href={profile.resume} target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </NavBtn>
    </SiderBar>
  );
}

export default Dropdown;
