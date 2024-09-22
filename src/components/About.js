import React from "react";
import aboutData from "../data/about.json";

const About = () => (
  <section className="about" id="about">
    <h2>{aboutData.greeting}</h2>
    <p>{aboutData.description}</p>
    
    <br />
    <p dangerouslySetInnerHTML={{ __html: aboutData.education }} />
    
    <br />
    <p dangerouslySetInnerHTML={{ __html: aboutData.beliefAndGoal }} />
  </section>
);

export default About;
