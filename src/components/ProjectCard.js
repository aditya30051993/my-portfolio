import React from "react";

const ProjectCard = ({
  title,
  description,
  image,
  video,
  linkLabel,
  linkIcon,
  linkUrl,
  ctas,
}) => {
  return (
    <div className="project-card">
      <div className="project-image">
        {(image && <img src={image} alt={title} />) ||
          (video && (
            <iframe src={video} title={title} allow="autoplay"></iframe>
          ))}
      </div>
      <div className="project-details">
        <h3>{title}</h3>
        <p>
          {description}&nbsp;
          <a
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            {linkLabel}&nbsp;{linkIcon}
          </a>
        </p>
        <div className="project-links">
          {ctas.map((cta, index) => (
            <a
              key={index}
              href={cta.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {cta.icon} {cta.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
