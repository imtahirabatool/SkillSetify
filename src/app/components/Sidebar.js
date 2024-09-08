import React, { useState } from "react";
import { FaPlus, FaBars } from "react-icons/fa";
import TemplatePopup from "./TemplatePopup";
import Image from "next/image";
import { GrSelection } from "react-icons/gr";


const Sidebar = ({ onTemplateSelect, selectedTemplate }) => {
  const [showPopup, setShowPopup] = useState(false);
  const templates = [
    { id: 'template1', name: 'Template 1', image: '/path/to/template1-image.jpg' },
    { id: 'template2', name: 'Template 2', image: '/path/to/template2-image.jpg' }
  ];

  // Handle template selection, passing it back to parent component (CreateResume)
  const handleTemplateSelect = (template) => {
    onTemplateSelect(template); // Notify parent of template selection
    setShowPopup(false); // Close popup after selection
  };

  return (
    <div className="w-64 bg-gray-100 ml-4 mb-3 h-full flex flex-col p-4 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl text-green-500 font-semibold">Resume Builder</h2>
      </div>

      {/* Button to open the template selection popup */}
      <button
        onClick={toggleSidebar}
        className="md:hidden flex items-center p-2 bg-green-700 text-white rounded-md mb-4 hover:bg-green-800"
      >
        <GrSelection className="mr-2" />
        Select Template
      </button>

      {/* Display selected template if one is selected */}
      <div className="flex flex-col items-center">
        {selectedTemplate ? (
          <div className="w-full bg-white p-4 rounded-lg shadow-md">
            <Image
              src={selectedTemplate.image}
              alt={selectedTemplate.name}
              width={300} // Ensure image size is appropriate
              height={400}
              className="w-full h-auto object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold text-gray-700 mt-2">
              {selectedTemplate.name}
            </h3>
          </div>
        ) : (
          <p className="text-gray-500">No template selected</p>
        )}
      </div>

      {/* Popup for selecting a template */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-lg font-semibold mb-4">Choose a Template</h3>
            <div className="flex flex-col space-y-4">
              {templates.map((template) => (
                <div
                  key={template.id}
                  className="flex items-center p-2 border rounded-md cursor-pointer hover:bg-gray-100"
                  onClick={() => handleTemplateSelect(template)}
                >
                  <Image
                    src={template.image}
                    alt={template.name}
                    width={60}
                    height={80}
                    className="w-16 h-auto object-cover rounded-md mr-2"
                  />
                  <span className="text-gray-800">{template.name}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 p-2 bg-red-500 text-white rounded-md hover:bg-red-600 w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;