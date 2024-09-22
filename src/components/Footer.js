import React from "react";
import footerData from "../data/about.json";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h1>{footerData.name}</h1>
        </div>

        <div className="footer-section">
          <p>
            <a href={`mailto:${footerData.email}`}>
              {footerData.email}
            </a>
            &nbsp;| <a href={`tel:${footerData.phone}`}>{footerData.phone}</a>
          </p>
        </div>

        <div className="footer-section connect">
          <div className="social-icons">
            <a
              href={footerData.socialLinks.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href={footerData.socialLinks.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href={footerData.socialLinks.medium.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Medium"
            >
              <i className="fab fa-medium"></i>
            </a>
            <a
              href={footerData.socialLinks.upwork.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Upwork"
            >
              <i className="fas fa-briefcase"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{footerData.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
