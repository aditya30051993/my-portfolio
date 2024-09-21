import React, { useState, useEffect, useRef } from "react";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Skills");
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabRefs = useRef({});

  const skillsData = {
    Skills: [
      { name: "Medical Expertise", icon: "⚕️", link: "https://www.who.int/" },
      {
        name: "Full-Stack Development",
        icon: "🔧",
        link: "https://www.freecodecamp.org/news/what-is-full-stack-development/",
      },
      {
        name: "Patient Management",
        icon: "👥",
        link: "https://www.healthit.gov/topic/scientific-initiatives/clinical-data-exchange/patient-management",
      },
      {
        name: "App Development",
        icon: "📱",
        link: "https://developer.android.com/guide",
      },
      {
        name: "Emergency Response",
        icon: "🚑",
        link: "https://www.ems.gov/",
      },
      {
        name: "Telemedicine",
        icon: "💻",
        link: "https://www.americantelemed.org/",
      },
      {
        name: "Clinical Diagnosis",
        icon: "🔍",
        link: "https://www.ncbi.nlm.nih.gov/books/NBK555886/",
      },
      {
        name: "Patient Assessment",
        icon: "🩺",
        link: "https://www.aamc.org/what-we-do/mission-areas/education/clinical-assessment",
      },
      {
        name: "Data Analysis",
        icon: "📊",
        link: "https://www.analyticsvidhya.com/blog/2021/05/a-comprehensive-guide-to-data-analysis/",
      },
      {
        name: "Medical Documentation",
        icon: "📝",
        link: "https://www.healthit.gov/topic/scientific-initiatives/clinical-data-exchange/medical-documentation",
      },
      {
        name: "Pharmacology",
        icon: "💊",
        link: "https://www.ncbi.nlm.nih.gov/books/NBK558962/",
      },
      {
        name: "Infection Control",
        icon: "🦠",
        link: "https://www.cdc.gov/infectioncontrol/index.html",
      },
    ],
    Stacks: [
      {
        name: "National Health Mission (NHM)",
        icon: "🏥",
        link: "https://nhm.gov.in/",
      },
      { name: "Flutter", icon: "📲", link: "https://flutter.dev/" },
      { name: "FastAPI", icon: "🚀", link: "https://fastapi.tiangolo.com/" },
      { name: "React.js", icon: "⚛️", link: "https://reactjs.org/" },
      {
        name: "Centers for Disease Control (CDC)",
        icon: "🦠",
        link: "https://www.cdc.gov/",
      },
      { name: "Flask", icon: "🐍", link: "https://flask.palletsprojects.com/" },
      { name: "Node.js", icon: "🌐", link: "https://nodejs.org/" },
      { name: "Express.js", icon: "🟩", link: "https://expressjs.com/" },
      {
        name: "FDA Regulations",
        icon: "📜",
        link: "https://www.fda.gov/",
      },
      {
        name: "Clinical Decision Support Systems (CDSS)",
        icon: "📊",
        link: "https://www.ncbi.nlm.nih.gov/books/NBK543516/",
      },
      { name: "RESTful APIs", icon: "🔗", link: "https://restfulapi.net/" },
      {
        name: "Telemedicine Practice Guidelines",
        icon: "💬",
        link: "https://esanjeevani.mohfw.gov.in/assets/guidelines/Telemedicine_Practice_Guidelines.pdf",
      },
    ],
    Tools: [
      {
        name: "Electronic Health Records (EHR)",
        icon: "🗂️",
        link: "https://www.healthit.gov/topic/scientific-initiatives/clinical-data-exchange/ehr",
      },
      { name: "ChatGPT", icon: "🧠", link: "https://openai.com/chatgpt" },
      { name: "Git", icon: "🐙", link: "https://git-scm.com/" },
      { name: "VSCode", icon: "🖥️", link: "https://code.visualstudio.com/" },
      {
        name: "Health Management Systems (HMIS)",
        icon: "📊",
        link: "https://www.who.int/health-topics/health-information-systems#tab=tab_1",
      },
      { name: "Docker", icon: "🐋", link: "https://www.docker.com/" },
      { name: "Terraform", icon: "⚙️", link: "https://www.terraform.io/" },
      {
        name: "CI/CD Pipelines",
        icon: "🚀",
        link: "https://www.redhat.com/en/topics/devops/what-are-ci-cd-pipelines",
      },
      {
        name: "Laboratory Information Systems (LIS)",
        icon: "⚗️",
        link: "https://www.healthit.gov/topic/scientific-initiatives/clinical-data-exchange/laboratory-information-systems",
      },
      {
        name: "Vital Signs Monitors",
        icon: "📈",
        link: "https://www.ncbi.nlm.nih.gov/books/NBK470429/",
      },
      { name: "GCP", icon: "☁️", link: "https://cloud.google.com/" },
      { name: "AWS", icon: "☁️", link: "https://aws.amazon.com/" },
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
      <h2>🛠️ My Toolkit</h2>
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
          <a
            key={name}
            href={link}
            className="card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">{icon}</span>
            <span className="label">{name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Skills;
