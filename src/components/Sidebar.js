import React, { useState, useEffect } from 'react';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('');

  // Handles scroll event and sets active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPos = window.pageYOffset || document.documentElement.scrollTop;

      sections.forEach((section) => {
        const offsetTop = section.offsetTop;
        const offsetBottom = offsetTop + section.offsetHeight;

        if (scrollPos >= offsetTop - 50 && scrollPos < offsetBottom - 50) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth scroll when clicking a sidebar item
  const handleClick = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="sidebar">
      <ul>
        <li className={activeSection === 'hero' ? 'active' : ''}>
          <a href="#hero" onClick={() => handleClick('hero')}>Home</a>
        </li>
        <li className={activeSection === 'profile' ? 'active' : ''}>
          <a href="#profile" onClick={() => handleClick('profile')}>Profile</a>
        </li>
        <li className={activeSection === 'about' ? 'active' : ''}>
          <a href="#about" onClick={() => handleClick('about')}>About</a>
        </li>
        <li className={activeSection === 'skills' ? 'active' : ''}>
          <a href="#skills" onClick={() => handleClick('skills')}>Skills</a>
        </li>
        <li className={activeSection === 'links' ? 'active' : ''}>
          <a href="#links" onClick={() => handleClick('links')}>links</a>
        </li>
        <li className={activeSection === 'projects' ? 'active' : ''}>
          <a href="#projects" onClick={() => handleClick('projects')}>Projects</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
