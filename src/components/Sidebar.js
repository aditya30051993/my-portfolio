import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaInfoCircle,
  FaLaptopCode,
  FaLink,
  FaProjectDiagram,
  FaAngleRight,
} from "react-icons/fa";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [hideTimeout, setHideTimeout] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(true);
      resetHideTimeout();
      const sections = document.querySelectorAll("section");
      const scrollPos =
        window.pageYOffset || document.documentElement.scrollTop;

      sections.forEach((section) => {
        const offsetTop = section.offsetTop;
        const offsetBottom = offsetTop + section.offsetHeight;

        if (scrollPos >= offsetTop - 50 && scrollPos < offsetBottom - 50) {
          setActiveSection(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(hideTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hideTimeout]);

  const handleClick = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    resetHideTimeout();
  };

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
    resetHideTimeout();
  };

  const resetHideTimeout = () => {
    if (hideTimeout) clearTimeout(hideTimeout);
    setHideTimeout(setTimeout(() => setIsVisible(false), 2000));
  };

  const navItems = [
    { id: "hero", label: "Home", icon: <FaHome /> },
    { id: "about", label: "About", icon: <FaInfoCircle /> },
    { id: "skills", label: "Skills", icon: <FaLaptopCode /> },
    { id: "links", label: "Links", icon: <FaLink /> },
    { id: "projects", label: "Projects", icon: <FaProjectDiagram /> },
  ];

  return (
    <div className={`sidebar ${isVisible ? "" : "collapsed"}`}>
      <div className="toggle-button" onClick={toggleSidebar}>
        {isVisible ? " " : <FaAngleRight />}
      </div>
      {isVisible && (
        <ul>
          {navItems.map((item) => (
            <li
              key={item.id}
              className={activeSection === item.id ? "active" : ""}
            >
              <a href={`#${item.id}`} onClick={() => handleClick(item.id)}>
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
