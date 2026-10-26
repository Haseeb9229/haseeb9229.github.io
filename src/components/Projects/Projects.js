import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";

function Projects() {
  return (
    <section className="section section-muted" id="projects">
      <div className="Container">
        <p className="kicker">Selected work</p>
        <h2 className="SectionTitle">Shopify apps</h2>
        <p className="section-lead">
          Products shipped around checkout, reviews, email, bidding, and sales
          calls. Each one sits on Laravel with a React or Inertia interface.
        </p>
        <ProjectCard />
      </div>
    </section>
  );
}

export default Projects;
