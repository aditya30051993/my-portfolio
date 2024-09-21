import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from './components/Hero';
import Profile from './components/Profile';
import About from './components/About';
import Skills from './components/Skills';
import Links from './components/Links';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Dr. Aditya Kumar Gupta | Developer</title>
        <meta name="description" content="Dr. Aditya Kumar Gupta's portfolio showcasing projects, skills, and professional experience." />
        <meta name="keywords" content="developer, software engineer, projects, Upwork, GitHub, LinkedIn" />
      </Helmet>
      <Sidebar />
      <Hero />
      <Profile />
      <About />
      <Skills />
      <Links />
      <Projects />
      <footer>
        <p>&copy; 2024 Dr. Aditya Kumar Gupta</p>
        <p>Email: <a href="mailto:aditya30051993@gmail.com">aditya30051993@gmail.com</a></p>
      </footer>
    </div>
  );
}

export default App;
