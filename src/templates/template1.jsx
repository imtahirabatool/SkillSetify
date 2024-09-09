import React, { useRef, useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Template1 = ({ resumeData }) => {
  const { fullName, jobTitle, email, phone, address, summary, skills, experience, education, achievements } = resumeData;
  const targetRef = useRef();
  const resumeRef = useRef(null);



  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

const generatePDF = () => {
  console.log("Starting PDF generation");
  setIsGeneratingPDF(true);

  try {
    const pdf = new jsPDF();
    let yPos = 20;

    // Helper function to add a line with a margin
    const addLine = (y) => {
      pdf.setDrawColor(0);
      pdf.setLineWidth(0.5);
      pdf.line(10, y, 200, y);
      return y + 15; // Add margin below the line (7 is the margin value)
    };

    // Header
    pdf.setFontSize(24);
    pdf.setFont('helvetica', 'bold');
    pdf.text(fullName, 10, yPos);
    yPos += 10;

    // Job Title and Contact Info
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.text(jobTitle, 10, yPos);
    yPos += 5;
    const contactInfo = `${phone} | ${email} | ${address}`;
    pdf.text(contactInfo, 10, yPos);
    yPos += 10;

    // Education
    yPos = addLine(yPos); // Add line with margin
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text("EDUCATION", 10, yPos);
    yPos += 7;

    education.forEach((edu) => {
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'bold');
      pdf.text(edu.institution, 10, yPos);
      pdf.setFont('helvetica', 'normal');
      pdf.text(edu.graduationDate, 200, yPos, { align: 'right' });
      yPos += 5;
      pdf.setFontSize(10);
      pdf.text(edu.degree, 10, yPos);
      yPos += 7;
    });

    // Work Experience
    yPos += 3;
    yPos = addLine(yPos); // Add line with margin
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text("WORK EXPERIENCE", 10, yPos);
    yPos += 7;

    experience.forEach((exp) => {
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'bold');
      pdf.text(exp.company, 10, yPos);
      pdf.setFont('helvetica', 'normal');
      pdf.text(`${exp.startDate} - ${exp.endDate}`, 200, yPos, { align: 'right' });
      yPos += 5;
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'italic');
      pdf.text(exp.title, 10, yPos);
      yPos += 5;

      const descLines = pdf.splitTextToSize(exp.description, 180);
      descLines.forEach((line, index) => {
        if (index === 0) {
          pdf.text(`• ${line}`, 15, yPos);
        } else {
          pdf.text(line, 17, yPos);
        }
        yPos += 5;
      });

      yPos += 5;
    });

    // Skills
    yPos = addLine(yPos); // Add line with margin
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text("SKILLS", 10, yPos);
    yPos += 7;

    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    const skillsText = skills.join(', ');
    const skillsLines = pdf.splitTextToSize(skillsText, 180);
    pdf.text(skillsLines, 10, yPos);
    yPos += skillsLines.length * 5 + 5;

    // Achievements
    if (achievements.length > 0) {
      yPos = addLine(yPos); // Add line with margin
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.text("ACHIEVEMENTS", 10, yPos);
      yPos += 7;

      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      achievements.forEach((achievement) => {
        const achLines = pdf.splitTextToSize(`• ${achievement}`, 180);
        pdf.text(achLines, 10, yPos);
        yPos += achLines.length * 5 + 2;
      });
    }

    // Summary (if space allows)
    if (yPos < 250) {
      yPos = addLine(yPos); // Add line with margin
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.text("PROFESSIONAL SUMMARY", 10, yPos);
      yPos += 7;

      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      const summaryLines = pdf.splitTextToSize(summary, 180);
      pdf.text(summaryLines, 10, yPos);
    }

    console.log("PDF generated, attempting to save");
    pdf.save('resume.pdf');
    console.log("PDF saved successfully");
  } catch (error) {
    console.error("Error generating PDF:", error);
  } finally {
    setIsGeneratingPDF(false);
  }
};



  return (
    <div>
    <button onClick={generatePDF} style={styles.downloadButton} disabled={isGeneratingPDF}>
      {isGeneratingPDF ? 'Generating PDF...' : 'Download PDF'}
    </button>
      <div ref={targetRef} style={{...styles.container}}>
        <header style={styles.header}>
          <h1 style={styles.name}>{fullName}</h1>
          <p style={styles.jobTitle}>{jobTitle}</p>
        </header>
        
        <div style={styles.contactInfo}>
          <p>{email} | {phone} | {address}</p>
        </div>

        <section>
          <h2 style={styles.sectionTitle}>Summary</h2>
          <p style={styles.summary}>{summary}</p>
        </section>

        <section>
          <h2 style={styles.sectionTitle}>Skills</h2>
          <ul style={styles.skillsList}>
            {skills.map((skill, index) => <li key={index} style={styles.skillItem}>{skill}</li>)}
          </ul>
        </section>

        <section>
          <h2 style={styles.sectionTitle}>Experience</h2>
          {experience.map((exp, index) => (
            <div key={index} style={styles.experienceItem}>
              <h3 style={styles.experienceTitle}>{exp.title}</h3>
              <p style={styles.companyName}>{exp.company}</p>
              <p style={styles.datePeriod}>{exp.startDate} - {exp.endDate}</p>
              <p style={styles.description}>{exp.description}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 style={styles.sectionTitle}>Education</h2>
          {education.map((edu, index) => (
            <div key={index} style={styles.educationItem}>
              <h3 style={styles.degree}>{edu.degree}</h3>
              <p style={styles.institution}>{edu.institution}</p>
              <p style={styles.graduationDate}>{edu.graduationDate}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 style={styles.sectionTitle}>Achievements</h2>
          <ul style={styles.achievementsList}>
            {achievements.map((achievement, index) => (
              <li key={index} style={styles.achievementItem}>{achievement}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    color: '#333',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  header: {
    borderBottom: '2px solid #2c3e50',
    paddingBottom: '10px',
    marginBottom: '20px',
  },
  name: {
    fontSize: '28px',
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
    marginBottom: '20px',
  },
  sectionTitle: {
    fontSize: '20px',
    color: '#2c3e50',
    borderBottom: '1px solid #bdc3c7',
    paddingBottom: '5px',
    marginTop: '25px',
    marginBottom: '15px',
  },
  summary: {
    marginBottom: '20px',
  },
  skillsList: {
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  skillItem: {
    backgroundColor: '#ecf0f1',
    padding: '5px 10px',
    margin: '0 10px 10px 0',
    borderRadius: '3px',
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

export default Template1;