import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Pixelvide - Full Stack Developer",
      description: "Worked on IFMIS, Dhairya, and Smart Meter projects.",
    },
    {
      role: "Pixelvide - Intern",
      description: "Completed 12 tasks with high coding standards.",
    },
    {
      role: "Cognizant - Analyst Trainee",
      description: "Automated testing using Selenium and Maven.",
    },
  ];

  return (
    <section className="py-12 bg-gray-100" id="experience">
      <h2 className="text-4xl font-bold text-center mb-10">Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105"
          >
            <Briefcase className="h-12 w-12 text-indigo-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">{exp.role}</h3>
            <p className="text-gray-600 text-center">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
