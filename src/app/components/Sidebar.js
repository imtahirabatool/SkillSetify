import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import TemplatePopup from "./TemplatePopup";
import Image from "next/image";

const Sidebar = ({ onTemplateSelect, selectedTemplate }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleTemplateSelect = (template) => {
    onTemplateSelect(template);
    setShowPopup(false);
  };

  return (
    <div className="w-64 bg-gray-100 ml-4 mb-3 h-full flex flex-col p-4 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl text-green-500 font-semibold">Resume Builder</h2>
      </div>
      <button
        onClick={() => setShowPopup(true)}
        className="flex items-center p-2 bg-green-500 text-white rounded-md mb-4 hover:bg-green-600"
      >
        <FaPlus className="mr-2" />
        Select Template
      </button>
      <div className="flex flex-col items-center">
        {selectedTemplate ? (
          <div className="w-full bg-white p-4 rounded-lg shadow-md">
            <Image
              src={selectedTemplate.image}
              alt={selectedTemplate.name}
              width={300} // Add the width here
              height={400} // Add the height here
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
      <TemplatePopup
        show={showPopup}
        onClose={() => setShowPopup(false)}
        onSelect={handleTemplateSelect}
      />
    </div>
  );
};

export default Sidebar;
