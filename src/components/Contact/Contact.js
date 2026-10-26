import React, { useState } from "react";
import { profile } from "../../data/ProfileData";

function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (error) {
      setCopied(false);
    }
  };

  return (
    <section className="section section-ink" id="contact">
      <div className="Container contact-grid">
        <div>
          <p className="kicker">Contact</p>
          <h2 className="SectionTitle">Let’s build the next app.</h2>
          <p className="section-lead-light">
            Available for backend, Shopify app, and integration work. The
            fastest path is email. The resume has the same history as this page.
          </p>
          <a className="btn PrimaryBtn" href={profile.resume} target="_blank" rel="noopener noreferrer">
            Download resume
          </a>
        </div>
        <div className="contact-links">
          <button className="contact-link" type="button" onClick={copyEmail}>
            <span>Email</span>
            <strong>{copied ? "Copied" : profile.email}</strong>
          </button>
          <a className="contact-link" href={profile.phoneHref}>
            <span>Phone</span>
            <strong>{profile.phone}</strong>
          </a>
          <a className="contact-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <span>LinkedIn</span>
            <strong>haseebahmed-khan</strong>
          </a>
          <a className="contact-link" href={profile.github} target="_blank" rel="noopener noreferrer">
            <span>GitHub</span>
            <strong>Haseeb9229</strong>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
