import React from "react";
import LinkCard from "./LinkCard";
import linkData from "../data/about.json"; // Adjust path as necessary

const Links = () => {
  return (
    <section className="links" id="links">
      <h2>😎 You Can Also...</h2>
      <div className="link-card-container">
        {Object.values(linkData.socialLinks).map((link, index) => (
          <LinkCard
            key={index}
            url={link.url}
            title={link.title}
            description={link.description}
            image={link.image}
            strong={link.strong}
          />
        ))}
      </div>
    </section>
  );
};

export default Links;
