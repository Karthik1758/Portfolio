import Card from "./UI/Card";
import { FaReact, FaNodeJs, FaPhp, FaDatabase, FaDocker } from "react-icons/fa";

export default function Skills() {
  const skills = [
    { name: "Frontend", description: "React, Angular, TailwindCSS", icon: <FaReact /> },
    { name: "Backend", description: "PHP, Laravel, Node.js", icon: <FaNodeJs /> },
    { name: "Database", description: "MySQL, PostgreSQL", icon: <FaDatabase /> },
    { name: "DevOps", description: "Docker, Git, Jira", icon: <FaDocker /> },
  ];

  return (
    <section className="bg-white py-16" id="skills">
      <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {skills.map((skill, index) => (
          <Card key={index} title={skill.name} description={skill.description} icon={skill.icon} />
        ))}
      </div>
    </section>
  );
}
