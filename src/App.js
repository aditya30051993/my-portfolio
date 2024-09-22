import React from "react";
import { Helmet } from "react-helmet";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Links from "./components/Links";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Sidebar from "./components/Sidebar";
import ThemeToggle from "./components/ThemeToggle";
import Footer from "./components/Footer";
import "./App.css";
import "./Sidebar.css";
import "./Sections.css";
import "./Footer.css";
import "./About.css";
import "./Skills.css";
import "./Timeline.css";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Dr. Aditya Kumar Gupta | Developer</title>
        <meta
          name="description"
          content="Dr. Aditya Kumar Gupta's portfolio showcasing projects, skills, and professional experience."
        />
        <meta
          name="keywords"
          content="developer, software engineer, projects, Upwork, GitHub, LinkedIn"
        />
      </Helmet>
      <ThemeToggle />
      <Sidebar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Links />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
