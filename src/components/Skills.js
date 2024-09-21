import React, { useState, useEffect, useRef } from "react";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Skills");
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabRefs = useRef({});

  const skillsData = {
    Skills: [
      { name: "Full-Stack Development", icon: "🔧", link: "#" },
      { name: "App Development", icon: "📱", link: "#" },
      { name: "Chatbot Creation", icon: "🤖", link: "#" },
    ],
    Stacks: [
      { name: "React.js", icon: "⚛️", link: "#" },
      { name: "Flask", icon: "🐍", link: "#" },
      { name: "Python", icon: "🐍", link: "#" },
      { name: "JavaScript", icon: "💻", link: "#" },
    ],
    Tools: [
      { name: "Docker", icon: "🐋", link: "#" },
      { name: "Terraform", icon: "⚙️", link: "#" },
    ],
  };

  useEffect(() => {
    const tab = tabRefs.current[activeTab];
    if (tab) {
      setIndicatorStyle({
        width: `${tab.offsetWidth - 25}px`,
        left: `${tab.offsetLeft}px`,
      });
    }
  }, [activeTab]);

  return (
    <section className="skills" id="skills">
      <div className="tabs">
        {Object.keys(skillsData).map((tab) => (
          <button
            key={tab}
            ref={(el) => (tabRefs.current[tab] = el)}
            className={`tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
        <div className="active-tab-indicator" style={indicatorStyle}>
          {activeTab}
        </div>
      </div>
      <div className="grid">
        {skillsData[activeTab].map(({ name, icon, link }) => (
          <a key={name} href={link} className="card">
            <span className="icon">{icon}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Skills;
