import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaMedium,
  FaBriefcase,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa"; // Importing icons

const Hero = () => {
  const headingRef = useRef(null);

  // Function to truncate text at the word boundary
  const truncateText = (element, maxWidth) => {
    if (element) {
      const originalText = element.textContent;
      let truncatedText = originalText;

      // Continuously reduce the text until the element fits within the maxWidth
      while (element.scrollWidth > maxWidth && truncatedText.length > 0) {
        truncatedText = truncatedText.substring(
          0,
          truncatedText.lastIndexOf(" ")
        );
        element.textContent = truncatedText;
      }
    }
  };

  useEffect(() => {
    const headingElement = headingRef.current;

    // Check if the heading exists and calculate its width
    if (headingElement) {
      const headingWidth = headingElement.clientWidth;
      truncateText(headingElement, headingWidth);
    }

    // Recalculate truncation on window resize to handle responsiveness
    const handleResize = () => {
      if (headingElement) {
        headingElement.textContent = "Dr. Aditya Kumar Gupta"; // Reset text before truncating
        const headingWidth = headingElement.clientWidth;
        truncateText(headingElement, headingWidth);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="hero" id="hero">
      <img src="logo512.png" alt="Dr. Aditya Kumar Gupta" />
      <motion.h1
        ref={headingRef}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Dr. Aditya Kumar Gupta
      </motion.h1>
      <p className="subtitle">
        Blending healthcare expertise with tech innovation
      </p>
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/adi0593/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/aditya30051993"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://medium.com/@adi93"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaMedium />
        </a>
        <a
          href="https://www.upwork.com/freelancers/~01c2bfda01cedbb871"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaBriefcase />
        </a>
      </div>
      <div className="cta-buttons">
        <a href="#contact" className="btn">
          <FaEnvelope />
          Contact Me
        </a>
        <a href="/resume.pdf" className="btn" download>
          <FaDownload />
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Hero;
