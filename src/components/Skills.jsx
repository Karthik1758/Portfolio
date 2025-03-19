import { Code, Server, Database, Settings } from "lucide-react";

export default function Skills() {
  const skills = [
    {
      name: "Frontend",
      description: "HTML, CSS, Bootstrap, JavaScript, React, Angular, TailwindCSS",
      icon: <Code className="h-12 w-12 text-indigo-500 mb-4" />, // Represents coding & frontend development
    },
    {
      name: "Backend",
      description: "PHP, Laravel, Node.js, .NET, Express.js, Python, Django",
      icon: <Server className="h-12 w-12 text-green-500 mb-4" />, // Represents backend services
    },
    {
      name: "Database",
      description: "MySQL, PostgreSQL, MangoDB",
      icon: <Database className="h-12 w-12 text-blue-500 mb-4" />, // Represents database systems
    },
    {
      name: "DevOps",
      description: "Docker, Git, Jira",
      icon: <Settings className="h-12 w-12 text-gray-500 mb-4" />, // Represents system configuration & DevOps
    },
  ];

  return (
    <section className="py-10 bg-gray-100" id="skills">
      <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>

      {/* Card-Based Skills Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105"
          >
            {skill.icon}
            <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
            <p className="text-gray-700 text-center">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
