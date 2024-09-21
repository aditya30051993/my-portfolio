import React from "react";
import ProjectCard from "./ProjectCard";
import { FaExternalLinkAlt, FaRegStar } from "react-icons/fa"; // Import icons
import { FaCodeFork } from "react-icons/fa6";

function generateRandomHash(length = 8) {
  let hash = "";
  const characters = "0123456789abcdef";
  for (let i = 0; i < length; i++) {
    hash += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return hash;
}

const Projects = () => {
  const randomHash = 1 || generateRandomHash(4);

  const projectData = [
    {
      title: "A.D.I",
      description:
        "A.D.I. enhances interactions web content integrating RAG for dynamic queries with Co-Pilot",
      image: `https://opengraph.githubassets.com/${randomHash}/aditya30051993/A.D.I`,
      linkLabel: "Find More",
      linkIcon: <FaExternalLinkAlt />,
      linkUrl: "https://github.com/aditya30051993/A.D.I",
      ctas: [
        {
          icon: <FaRegStar />,
          label: "Star",
          link: "https://github.com/aditya30051993/A.D.I/stargazers",
        },
        {
          icon: <FaCodeFork />,
          label: "Fork",
          link: "https://github.com/aditya30051993/A.D.I/fork",
        },
      ],
    },
    {
      title: "My Portfolio",
      description:
        "A showcase of my projects and skills across various domains and technologies",
      image: `https://opengraph.githubassets.com/${randomHash}/aditya30051993/my-portfolio`,
      linkLabel: "Find More",
      linkIcon: <FaExternalLinkAlt />,
      linkUrl: "https://github.com/aditya30051993/my-portfolio",
      ctas: [
        {
          icon: <FaRegStar />,
          label: "Star",
          link: "https://github.com/aditya30051993/my-portfolio/stargazers",
        },
        {
          icon: <FaCodeFork />,
          label: "Fork",
          link: "https://github.com/aditya30051993/my-portfolio/fork",
        },
      ],
    },
    {
      title: "Trade Assistant",
      description:
        "Real-time stock trading assistant taking decisions based on current market and portfolio.",
      image: `https://opengraph.githubassets.com/${randomHash}/aditya30051993/TradeAssistant`,
      linkLabel: "Find More",
      linkIcon: <FaExternalLinkAlt />,
      linkUrl: "https://github.com/aditya30051993/TradeAssistant",
      ctas: [
        {
          icon: <FaRegStar />,
          label: "Star",
          link: "https://github.com/aditya30051993/TradeAssistant/stargazers",
        },
        {
          icon: <FaCodeFork />,
          label: "Fork",
          link: "https://github.com/aditya30051993/TradeAssistant/fork",
        },
      ],
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2>🎨 My Work</h2>
      <div className="project-card-container">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            linkLabel={project.linkLabel}
            linkIcon={project.linkIcon}
            linkUrl={project.linkUrl}
            ctas={project.ctas}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
