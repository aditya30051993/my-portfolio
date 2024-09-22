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
import heroData from "../data/about.json";

const Hero = () => {
  const headingRef = useRef(null);

  const truncateText = (element, maxWidth) => {
    if (element) {
      const originalText = element.textContent;
      let truncatedText = originalText;

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

    if (headingElement) {
      const headingWidth = headingElement.clientWidth;
      truncateText(headingElement, headingWidth);
    }

    const handleResize = () => {
      if (headingElement) {
        headingElement.textContent = heroData.name; // Reset text before truncating
        const headingWidth = headingElement.clientWidth;
        truncateText(headingElement, headingWidth);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="hero" id="hero">
      <img src={heroData.logo} alt={heroData.name} />
      <motion.h1
        ref={headingRef}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {heroData.name}
      </motion.h1>
      <p className="subtitle">{heroData.subtitle}</p>
      <div className="social-icons">
        <a
          href={heroData.socialLinks.linkedin.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href={heroData.socialLinks.github.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href={heroData.socialLinks.medium.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaMedium />
        </a>
        <a
          href={heroData.socialLinks.upwork.url}
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
        <a href={heroData.resume} className="btn" download>
          <FaDownload />
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Hero;
