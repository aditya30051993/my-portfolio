import React, { useState, useEffect } from 'react';
import { FaHome, FaUser, FaInfoCircle, FaLaptopCode, FaLink, FaProjectDiagram } from 'react-icons/fa';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('');

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

  const handleClick = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'hero', label: 'Home', icon: <FaHome /> },
    { id: 'profile', label: 'Profile', icon: <FaUser /> },
    { id: 'about', label: 'About', icon: <FaInfoCircle /> },
    { id: 'skills', label: 'Skills', icon: <FaLaptopCode /> },
    { id: 'links', label: 'Links', icon: <FaLink /> },
    { id: 'projects', label: 'Projects', icon: <FaProjectDiagram /> },
  ];

  return (
    <div className="sidebar">
      <ul>
        {navItems.map((item) => (
          <li key={item.id} className={activeSection === item.id ? 'active' : ''}>
            <a href={`#${item.id}`} onClick={() => handleClick(item.id)}>
              {item.icon}
              <span className="label">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
