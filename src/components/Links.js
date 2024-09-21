import React from "react";
import LinkCard from "./LinkCard";

const Links = () => {
  const linkData = [
    {
      url: "https://www.upwork.com/freelancers/~01c2bfda01cedbb871",
      title: "Upwork",
      description: "Find my work on Upwork, where I offer my skills.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Upwork-logo.svg/640px-Upwork-logo.svg.png",
    },
    {
      url: "https://medium.com/@adi93",
      title: "Medium",
      description: "Read on Medium where I write about tech.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Medium_%28website%29_logo.svg/640px-Medium_%28website%29_logo.svg.png",
    },
    {
      url: "https://github.com/aditya30051993",
      title: "GitHub",
      description: "Explore my projects and code on GitHub.",
      image:
        "https://static.wikia.nocookie.net/windows/images/0/01/GitHub_logo_2013.png",
    },
    {
      url: "https://www.linkedin.com/in/adi0593/",
      title: "LinkedIn",
      description: "Join me on LinkedIn for work connections.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/640px-LinkedIn_Logo.svg.png",
    },
  ];

  return (
    <section className="links" id="links">
      <h2>😎 You Can Also...</h2>
      <div className="link-card-container">
        {linkData.map((link, index) => (
          <LinkCard
            key={index}
            url={link.url}
            title={link.title}
            description={link.description}
            image={link.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Links;
