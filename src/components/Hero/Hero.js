import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import { TypeAnimation } from "react-type-animation";
import { profile } from "../../data/ProfileData";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <section className="hero" id="top">
        <div className="Container hero-grid">
          <div>
            <p className="eyebrow">{profile.title} · {profile.location}</p>
            <h1>{profile.name}</h1>
            <div className="role-swap">
              <TypeAnimation
                sequence={[
                  "Senior software engineer.",
                  1600,
                  "Shopify app developer.",
                  1600,
                  "Laravel and ecommerce integrations.",
                  1600,
                ]}
                wrapper="span"
                speed={45}
                repeat={Infinity}
                cursor
              />
            </div>
            <p className="lede">{profile.summary}</p>
            <div className="hero-actions">
              <a className="btn PrimaryBtn" href="#experience">
                View experience
              </a>
              <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
                Email me
              </a>
            </div>
          </div>
          <aside className="hero-card">
            <p>Now</p>
            <h2>Software Engineer</h2>
            <p>MAKTA Solutions · Feb 2026 — Present. Freelance Laravel work since Feb 2020.</p>
            <div className="stat-row">
              <div className="stat">
                <strong>6+ yrs</strong>
                <span>Backend and Shopify apps</span>
              </div>
              <div className="stat">
                <strong>MCS</strong>
                <span>Bahauddin Zakariya University</span>
              </div>
              <div className="stat">
                <strong>Docker</strong>
                <span>Laravel, PHP, Node.js</span>
              </div>
              <div className="stat">
                <strong>Lahore</strong>
                <span>Urdu and English</span>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default Hero;
