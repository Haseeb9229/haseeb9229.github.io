import React from "react";
import { Nav, Bars, NavMenu, NavBtn } from "./HeaderElements";
import { profile } from "../../data/ProfileData";

const Header = ({ toggle }) => {
  return (
    <header className="site-header">
      <div className="Container" style={{ padding: 0 }}>
        <Nav>
          <a className="brand" href="#top">
            <span className="mark">HA</span>
            <span className="wordmark">Haseeb Ahmed</span>
          </a>
          <NavMenu>
            <a className="menu-item" href="#experience">
              Experience
            </a>
            <a className="menu-item" href="#projects">
              Work
            </a>
            <a className="menu-item" href="#about">
              About
            </a>
            <a className="menu-item" href="#contact">
              Contact
            </a>
          </NavMenu>
          <NavBtn>
            <a
              className="btn PrimaryBtn"
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </NavBtn>
          <Bars onClick={toggle} aria-label="Open menu" role="button" tabIndex={0} />
        </Nav>
      </div>
    </header>
  );
};

export default Header;
