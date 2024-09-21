import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';

const Main = () => {
  useEffect(() => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const currentTheme = prefersDarkScheme.matches ? "dark-mode" : "light-mode";

    document.body.classList.add(currentTheme);

    // Listen for changes in preference
    prefersDarkScheme.addEventListener('change', e => {
      document.body.classList.toggle("dark-mode", e.matches);
      document.body.classList.toggle("light-mode", !e.matches);
    });
  }, []);

  return <App />;
};

ReactDOM.render(<Main />, document.getElementById('root'));
