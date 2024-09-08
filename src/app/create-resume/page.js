"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/header";
import exportToPDF from '../utils/exportToPDF'; 
import Image from "next/image";
import Template1 from '../../templates/template1';
import Template2 from '../../templates/template2';
import Template3 from '../../templates/template3'


const CreateResume = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [resumeData, setResumeData] = useState({
    fullName: "",
    jobTitle: "",
    email: "",
    phone: "",
    address: "",
    summary: "",
    skills: [],
    experience: [{
      title: "",
      company: "",
      startDate: "",
      endDate: "",
      description: ""
    }],
    education: [{
      degree: "",
      institution: "",
      graduationDate: ""
    }],
    achievements: [""]
  });

  const handleTemplateSelect = (templateId) => {
    setSelectedTemplate(templateId);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleArrayChange = (section, index, field, value) => {
    setResumeData((prevData) => {
      if (section === 'skills' || section === 'achievements') {
        // For skills and achievements, directly update the string in the array
        const newArray = [...prevData[section]];
        newArray[index] = value;
        return { ...prevData, [section]: newArray };
      } else {
        // For other sections, update the object in the array
        return {
          ...prevData,
          [section]: prevData[section].map((item, i) => 
            i === index ? { ...item, [field]: value } : item
          )
        };
      }
    });
  };
  

  const handleAddItem = (section, defaultValue) => {
    setResumeData((prevData) => ({
      ...prevData,
      [section]: [...prevData[section], defaultValue]
    }));
  };

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 'template1':
        return <Template1 resumeData={resumeData} />;
      case 'template2':
        return <Template2 resumeData={resumeData} />;
      case 'template3':
          return <Template3 resumeData={resumeData} />;
      default:
        return <p className="text-gray-500 text-center mt-6">Select a template to see the preview</p>;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-teal-600 text-white py-4">
        <h1 className="text-3xl font-bold text-center">Create Your Resume</h1>
      </header>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2">
            <form className="bg-white shadow-md rounded-lg p-6">
              <InputField label="Full Name" name="fullName" value={resumeData.fullName} onChange={handleChange} />
              <InputField label="Job Title" name="jobTitle" value={resumeData.jobTitle} onChange={handleChange} />
              <InputField label="Email" name="email" type="email" value={resumeData.email} onChange={handleChange} />
              <InputField label="Phone" name="phone" value={resumeData.phone} onChange={handleChange} />
              <InputField label="Address" name="address" value={resumeData.address} onChange={handleChange} />
              <TextArea label="Summary" name="summary" value={resumeData.summary} onChange={handleChange} />
              
              <ArraySection
                label="Skills"
                items={resumeData.skills}
                onAdd={() => handleAddItem('skills', '')}
                renderItem={(skill, index) => (
                  <InputField
                    key={index}
                    value={skill}
                    onChange={(e) => handleArrayChange('skills', index, null, e.target.value)}
                    placeholder="Skill"
                  />
                )}
              />

              <ArraySection
                label="Experience"
                items={resumeData.experience}
                onAdd={() => handleAddItem('experience', { title: "", company: "", startDate: "", endDate: "", description: "" })}
                renderItem={(exp, index) => (
                  <div key={index} className="mb-4 p-4 border border-gray-200 rounded">
                    <InputField
                      label="Job Title"
                      value={exp.title}
                      onChange={(e) => handleArrayChange('experience', index, 'title', e.target.value)}
                    />
                    <InputField
                      label="Company"
                      value={exp.company}
                      onChange={(e) => handleArrayChange('experience', index, 'company', e.target.value)}
                    />
                    <InputField
                      label="Start Date"
                      value={exp.startDate}
                      onChange={(e) => handleArrayChange('experience', index, 'startDate', e.target.value)}
                    />
                    <InputField
                      label="End Date"
                      value={exp.endDate}
                      onChange={(e) => handleArrayChange('experience', index, 'endDate', e.target.value)}
                    />
                    <TextArea
                      label="Description"
                      value={exp.description}
                      onChange={(e) => handleArrayChange('experience', index, 'description', e.target.value)}
                    />
                  </div>
                )}
              />

              <ArraySection
                label="Education"
                items={resumeData.education}
                onAdd={() => handleAddItem('education', { degree: "", institution: "", graduationDate: "" })}
                renderItem={(edu, index) => (
                  <div key={index} className="mb-4 p-4 border border-gray-200 rounded">
                    <InputField
                      label="Degree"
                      value={edu.degree}
                      onChange={(e) => handleArrayChange('education', index, 'degree', e.target.value)}
                    />
                    <InputField
                      label="Institution"
                      value={edu.institution}
                      onChange={(e) => handleArrayChange('education', index, 'institution', e.target.value)}
                    />
                    <InputField
                      label="Graduation Date"
                      value={edu.graduationDate}
                      onChange={(e) => handleArrayChange('education', index, 'graduationDate', e.target.value)}
                    />
                  </div>
                )}
              />

              <ArraySection
                label="Achievements"
                items={resumeData.achievements}
                onAdd={() => handleAddItem('achievements', '')}
                renderItem={(achievement, index) => (
                  <InputField
                    key={index}
                    value={achievement}
                    onChange={(e) => handleArrayChange('achievements', index, null, e.target.value)}
                    placeholder="Achievement"
                  />
                )}
              />
            </form>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold black mb-4">Select a Template</h2>
              <div className="flex gap-4 mb-6">
                <TemplateButton
                  onClick={() => handleTemplateSelect('template1')}
                  isSelected={selectedTemplate === 'template1'}
                  label="Template 1"
                />
                <TemplateButton
                  onClick={() => handleTemplateSelect('template2')}
                  isSelected={selectedTemplate === 'template2'}
                  label="Template 2"
                />
                 <TemplateButton
                  onClick={() => handleTemplateSelect('template3')}
                  isSelected={selectedTemplate === 'template3'}
                  label="Template 3"
                />
              </div>
              <div className="border-2 border-gray-200 rounded-lg p-4 min-h-[400px]">
                {renderTemplate()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InputField = ({ label, name, type = "text", value, onChange, placeholder }) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
    />
  </div>
);

const TextArea = ({ label, name, value, onChange, placeholder }) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows="4"
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
    />
  </div>
);

const ArraySection = ({ label, items, onAdd, renderItem }) => (
  <div className="mb-6">
    <div className="flex justify-between items-center mb-2">
      <label className="block text-lg font-medium text-gray-700">{label}</label>
      <button
        type="button"
        onClick={onAdd}
        className="text-teal-600 hover:text-teal-700 font-medium"
      >
        Add {label}
      </button>
    </div>
    {items.map((item, index) => renderItem(item, index))}
  </div>
);

const TemplateButton = ({ onClick, isSelected, label }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-md transition-colors ${
      isSelected
        ? 'bg-teal-600 text-white'
        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
    }`}
  >
    {label}
  </button>
);

export default CreateResume;