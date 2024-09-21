import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h1>Dr. Aditya Kumar Gupta</h1>
        </div>

        <div className="footer-section">
          <p>
            <a href="mailto:aditya30051993@gmail.com">
              aditya30051993@gmail.com
            </a>
            &nbsp;| <a href="tel:+919810377323">+91-9810377323</a>
          </p>
        </div>

        <div className="footer-section connect">
          <div className="social-icons">
            <a
              href="https://github.com/aditya30051993"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/adi0593/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://medium.com/@adi93"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Medium"
            >
              <i className="fab fa-medium"></i>
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01ad99ec024ec54387"
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
        <p>&copy; 2024 Dr. Aditya Kumar Gupta. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
