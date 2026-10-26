import React from "react";
import { education, languages, profile, skillGroups } from "../../data/ProfileData";

function About() {
  return (
    <section className="section" id="about">
      <div className="Container">
        <p className="kicker">Profile</p>
        <h2 className="SectionTitle">About</h2>
        <div className="about-layout">
          <article className="panel">
            <p>
              I am {profile.name}, a senior software engineer in {profile.location}.
              The last 6+ years have gone into Laravel and PHP backends, Shopify
              apps, and the APIs that keep ecommerce data in sync.
            </p>
            <p>
              Current work at MAKTA Solutions covers UNAS and Shoprenter
              integrations, promotions, and production releases. Before that I
              led Shopify app teams at SwishTag and Creative Sprout Media, and
              built accounting automation at Focal Software. Freelance Laravel
              and Shopify work has run alongside those roles since 2020.
            </p>
            <div className="skill-grid">
              {skillGroups.map((group) => (
                <div className="skill-card" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="chips">
                    {group.items.map((item) => (
                      <span className="chip" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>
          <aside className="panel">
            <p className="kicker">Education</p>
            <h3>{education.degree}</h3>
            <p className="meta">
              {education.school}
              <br />
              {education.dates}
            </p>
            <p>{education.detail}</p>
            <p className="kicker" style={{ marginTop: "1.4rem" }}>
              Languages
            </p>
            <div className="lang-row">
              {languages.map((language) => (
                <span className="chip" key={language}>
                  {language}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default About;
