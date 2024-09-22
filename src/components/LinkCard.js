import React from "react";

const LinkCard = ({ url, title, description, image, strong }) => (
  <div className="link-card">
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="card-content">
        <div className="card-image">
          <div className="image-wrapper">
            <img src={image} alt={title} />
          </div>
        </div>
        <div className="card-details">
          <p>
            <strong>{strong}</strong>
            {description}
          </p>
        </div>
      </div>
    </a>
  </div>
);

export default LinkCard;
