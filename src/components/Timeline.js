import React from "react";

const MyTimeline = () => {
  const timelineData = [
    {
      type: "Education",
      logo: "https://upload.wikimedia.org/wikipedia/en/7/7e/University_College_of_Medical_Sciences_Logo.jpg",
      title: "University College of Medical Sciences",
      subtitle: "Bachelor of Medicine, Bachelor of Surgery - MBBS",
      description: "",
      start: "Aug, 2011",
      end: "Dec, 2016",
      id: "mbbs",
    },
    {
      type: "Work",
      logo: "https://rgssh.co.in/wp-content/uploads/2023/04/rgssh-logo.png",
      title: "Rajiv Gandhi Super-specialty Hospital (RGSSH)",
      subtitle: "Resident Doctor",
      description:
        "Management of patients in the coronary care unit of the cardiology department.",
      start: "Dec, 2017",
      end: "Jan, 2019",
    },
    {
      type: "Work",
      logo: "https://tiharprisons.delhi.gov.in/sites/default/files/Tiharprisons/logo/tiharprisons-logo.jpg",
      title: "Central Jail Tihar",
      subtitle: "Resident Doctor",
      description:
        "Maintained an up-to-date record of patients including critical information.",
      start: "Sep, 2019",
      end: "Aug, 2020",
    },
    {
      type: "Work",
      logo: "http://www.smcshah.in/images/logo.png",
      title: "Autonomous State Medical College, Shahjahanpur",
      subtitle: "Resident Doctor (Casualty)",
      description:
        "Management of acute medical conditions and interdepartmental collaboration.",
      start: "Apr, 2021",
      end: "Dec, 2022",
    },
    {
      type: "Work",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQG0Im5f_KAMng/company-logo_200_200/company-logo_200_200/0/1692794533758?e=2147483647&v=beta&t=2GGe2I5vcSl7pSig9HaA92FvZ2VIwdHBqbIr51YYRGw",
      title: "Krishna Hospital Shahjahanpur",
      subtitle: "Emergency Medical Officer",
      description:
        "Providing medical care to hospitalized patients and collaborating with hospital teams.",
      start: "Jun, 2023",
      end: "Jun, 2024",
    },
    {
      type: "Work",
      logo: "https://javatpoint-images.s3.eu-north-1.amazonaws.com/fullformpages/images/uphc-full-form.png",
      title: "UPHC Katiyatola",
      subtitle: "Medical Officer In-charge",
      description:
        "Diagnosing and treating a wide range of internal medical conditions and implementing various government health schemes.",
      start: "Jan, 2023",
      end: "Present",
    },
    {
      type: "Work",
      logo: "https://media.licdn.com/dms/image/D4D12AQGl2YeTZzDrtA/article-cover_image-shrink_600_2000/0/1698596383423?e=2147483647&v=beta&t=M_grkZOYVoB1Prt94UeAkjcSU6E-uWLDXCJ4VskIim8",
      title: "Freelance Fullstack Engineer",
      subtitle: "Self-Employed",
      description:
        "Offering fullstack development services, managing projects from start to finish.",
      start: "Dec, 2022",
      end: "Present",
    },
    {
      type: "Education",
      logo: "https://media.licdn.com/dms/image/v2/D4E12AQE_C8yXzQaq8g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1723646614865?e=2147483647&v=beta&t=bbGH5mgWbagjMqGNJfAn8t52HXv50xkiJiWngKgXXZo",
      title: "Self-Learner – Fullstack Development",
      subtitle: "Fullstack Web Development",
      description:
        "Self-taught in fullstack web development, mastering frontend, backend, and DevOps technologies.",
      start: "Feb, 2022",
      end: "Present",
    },
    {
      type: "Education",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Android_open_source_project.png",
      title: "Self-Learner – Mobile Development",
      subtitle: "Flutter App Development",
      description:
        "Learned to build mobile applications using Flutter, focusing on responsive design and cross-platform functionality.",
      start: "Oct, 2021",
      end: "Jan, 2022",
    },
  ];

  const sortedData = [...timelineData].sort((a, b) => {
    const dateA = a.end === "Present" ? new Date() : new Date(a.end);
    const dateB = b.end === "Present" ? new Date() : new Date(b.end);

    return dateB - dateA;
  });

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
