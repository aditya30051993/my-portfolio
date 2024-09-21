import React from 'react';
import LinkCard from './LinkCard';

const Links = () => {
  const linkData = [
    {
      url: 'https://www.upwork.com/freelancers/~01c2bfda01cedbb871',
      title: 'Upwork',
      description: 'Find my professional profile on Upwork, where I offer my services.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Upwork-logo.svg/640px-Upwork-logo.svg.png',
    },
    {
      url: 'https://medium.com/@adi93',
      title: 'Medium',
      description: 'Read my articles on Medium where I write about tech in health and more.',
      image: 'https://miro.medium.com/v2/resize:fit:1400/1*psYl0y9DUzZWtHzFJLIvTw.png',
    },
    {
      url: 'https://www.linkedin.com/in/adi0593/',
      title: 'LinkedIn',
      description: 'Connect with me on LinkedIn for professional networking.',
      image: 'https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg',
    },
    {
      url: 'https://github.com/aditya30051993',
      title: 'GitHub',
      description: 'Explore my repositories and contributions on GitHub.',
      image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    }
  ];

  return (
    <section className="links" id="links">
      <h2>You can also...</h2>
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
