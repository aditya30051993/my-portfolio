import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaInfoCircle,
  FaLaptopCode,
  FaLink,
  FaProjectDiagram,
  FaAngleRight,
  FaChevronDown,
  FaChevronUp,
  FaCalendar,
} from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(false);
  const [hideTimeout, setHideTimeout] = useState(null);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(true);
      resetHideTimeout();
      const sections = document.querySelectorAll("section");
      const scrollPos =
        window.pageYOffset || document.documentElement.scrollTop;

      sections.forEach((section, i) => {
        const offsetTop = section.offsetTop;
        const offsetBottom = offsetTop + section.offsetHeight;

        if (scrollPos >= offsetTop - 50 && scrollPos < offsetBottom - 50) {
          setActiveSection(section.getAttribute("id"));
          if (i === sections.length - 1) setAtEnd(true);
          else setAtEnd(false);
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
    { id: "projects", label: "Projects", icon: <FaProjectDiagram /> },
    { id: "timeline", label: "Timeline", icon: <FaCalendar /> },
    { id: "links", label: "Links", icon: <FaLink /> },
    { id: "contact", label: "Contacts", icon: <FaPhoneFlip /> },
  ];

  const handleNextSection = () => {
    const sections = Array.from(document.querySelectorAll("section"));
    const currentIndex = sections.findIndex(
      (section) => section.getAttribute("id") === activeSection
    );

    if (currentIndex >= 0 && currentIndex < sections.length - 1) {
      const nextSection = sections[currentIndex + 1];
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else if (atEnd) {
      handleClick("hero");
    }
  };

  return (
    <>
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
      <div className={`btmnav`} onClick={handleNextSection}>
        {atEnd ? (
          <FaChevronUp className="next-section-icon" />
        ) : (
          <FaChevronDown className="next-section-icon" />
        )}
      </div>
    </>
  );
};

export default Sidebar;
