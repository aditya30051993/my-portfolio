import React, { useEffect, useState } from "react";
import timelineData from "../data/timeline.json";

const MyTimeline = () => {
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    const sorted = [...timelineData].sort((a, b) => {
      const dateA = a.end === "Present" ? new Date() : new Date(a.end);
      const dateB = b.end === "Present" ? new Date() : new Date(b.end);
      return dateB - dateA;
    });
    setSortedData(sorted);
  }, []);

  return (
    <section className="timeline" id="timeline">
      <h2>📅 My Timeline</h2>
      <div className="timeline-card-container">
        {sortedData.map((entry, index) => (
          <div
            id={entry?.id && `timeline-${entry.id}`}
            className="timeline-card"
            key={index}
          >
            <div
              className={entry.type === "Work" ? "chip work" : "chip education"}
            >
              {entry.type}
            </div>
            <div className="timeline-card-details">
              <div className="card-logo">
                <img src={entry.logo} alt={`${entry.title} logo`} />
              </div>
              <div className="card-content">
                <h3>{entry.title}</h3>
                <h4>{entry.subtitle}</h4>
                <p>{entry.description}</p>
                <div className="timeline-dates">
                  {entry.start} - {entry.end}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyTimeline;
