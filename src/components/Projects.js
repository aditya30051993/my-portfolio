import React from "react";
import ProjectCard from "./ProjectCard";
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
      linkIcon: <FaGithub />,
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
      title: "Locum Healthcare",
      description:
        "Showcasing the Locum Healthcare app for job management, built with Flutter and Firebase",
      video: `https://drive.google.com/file/d/1Vt0wpQjJ793EkdujfR5GYxsqma8Vtc2v/preview`,
      linkLabel: "View More",
      linkIcon: <FaVideo />,
      linkUrl:
        "https://drive.google.com/file/d/1Vt0wpQjJ793EkdujfR5GYxsqma8Vtc2v/view?usp=sharing",
      ctas: [
        {
          icon: <FaComment />,
          label: "Comment",
          link: "https://drive.google.com/file/d/1Vt0wpQjJ793EkdujfR5GYxsqma8Vtc2v/view?usp=drive_link",
        },
        {
          icon: <FaDownload />,
          label: "Download",
          link: "https://drive.google.com/uc?export=download&id=1Vt0wpQjJ793EkdujfR5GYxsqma8Vtc2v",
        },
      ],
    },
    {
      title: "Introducing A.D.I",
      description:
        "See how A.D.I. transforms RAG systems for seamless, bi-directional user engagement",
      image: `https://miro.medium.com/v2/da:true/resize:fit:745/1*iBiNWW_SWyJcUUK3TMjpPw.gif`,
      linkLabel: "Read More",
      linkIcon: <FaMedium />,
      linkUrl:
        "https://medium.com/@adi93/the-augmented-delegation-interface-for-rag-revolutionizing-web-and-document-interaction-with-a-d-i-ccb7d60c5bfa",
      ctas: [
        {
          icon: <FaHandsClapping />,
          label: "Clap",
          link: "https://medium.com/@adi93/the-augmented-delegation-interface-for-rag-revolutionizing-web-and-document-interaction-with-a-d-i-ccb7d60c5bfa#claps",
        },
        {
          icon: <FaComment />,
          label: "Comment",
          link: "https://medium.com/@adi93/the-augmented-delegation-interface-for-rag-revolutionizing-web-and-document-interaction-with-a-d-i-ccb7d60c5bfa#comments",
        },
      ],
    },
    {
      title: "My Portfolio",
      description:
        "A showcase of my projects and skills across various domains and technologies",
      image: `https://opengraph.githubassets.com/${randomHash}/aditya30051993/my-portfolio`,
      linkLabel: "Find More",
      linkIcon: <FaGithub />,
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
      title: "Proposal Writing",
      description:
        "Comprehensive technical proposal ensuring scalable, reliable solutions with clear milestones",
      image: `https://s11.gifyu.com/images/SAqzi.gif`,
      linkLabel: "Read More",
      linkIcon: <FaGoogleDrive />,
      linkUrl:
        "https://docs.google.com/document/d/1xpxEqjVIDaqytwxPxVlGn0pwGvWDNopKh1q-k9IEhow/edit",
      ctas: [
        {
          icon: <FaCopy />,
          label: "Copy",
          link: "https://docs.google.com/document/d/1xpxEqjVIDaqytwxPxVlGn0pwGvWDNopKh1q-k9IEhow/copy",
        },
        {
          icon: <FaDownload />,
          label: "Download",
          link: "https://docs.google.com/document/d/1xpxEqjVIDaqytwxPxVlGn0pwGvWDNopKh1q-k9IEhow/export?format=pdf",
        },
      ],
    },
    {
      title: "Trade Assistant",
      description:
        "Real-time stock trading assistant taking decisions based on current market and portfolio",
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
            video={project.video}
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
