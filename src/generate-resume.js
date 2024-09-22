const fs = require('fs');
const PDFDocument = require('pdfkit');

const aboutData = require('./data/about.json');
const projectsData = require('./data/projects.json');
const skillsData = require('./data/skills.json');
const timelineData = require('./data/timeline.json');

function sanitizeText(text) {
    return text?.replace(/[^\w\s.,-:;!@#$%^&*()_+=<>?\/|`~"']+/g, '');
}

function createResume() {
    const doc = new PDFDocument();
    const stream = fs.createWriteStream('../public/resume.pdf');
    doc.pipe(stream);

    // Center aligned Name
    doc.fontSize(25).text(sanitizeText(aboutData.name), { align: 'center' });
    
    // Center aligned Subtitle with clickable links
    const subtitle = [
        `Email: ${sanitizeText(aboutData.email)}`,
        `Phone: ${sanitizeText(aboutData.phone)}`,
        `LinkedIn: ${sanitizeText(aboutData.socialLinks.linkedin.url)}`,
        `GitHub: ${sanitizeText(aboutData.socialLinks.github.url)}`,
        `Medium: ${sanitizeText(aboutData.socialLinks.medium.url)}`
    ];
    
    doc.moveDown().fontSize(12).text(subtitle.join(' | '), {
        align: 'center',
        link: [
            aboutData.socialLinks.linkedin.url,
            aboutData.socialLinks.github.url,
            aboutData.socialLinks.medium.url
        ]
    });

    doc.moveDown();

    // Experience Section
    doc.fontSize(16).text('EXPERIENCE', { align: 'left', underline: true });
    doc.moveDown();
    doc.moveTo(50, doc.y).lineTo(550, doc.y).stroke();

    timelineData.forEach(item => {
        if (item.type === 'Work') {
            const title = sanitizeText(item.title);
            const company = sanitizeText(item.subtitle);
            const dates = `${item.start} - ${item.end}`;
            doc.moveDown().fontSize(12).text(`${title}`, { continued: true });
            doc.text(` ${company} : ${dates}`, { align: 'right' });
        }
    });

    doc.moveDown();

    // Education Section
    doc.fontSize(16).text('EDUCATION', { align: 'left', underline: true });
    doc.moveDown();
    doc.moveTo(50, doc.y).lineTo(550, doc.y).stroke();

    timelineData.forEach(item => {
        if (item.type === 'Education') {
            const title = sanitizeText(item.title);
            const institute = sanitizeText(item.subtitle);
            const dates = `${item.start} - ${item.end}`;
            doc.moveDown().fontSize(12).text(`${title}`, { continued: true });
            doc.text(` ${institute} : ${dates}`, { align: 'right' });
        }
    });

    doc.moveDown();

    // Projects Section
    doc.fontSize(16).text('PROJECTS', { align: 'left', underline: true });
    projectsData.forEach(project => {
        const linkUrl = project.linkUrl ? sanitizeText(project.linkUrl) : 'N/A';
        doc.moveDown().fontSize(12).text(`${sanitizeText(project.title)}: ${sanitizeText(project.description)} (Link: ${linkUrl})`);
    });

    doc.moveDown();

    // Skills Section
    doc.fontSize(16).text('SKILLS', { align: 'left', underline: true });
    skillsData.Skills.forEach(skill => {
        doc.moveDown().fontSize(12).text(`• ${sanitizeText(skill.name)}`);
    });

    doc.moveDown();
    
    // Additional Information Section
    doc.fontSize(12).text('References available upon request.');

    doc.end();
}

createResume();
