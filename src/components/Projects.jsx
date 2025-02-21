import { FolderKanban, Database, MapPin } from "lucide-react";

const projects = [
  {
    title: "IFMIS Development",
    role: "Full Stack Developer",
    company: "Pixelvide",
    description:
      "Have been involved in the project from scratch and implemented form validations, email services, and managed user modules, including importing user projects into multiple projects.",
    icon: <FolderKanban className="h-12 w-12 text-green-500 mb-4" />, // Project Management & Structure
  },
  {
    title: "Dhairya Project - Counselling Management System",
    role: "Full Stack Developer",
    company: "Pixelvide",
    description:
      "Developed the project from scratch with a team of two, designed and managed databases, and verified the code for quality and efficiency.",
    icon: <Database className="h-12 w-12 text-indigo-500 mb-4" />, // Database & Backend Focus
  },
  {
    title: "Smart Meter Implementation Suite (SMIS)",
    role: "Full Stack Developer",
    company: "Asakta",
    description:
      "Utilized Google Maps for tower mapping, developed pole reports, integrated SMS notifications, and implemented role-based API access and also forgot password module.",
    icon: <MapPin className="h-12 w-12 text-red-500 mb-4" />, // Map & Location-Based Project
  },
];

export default function Projects() {
  return (
    <section className="py-10 bg-gray-100" id="projects">
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105"
          >
            {project.icon}
            <h3 className="text-lg font-semibold text-center">{project.title}</h3>
            <p className="text-gray-600 text-center">
              {project.role} at {project.company}
            </p>
            <p className="text-gray-500 text-center mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
