import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Template2 = ({ resumeData }) => {
  const { fullName, jobTitle, email, phone, address, summary, skills, experience, education, achievements } = resumeData;


  const generatePDF = (resumeData) => {
    const { fullName, jobTitle, email, phone, address, summary, skills, experience, education, achievements } = resumeData;
    
    const pdf = new jsPDF();
    let yPos = 20;
  
    // Helper function to add text with word wrap
    const addWrappedText = (text, x, y, maxWidth, fontSize = 12) => {
      pdf.setFontSize(fontSize);
      const lines = pdf.splitTextToSize(text, maxWidth);
      pdf.text(lines, x, y);
      return y + (lines.length * fontSize * 0.5);
    };
  
    // Header
    pdf.setFontSize(24);
    pdf.setFont('helvetica', 'bold');
    pdf.text(fullName, 20, yPos);
    yPos += 10;
  
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'normal');
    pdf.text(jobTitle, 20, yPos);
    yPos += 7;
  
    pdf.setFontSize(10);
    pdf.text(`${email} | ${phone} | ${address}`, 20, yPos);
    yPos += 15;
  
    // Professional Summary
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text("Professional Summary", 20, yPos);
    yPos += 7;
    yPos = addWrappedText(summary, 20, yPos, 170);
    yPos += 10;
  
    // Two-column section
    const leftColumnX = 20;
    const rightColumnX = 110;
    let leftColumnY = yPos;
    let rightColumnY = yPos;
  
    // Left Column
    // Skills
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text("Skills", leftColumnX, leftColumnY);
    leftColumnY += 7;
    skills.forEach(skill => {
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      pdf.text(`• ${skill}`, leftColumnX, leftColumnY);
      leftColumnY += 5;
    });
    leftColumnY += 10;
  
    // Education
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text("Education", leftColumnX, leftColumnY);
    leftColumnY += 7;
    education.forEach(edu => {
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.text(edu.degree, leftColumnX, leftColumnY);
      leftColumnY += 5;
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      pdf.text(edu.institution, leftColumnX, leftColumnY);
      leftColumnY += 5;
      pdf.text(edu.graduationDate, leftColumnX, leftColumnY);
      leftColumnY += 10;
    });
  
    // Achievements
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text("Achievements", leftColumnX, leftColumnY);
    leftColumnY += 7;
    achievements.forEach(achievement => {
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      leftColumnY = addWrappedText(`• ${achievement}`, leftColumnX, leftColumnY, 80);
      leftColumnY += 5;
    });
  
    // Right Column
    // Professional Experience
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text("Professional Experience", rightColumnX, rightColumnY);
    rightColumnY += 7;
    experience.forEach(exp => {
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.text(exp.title, rightColumnX, rightColumnY);
      rightColumnY += 5;
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      pdf.text(exp.company, rightColumnX, rightColumnY);
      rightColumnY += 5;
      pdf.text(`${exp.startDate} - ${exp.endDate}`, rightColumnX, rightColumnY);
      rightColumnY += 5;
      rightColumnY = addWrappedText(exp.description, rightColumnX, rightColumnY, 80);
      rightColumnY += 10;
    });
  
    pdf.save('resume_template2.pdf');
  };

  return (
    <div>
    <button onClick={() => generatePDF(resumeData)}>Download PDF</button>

    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.name}>{fullName}</h1>
        <p style={styles.jobTitle}>{jobTitle}</p>
        <div style={styles.contactInfo}>
          <p>{email} | {phone} | {address}</p>
        </div>
      </header>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Professional Summary</h2>
        <p style={styles.summary}>{summary}</p>
      </section>

      <div style={styles.twoColumnSection}>
        <section style={styles.leftColumn}>
          <h2 style={styles.sectionTitle}>Skills</h2>
          <ul style={styles.skillsList}>
            {skills.map((skill, index) => <li key={index} style={styles.skillItem}>{skill}</li>)}
          </ul>

          <h2 style={styles.sectionTitle}>Education</h2>
          {education.map((edu, index) => (
            <div key={index} style={styles.educationItem}>
              <h3 style={styles.degree}>{edu.degree}</h3>
              <p style={styles.institution}>{edu.institution}</p>
              <p style={styles.graduationDate}>{edu.graduationDate}</p>
            </div>
          ))}

          <h2 style={styles.sectionTitle}>Achievements</h2>
          <ul style={styles.achievementsList}>
            {achievements.map((achievement, index) => (
              <li key={index} style={styles.achievementItem}>{achievement}</li>
            ))}
          </ul>
        </section>

        <section style={styles.rightColumn}>
          <h2 style={styles.sectionTitle}>Professional Experience</h2>
          {experience.map((exp, index) => (
            <div key={index} style={styles.experienceItem}>
              <h3 style={styles.experienceTitle}>{exp.title}</h3>
              <p style={styles.companyName}>{exp.company}</p>
              <p style={styles.datePeriod}>{exp.startDate} - {exp.endDate}</p>
              <p style={styles.description}>{exp.description}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Calibri, sans-serif',
    lineHeight: '1.6',
    color: '#333',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fff',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  name: {
    fontSize: '32px',
    fontWeight: 'bold',
    margin: '0',
    color: '#2c3e50',
  },
  jobTitle: {
    fontSize: '18px',
    color: '#34495e',
    margin: '5px 0',
  },
  contactInfo: {
    fontSize: '14px',
    margin: '10px 0',
  },
  section: {
    marginBottom: '20px',
  },
  twoColumnSection: {
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
  },
  leftColumn: {
    flex: '1',
  },
  rightColumn: {
    flex: '2',
  },
  sectionTitle: {
    fontSize: '20px',
    color: '#2c3e50',
    borderBottom: '2px solid #3498db',
    paddingBottom: '5px',
    marginBottom: '15px',
  },
  summary: {
    marginBottom: '20px',
  },
  skillsList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  skillItem: {
    margin: '0 0 5px 0',
    fontSize: '14px',
  },
  experienceItem: {
    marginBottom: '20px',
  },
  experienceTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '0',
    color: '#34495e',
  },
  companyName: {
    fontSize: '16px',
    margin: '5px 0',
  },
  datePeriod: {
    fontSize: '14px',
    color: '#7f8c8d',
    fontStyle: 'italic',
    margin: '5px 0',
  },
  description: {
    fontSize: '14px',
    margin: '10px 0',
  },
  educationItem: {
    marginBottom: '15px',
  },
  degree: {
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '0',
    color: '#34495e',
  },
  institution: {
    fontSize: '14px',
    margin: '5px 0',
  },
  graduationDate: {
    fontSize: '14px',
    color: '#7f8c8d',
    fontStyle: 'italic',
  },
  achievementsList: {
    paddingLeft: '20px',
  },
  achievementItem: {
    fontSize: '14px',
    marginBottom: '10px',
  },
};

export default Template2;