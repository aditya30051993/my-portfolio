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
        name: "App Development",
        icon: "📱",
        link: "https://developer.android.com/guide",
      },
      {
        name: "Chatbot Creation",
        icon: "🤖",
        link: "https://www.ibm.com/cloud/learn/chatbots-explained",
      },
      {
        name: "Technical Proposal",
        icon: "📄",
        link: "https://www.mindtools.com/pages/article/newTMC_00.htm",
      },
      {
        name: "Technical Documentation",
        icon: "📝",
        link: "https://www.techwalla.com/articles/how-to-write-technical-documentation",
      },
      {
        name: "Automation",
        icon: "⚙️",
        link: "https://www.ibm.com/cloud/automation",
      },
      {
        name: "Data Analysis",
        icon: "📊",
        link: "https://www.analyticsvidhya.com/blog/2021/05/a-comprehensive-guide-to-data-analysis/",
      },
      {
        name: "Cloud Architecture",
        icon: "☁️",
        link: "https://aws.amazon.com/architecture/",
      },
    ],
    Stacks: [
      { name: "React.js", icon: "⚛️", link: "https://reactjs.org/" },
      { name: "Flask", icon: "🐍", link: "https://flask.palletsprojects.com/" },
      { name: "Django", icon: "🐍", link: "https://www.djangoproject.com/" },
      { name: "FastAPI", icon: "🚀", link: "https://fastapi.tiangolo.com/" },
      { name: "Node.js", icon: "🌐", link: "https://nodejs.org/" },
      { name: "Flutter", icon: "📲", link: "https://flutter.dev/" },
      { name: "Express.js", icon: "🟩", link: "https://expressjs.com/" },
      { name: "GraphQL", icon: "📈", link: "https://graphql.org/" },
      { name: "RESTful APIs", icon: "🔗", link: "https://restfulapi.net/" },
    ],
    Tools: [
      { name: "Docker", icon: "🐋", link: "https://www.docker.com/" },
      { name: "Terraform", icon: "⚙️", link: "https://www.terraform.io/" },
      { name: "Kubernetes", icon: "☸️", link: "https://kubernetes.io/" },
      {
        name: "CI/CD Pipelines",
        icon: "🚀",
        link: "https://www.redhat.com/en/topics/devops/what-are-ci-cd-pipelines",
      },
      { name: "GCP", icon: "☁️", link: "https://cloud.google.com/" },
      { name: "AWS", icon: "☁️", link: "https://aws.amazon.com/" },
      { name: "ChatGPT", icon: "🧠", link: "https://openai.com/chatgpt" },
      { name: "Git", icon: "🐙", link: "https://git-scm.com/" },
      { name: "VSCode", icon: "🖥️", link: "https://code.visualstudio.com/" },
      { name: "Anaconda", icon: "🐍", link: "https://www.anaconda.com/" },
      { name: "Jupyter Notebook", icon: "📓", link: "https://jupyter.org/" },
      { name: "Matplotlib", icon: "📊", link: "https://matplotlib.org/" },
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
