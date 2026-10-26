import React from "react";
import { experience } from "../../data/ProfileData";

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="Container">
        <p className="kicker">Career</p>
        <h2 className="SectionTitle">Experience</h2>
        <p className="section-lead">
          Software engineer at MAKTA Solutions, with earlier Shopify leadership
          at SwishTag and Creative Sprout Media, accounting systems at Focal
          Software, and freelance Laravel work since 2020.
        </p>
        <ol className="timeline">
          {experience.map((job) => (
            <li className="job" key={`${job.company}-${job.start}`}>
              <div className="job-when">
                <span>
                  {job.start} — {job.end}
                </span>
              </div>
              <div>
                <h3 className="job-role">
                  {job.role}
                  {job.current && <span className="pill">Current</span>}
                </h3>
                <p className="job-company">{job.company}</p>
                {job.place && <p className="job-place">{job.place}</p>}
                <ul>
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
