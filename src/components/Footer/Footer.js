import React from "react";
import { profile } from "../../data/ProfileData";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="Container footer-row">
        <span>
          {profile.name} · {profile.location}
        </span>
        <span>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          {" · "}
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {" · "}
          <a href={`mailto:${profile.email}`}>Email</a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
