import React from "react";
import ResumeTemplateA from "@/templates/ResumeTemplateA";
import ResumeTemplateB from "@/templates/ResumeTemplateB";
import { FaTimes } from "react-icons/fa";

const templates = [
  {
    id: 1,
    name: "Classic Resume",
    description:
      "A traditional, clean resume template suitable for any industry.",
    component: ResumeTemplateA,
  },
  {
    id: 2,
    name: "Modern Resume",
    description:
      "A modern resume template with a focus on design and structure.",
    component: ResumeTemplateB,
  },
];

const TemplatePopup = ({
  show,
  onClose,
  onSelect,
  person = {},
  lang = {},
  contactLinks = [],
}) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Select a Template
        </h2>
        <button
          onClick={onClose}
          className="absolute text-black text-xl"
        >
          <FaTimes />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {templates.map((template) => {
            const TemplateComponent = template.component;
            return (
              <div
                key={template.id}
                className="border p-4 bg-gray-100 rounded-lg shadow-md cursor-pointer hover:bg-gray-200"
                onClick={() => onSelect(template.id)}
              >
                <TemplateComponent
                  person={person}
                  lang={lang}
                  contactLinks={contactLinks}
                />
                <h3 className="text-lg font-semibold text-gray-700 mt-4">
                  {template.name}
                </h3>
                <p className="text-sm text-gray-500">{template.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TemplatePopup;
