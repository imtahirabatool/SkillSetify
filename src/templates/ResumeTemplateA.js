// components/ResumeTemplateA.js
import React from "react";

const ResumeTemplateA = ({ person = {}, lang = {}, contactLinks = {} }) => {
  return (
    <div id="resume3" className="resume font-sans pb-12">
      <div className="resume-header relative">
        <div className="absolute -left-[600px] -top-[200px] w-0 h-0 border-solid border-[#006064] border-[600px_0_0_1500px] border-transparent"></div>
        <div className="absolute z-20 right-[15%] top-[50px] flex">
          <div className="overflow-hidden relative">
            <div
              className="w-[100px] h-full float-right relative bg-cover bg-center"
              style={{ backgroundImage: `url('/resume/id.jpg')` }}
            ></div>
            <div className="float-right text-white mr-[120px]">
              <div className="text-5xl uppercase font-bold text-right">
                {person.name?.first} {person.name?.middle} {person.name?.last}
              </div>
              <div className="text-2xl uppercase text-right mt-2">
                {person.position}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="resume-content mt-[435px] ml-[15%] w-[70%]">
        <div className="about text-lg font-light mt-[-200px] mb-[-200px] w-[375px]">
          {person.about}
        </div>
        <div className="experience">
          <h3 className="font-bold text-2xl mb-2">{lang.experience}</h3>
          {person.experience?.map((experience) => (
            <div className="experience-block mb-2" key={experience.company}>
              <div className="flex items-center">
                <span className="text-lg uppercase">{experience.position}</span>
                <i className="material-icons ml-2">details</i>
                <span className="font-bold ml-2">{experience.company}</span>
              </div>
              <div className="flex items-center mt-1">
                <span>{experience.timeperiod}</span>
                <span className="ml-2">{experience.description}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="education">
          <h3 className="font-bold text-2xl mb-2">{lang.education}</h3>
          {person.education?.map((education) => (
            <div className="education-block mb-2" key={education.degree}>
              <div className="flex items-center">
                <span className="text-lg uppercase">{education.degree}</span>
              </div>
              <div className="flex items-center mt-1">
                <span>{education.description}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="skill-section">
          <h3 className="font-bold text-2xl mb-2">{lang.skills}</h3>
          {person.skills?.map((skill) => (
            <div
              className="skill-block flex items-center mb-2"
              key={skill.name}
            >
              <i className="material-icons mr-2">keyboard_arrow_right</i>
              <span className="text-lg">{skill.name}</span>
            </div>
          ))}
        </div>
        <div className="skills-other text-lg mt-2">{person.knowledge}</div>
        <div className="contact mt-0">
          <h3 className="font-bold text-2xl mb-2">{lang.contact}</h3>
          <a href={contactLinks.email} className="block text-lg mb-2">
            {person.contact?.email}
          </a>
          <a href={contactLinks.phone} className="block text-lg mb-2">
            {person.contact?.phone}
          </a>
          <span className="block text-lg mb-2">
            {person.contact?.street}, {person.contact?.city}
          </span>
          {person.contact?.website && (
            <a href={person.contact.website} className="block text-lg mb-2">
              {person.contact.website}
            </a>
          )}
          {person.contact?.github && (
            <a href={contactLinks.github} className="block text-lg mb-2">
              {contactLinks.github}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeTemplateA;
