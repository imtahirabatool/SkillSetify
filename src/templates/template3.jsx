import React from 'react';

const Template3 = ({ resumeData }) => {
  const { fullName, jobTitle, email, phone, address, summary, skills, experience, education, achievements } = resumeData;

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.headerLeft}>
          <h1 style={styles.name}>{fullName}</h1>
          <p style={styles.jobTitle}>{jobTitle}</p>
        </div>
        <div style={styles.headerRight}>
          <p>{email}</p>
          <p>{phone}</p>
          <p>{address}</p>
        </div>
      </header>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Summary</h2>
        <p style={styles.summary}>{summary}</p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Technical Skills</h2>
        <div style={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div key={index} style={styles.skillItem}>{skill}</div>
          ))}
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Work Experience</h2>
        {experience.map((exp, index) => (
          <div key={index} style={styles.experienceItem}>
            <div style={styles.experienceHeader}>
              <h3 style={styles.experienceTitle}>{exp.title}</h3>
              <p style={styles.datePeriod}>{exp.startDate} - {exp.endDate}</p>
            </div>
            <p style={styles.companyName}>{exp.company}</p>
            <p style={styles.description}>{exp.description}</p>
          </div>
        ))}
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Education</h2>
        {education.map((edu, index) => (
          <div key={index} style={styles.educationItem}>
            <h3 style={styles.degree}>{edu.degree}</h3>
            <p style={styles.institution}>{edu.institution}</p>
            <p style={styles.graduationDate}>{edu.graduationDate}</p>
          </div>
        ))}
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Achievements</h2>
        <ul style={styles.achievementsList}>
          {achievements.map((achievement, index) => (
            <li key={index} style={styles.achievementItem}>{achievement}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Georgia, serif',
    lineHeight: '1.6',
    color: '#333',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderTop: '5px solid #2c3e50',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '20px',
  },
  headerLeft: {
    flex: '2',
  },
  headerRight: {
    flex: '1',
    textAlign: 'right',
    fontSize: '14px',
  },
  name: {
    fontSize: '36px',
    fontWeight: 'bold',
    margin: '0',
    color: '#2c3e50',
  },
  jobTitle: {
    fontSize: '18px',
    color: '#34495e',
    margin: '5px 0',
  },
  section: {
    marginBottom: '25px',
  },
  sectionTitle: {
    fontSize: '22px',
    color: '#2c3e50',
    borderBottom: '1px solid #bdc3c7',
    paddingBottom: '5px',
    marginBottom: '15px',
  },
  summary: {
    marginBottom: '20px',
    fontSize: '16px',
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
  },
  skillItem: {
    backgroundColor: '#ecf0f1',
    padding: '5px 10px',
    borderRadius: '3px',
    fontSize: '14px',
    textAlign: 'center',
  },
  experienceItem: {
    marginBottom: '20px',
  },
  experienceHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
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

export default Template3;