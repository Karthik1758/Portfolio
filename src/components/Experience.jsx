import { Briefcase, Code, GraduationCap } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Pixelvide - Hyderabad, IN",
      duration: "Jan 2023 - Present",
      description:
        "Worked on IFMIS Telangana & MP, developed core modules, and optimized database performance. Led code reviews and enhanced system efficiency.",
      icon: <Code className="h-12 w-12 text-indigo-500 mb-4" />, // Developer Icon
    },
    {
      role: "Full Stack Intern",
      company: "Pixelvide",
      duration: "Oct 2022 - Jan 2023",
      description:
        "Completed 12+ tasks with high standards, studied Laravel 10 & PSR guidelines. Created a directive-based AngularJS project.",
      icon: <GraduationCap className="h-12 w-12 text-green-500 mb-4" />, // Internship Icon
    },
    {
      role: "Program Analyst Trainee",
      company: "Cognizant Technology Solutions",
      duration: "Feb 2022 - Dec 2022",
      description:
        "Automated testing using Selenium and Maven, improving software efficiency. Gained hands-on experience in QA automation.",
      icon: <Briefcase className="h-12 w-12 text-blue-500 mb-4" />, // Corporate Work Icon
    },
  ];

  return (
    <section className="py-10 bg-gray-100" id="experience">
      <h2 className="text-4xl font-bold text-center mb-10">Experience</h2>

      {/* Card-Based Experience Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105"
          >
            {exp.icon}
            <h3 className="text-lg font-semibold mb-2">{exp.role}</h3>
            <p className="text-gray-600 text-center">{exp.company}</p>
            <p className="text-gray-500 text-sm">{exp.duration}</p>
            <p className="text-gray-700 text-center mt-3">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
