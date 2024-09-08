import React, { useState } from "react";
import { FaPlus, FaBars } from "react-icons/fa";
import TemplatePopup from "./TemplatePopup";
import Image from "next/image";
import { GrSelection } from "react-icons/gr";

const Sidebar = ({ onTemplateSelect, selectedTemplate }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

  const handleTemplateSelect = (template) => {
    onTemplateSelect(template);
    setShowPopup(false);
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative">
      {/* Sidebar toggle button for small and medium screens */}
      <button
        onClick={toggleSidebar}
        className="md:hidden flex items-center p-2 bg-green-700 text-white rounded-md mb-4 hover:bg-green-800"
      >
        <GrSelection className="mr-2" />
        Select Template
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } md:block w-full md:w-64 bg-gray-100 h-full flex flex-col p-4 shadow-lg md:mb-0 mb-3`}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg sm:text-xl text-green-800 font-semibold">Resume Builder</h2>
        </div>

        {/* Button to open template selection popup */}
        <button
          onClick={() => setShowPopup(true)}
          className="flex items-center p-2 bg-green-700 text-white rounded-md mb-4 hover:bg-green-800"
        >
          <FaPlus className="mr-2" />
          Select Template
        </button>

        {/* Display selected template */}
        <div className="flex flex-col items-center">
          {selectedTemplate ? (
            <div className="w-full bg-white p-4 rounded-lg shadow-md">
              <Image
                src={selectedTemplate.image}
                alt={selectedTemplate.name}
                width={300}
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
      </div>

      {/* Template selection popup */}
      <TemplatePopup
        show={showPopup}
        onClose={() => setShowPopup(false)}
        onSelect={handleTemplateSelect}
      />
    </div>
  );
};

export default Sidebar;