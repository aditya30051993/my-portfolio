import React from "react";
import ProjectCard from "./ProjectCard";
import projectData from "../data/projects.json"; // Adjust path as necessary
import {
  FaComment,
  FaCopy,
  FaDownload,
  FaExternalLinkAlt,
  FaGithub,
  FaGoogleDrive,
  FaMedium,
  FaRegStar,
  FaVideo,
} from "react-icons/fa"; // Import icons
import { FaCodeFork, FaHandsClapping } from "react-icons/fa6";

const Projects = () => {
  const renderIcon = (icon) => {
    switch (icon) {
      case "FaComment":
        return <FaComment />;
      case "FaCopy":
        return <FaCopy />;
      case "FaDownload":
        return <FaDownload />;
      case "FaVideo":
        return <FaVideo />;
      case "FaGithub":
        return <FaGithub />;
      case "FaGoogleDrive":
        return <FaGoogleDrive />;
      case "FaMedium":
        return <FaMedium />;
      case "FaRegStar":
        return <FaRegStar />;
      case "FaCodeFork":
        return <FaCodeFork />;
      case "FaHandsClapping":
        return <FaHandsClapping />;
      case "FaExternalLinkAlt":
        return <FaExternalLinkAlt />;
      default:
        return null;
    }
  };
  const randomHash = 1;
  return (
    <section className="projects" id="projects">
      <h2>🎨 My Work</h2>
      <div className="project-card-container">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            video={project.video}
            title={project.title}
            description={project.description}
            image={project.image?.replace("[RANDOM_HASH]", randomHash)}
            linkLabel={project.linkLabel}
            linkIcon={renderIcon(project.linkIcon)}
            linkUrl={project.linkUrl}
            ctas={project.ctas.map((cta) => ({
              ...cta,
              icon: renderIcon(cta.icon),
            }))}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
