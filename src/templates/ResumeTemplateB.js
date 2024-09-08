import Image from "next/image";
import Link from "next/link";

const ResumeTemplateB = ({ person = {}, lang = {} }) => {
  const {
    name = { first: '', last: '' },
    position = '',
    birth = { year: '', location: '' },
    contact = {
      street: '',
      city: '',
      phone: '',
      email: '',
      github: '',
      website: '',
    },
    skills = [],
    experience = [],
    education = [],
    projects = [],
  } = person;

  return (
    <div className="resume bg-gray-200 font-roboto">
      <div className="leftCol w-1/3 bg-gray-800 text-white p-6 relative">
        <div
          className="heading h-72 bg-cover bg-center mb-4"
          style={{ backgroundImage: "url('/resume/id.jpg')" }}
        ></div>
        <div className="section-headline text-white text-lg font-medium mb-4">
          {lang.contact}
        </div>
        <div className="item mb-4 flex items-start">
          <div className="icon text-2xl mr-4">
            <i className="material-icons">account_circle</i>
          </div>
          <div className="text">
            <ul className="list-none">
              <li>
                {lang.born} {birth.year || 'N/A'} {lang.bornIn} {birth.location || 'N/A'}
              </li>
            </ul>
          </div>
        </div>

        <div className="item mb-4 flex items-start">
          <div className="icon text-2xl mr-4">
            <i className="material-icons">location_city</i>
          </div>
          <div className="text">
            <ul className="list-none">
              <li>{contact.street || 'N/A'}</li>
              <li>{contact.city || 'N/A'}</li>
            </ul>
          </div>
        </div>

        <Link href={`tel:${contact.phone}`} className="block mb-4">
          <div className="item flex items-center">
            <div className="icon text-2xl mr-4">
              <i className="material-icons">phone</i>
            </div>
            <div className="text">{contact.phone || 'N/A'}</div>
          </div>
        </Link>

        <Link href={`mailto:${contact.email}`} className="block mb-4">
          <div className="item flex items-center">
            <div className="icon text-2xl mr-4">
              <i className="material-icons">email</i>
            </div>
            <div className="text">{contact.email || 'N/A'}</div>
          </div>
        </Link>

        <Link href={`https://github.com/${contact.github}`} target="_blank" className="block mb-4">
          <div className="item flex items-center">
            <div className="icon text-2xl mr-4">
              <i className="fa fa-github"></i>
            </div>
            <div className="text">
              <span>@{contact.github || 'N/A'}</span>
              <span>github.com/{contact.github || 'N/A'}</span>
            </div>
          </div>
        </Link>

        <Link href={contact.website} target="_blank" className="block mb-4">
          <div className="item flex items-center">
            <div className="icon text-2xl mr-4">
              <i className="material-icons">language</i>
            </div>
            <div className="text">
              <span>{contact.website || 'N/A'}</span>
            </div>
          </div>
        </Link>

        <div className="item last mt-4">
          <div className="section-headline text-white text-lg font-medium mb-4">
            {lang.skills}
          </div>
          {skills.map((skill) => (
            <div className="skill flex items-center mb-2" key={skill.name}>
              <div className="right flex items-center w-full">
                <span className="mr-4">{skill.name || 'N/A'}</span>
                <div className="progress relative flex-1">
                  <div
                    className="determinate bg-gray-600 h-1 rounded"
                    style={{ width: `${skill.level || 0}%` }}
                  >
                    <i className="fa fa-circle text-white text-xs absolute top-0 right-0"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rightCol w-1/3 p-6">
        <div className="title mb-6">
          <h2 className="text-2xl font-medium">
            {name.first || 'First Name'} {name.last || 'Last Name'}
          </h2>
          <div className="text-lg">{position || 'Position'}</div>
        </div>

        <div className="section-headline text-lg font-medium mb-4">
          {lang.experience}
        </div>
        {experience.map((experience) => (
          <div
            className="block bg-white p-4 mb-4 shadow-lg"
            key={experience.position}
          >
            <div className="block-helper"></div>
            <div className="headline text-lg font-medium">
              {experience.position || 'Position'} - {experience.company || 'Company'}
            </div>
            <div className="subheadline text-sm text-gray-600">
              {experience.timeperiod || 'Time Period'}
            </div>
            <p className="info mt-2 text-sm text-gray-800">
              {experience.description || 'Description'}
            </p>
          </div>
        ))}

        <div className="section-headline text-lg font-medium mb-4">
          {lang.education}
        </div>
        {education.map((education) => (
          <div
            className="block bg-white p-4 mb-4 shadow-lg"
            key={education.degree}
          >
            <div className="block-helper"></div>
            <div className="headline text-lg font-medium">
              {education.degree || 'Degree'}
            </div>
            <p className="info mt-2 text-sm text-gray-800">
              {education.timeperiod || 'Time Period'}, {education.description || 'Description'}
            </p>
          </div>
        ))}
      </div>

      <div className="farRightCol w-1/3 p-6">
        <div className="section-headline text-lg font-medium mb-4">
          {lang.projects}
        </div>
        {projects.map((project) => (
          <div className="block bg-white p-4 mb-4 shadow-lg" key={project.name}>
            <div className="block-helper"></div>
            <div className="headline text-lg font-medium">{project.name || 'Project Name'}</div>
            <div className="subheadline text-sm text-gray-600">
              {project.timeperiod || 'Time Period'}
            </div>
            <p className="info mt-2 text-sm text-gray-800">
              {project.description || 'Description'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeTemplateB;
