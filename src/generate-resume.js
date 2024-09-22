const fs = require("fs");
const PDFDocument = require("pdfkit");

const aboutData = require("./data/about.json");
const projectsData = require("./data/projects.json");
const skillsData = require("./data/skills.json");
const timelineData = require("./data/timeline.json");
const packageData = require("../package.json");

function sanitizeText(text) {
  return text
    ?.replace(/<\/?[^>]+(>|$)/g, "") // Remove HTML tags
    .replace(/\s+/g, " ") // Replace newlines and multiple spaces with a single space
    .replace(/[^\w\s.,-:;!@#$%^&*()–_+=<>?\/|`~"']+/g, "") // Remove unwanted special characters
    .trim(); // Trim leading/trailing spaces
}

function createResume() {
  const doc = new PDFDocument();
  const stream = fs.createWriteStream("../public/resume.pdf"); // Updated path
  doc.pipe(stream);

  // Center aligned Name
  doc
    .font("Times-Bold")
    .fontSize(25)
    .text(sanitizeText(aboutData.name), { align: "center" });
  doc.fontSize(5).font("Times-Roman").moveDown();
  const pageWidth = doc.page.width; // Get the page width

  const aboutInfo = `${sanitizeText(aboutData.email)} | ${sanitizeText(
    aboutData.phone
  )} | Website | LinkedIn | Upwork | GitHub | Medium`;
  const textWidth = doc.fontSize(10).widthOfString(aboutInfo);
  const xOffset = (pageWidth - textWidth) / 2;

  doc
    .text(
      `${sanitizeText(aboutData.email)} | ${sanitizeText(aboutData.phone)} | `,
      xOffset,
      null,
      {
        continued: true,
      }
    )
    .fillColor("blue")
    .text("Website | ", {
      link: packageData.homepage,
      continued: true,
    })
    .text("LinkedIn | ", {
      link: aboutData.socialLinks.linkedin.url,
      continued: true,
    })
    .text("Upwork | ", {
      link: aboutData.socialLinks.upwork.url,
      continued: true,
    })
    .text("GitHub | ", {
      link: aboutData.socialLinks.github.url,
      continued: true,
    })
    .text("Medium", {
      link: aboutData.socialLinks.medium.url,
    })
    .fillColor("black");

  doc.fontSize(16).moveDown();

  // Summary Section
  doc
    .fontSize(16)
    .font("Times-Bold")
    .text("SUMMARY", 50, null, { align: "left" });
  doc.fontSize(0).moveDown();
  doc.moveTo(50, doc.y).lineTo(550, doc.y).stroke();
  const description = sanitizeText(aboutData.description);
  const education = sanitizeText(aboutData.education);
  const beliefAndGoal = sanitizeText(aboutData.beliefAndGoal);
  doc.fontSize(5).moveDown();
  doc
    .font("Times-Roman")
    .fontSize(10)
    .text(description, { continued: true, align: "left" });
  doc
    .font("Times-Roman")
    .fontSize(10)
    .text(` ${education}`, { continued: true });
  doc.font("Times-Roman").fontSize(10).text(` ${beliefAndGoal}`);

  doc.fontSize(10).moveDown();

  // Experience Section
  doc
    .fontSize(16)
    .font("Times-Bold")
    .text("EXPERIENCE", 50, null, { align: "left" });
  doc.fontSize(0).moveDown();
  doc.moveTo(50, doc.y).lineTo(550, doc.y).stroke();

  const tfx = (a, b) => {
    const dateA = a.end === "Present" ? new Date() : new Date(a.end);
    const dateB = b.end === "Present" ? new Date() : new Date(b.end);
    return dateB - dateA;
  };

  timelineData.sort(tfx).forEach((item) => {
    if (item.type === "Work") {
      const company = sanitizeText(item.title);
      const role = sanitizeText(item.subtitle);
      const description = sanitizeText(item.description);
      const dates = `${item.start} - ${item.end}`;
      doc.font("Times-Bold").fontSize(5).moveDown().fontSize(12).text(role);
      doc.fontSize(10).text(company, { continued: true, align: "left" });
      doc.text(dates, { align: "right" });
      doc.fontSize(0).moveDown();
      doc.font("Times-Roman").fontSize(10).text(description, { align: "left" });
    }
  });

  doc.moveDown();

  // Projects Section
  doc
    .fontSize(16)
    .font("Times-Bold")
    .text("PROJECTS", 50, null, { align: "left" });
  doc.fontSize(0).moveDown();
  doc.moveTo(50, doc.y).lineTo(550, doc.y).stroke();

  projectsData.forEach((project) => {
    const title = sanitizeText(project.title);
    const description = sanitizeText(project.description);
    const linkLabel = sanitizeText(project.linkLabel);
    const linkUrl = sanitizeText(project.linkUrl);
    doc
      .font("Times-Bold")
      .fontSize(5)
      .moveDown()
      .fontSize(12)
      .text(title, { continued: true, align: "left" });
    doc
      .font("Times-Roman")
      .fontSize(10)
      .fillColor("blue")
      .text(` (${linkLabel.toLowerCase()})`, { link: linkUrl })
      .fillColor("black");
    doc.fontSize(2).moveDown();
    doc.font("Times-Roman").fontSize(10).text(description);
  });

  doc.moveDown();

  // Education Section
  doc
    .fontSize(16)
    .font("Times-Bold")
    .text("EDUCATION", 50, null, { align: "left" });
  doc.fontSize(0).moveDown();
  doc.moveTo(50, doc.y).lineTo(550, doc.y).stroke();

  timelineData.sort(tfx).forEach((item) => {
    if (item.type === "Education") {
      const company = sanitizeText(item.title);
      const role = sanitizeText(item.subtitle);
      const description = sanitizeText(item.description);
      const dates = `${item.start} - ${item.end}`;
      doc.font("Times-Bold").fontSize(5).moveDown().fontSize(12).text(role);
      doc.fontSize(10).text(company, { continued: true, align: "left" });
      doc.text(dates, { align: "right" });
      doc.fontSize(0).moveDown();
      doc.font("Times-Roman").fontSize(10).text(description, { align: "left" });
    }
  });

  doc.moveDown();

  // Skills Section
  doc
    .fontSize(16)
    .font("Times-Bold")
    .text("SKILLS", 50, null, { align: "left" });
  doc.fontSize(0).moveDown();
  doc.moveTo(50, doc.y).lineTo(550, doc.y).stroke();
  doc.fontSize(7).moveDown();

  Object.entries(skillsData).forEach(([skill, skills]) => {
    doc
      .font("Times-Bold")
      .fontSize(12)
      .text(`${sanitizeText(skill)}: `, { continued: true });

    doc
      .font("Times-Roman")
      .fontSize(10)
      .text(`${sanitizeText(skills.map(({ name }) => name).join(", "))}`);
    doc.fontSize(3).moveDown();
  });

  doc.moveDown();

  doc.end();
}

createResume();
