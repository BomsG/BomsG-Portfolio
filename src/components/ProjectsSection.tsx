import React, { useState } from "react";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";
export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const projects = [
    {
      id: 1,
      title: "Skincare Website",
      description:
        "An e-commerce skincare website, includes a blog section and where buyers can get product recommendation based on a conducted test",
      image: "/images/pro1.jpeg",
      tags: ["react", "typescript", "tailwind"],
      github: "https://github.com/BomsG/skincare.git",
      demo: "https://skincare-pi-seven.vercel.app/",
    },
    {
      id: 2,
      title: "TaskDo",
      description:
        "An engaging task management website, made to help you track your day",
      image: "/images/taskdo.jpeg",
      tags: ["react", "typescript", "tailwind"],
      github: "https://github.com/BomsG/TaskDo.git",
      demo: "https://taskdo-red.vercel.app/",
    },
    {
      id: 3,
      title: "SolarAfriq",
      description:
        "SolarAfriq is a responsive solar e-commerce website with an admin dashboard, it is built with react and tailwind, connecting users with solar products and installers",
      image: "/images/pro2.jpeg",
      tags: ["react", "nextjs"],
      github: "https://github.com/BomsG/solarAfriq.git",
      demo: "https://www.solarafriq.com/",
    },
  ];
  const filters = [
    {
      id: "all",
      label: "All Projects",
    },
    {
      id: "react",
      label: "React",
    },
    {
      id: "typescript",
      label: "TypeScript",
    },
    {
      id: "tailwind",
      label: "Tailwind",
    },
    {
      id: "nextjs",
      label: "Next.js",
    },
    {
      id: "react-native",
      label: "React Native",
    },
    {
      id: "wordpress",
      label: "WordPress",
    },
  ];
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));
  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Check out some of my recent work. Each project represents different
            challenges and solutions.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium"
                  : "bg-slate-800 text-gray-400 hover:bg-slate-700"
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl bg-slate-800 transition-all duration-500 hover:transform hover:scale-[1.02]"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold mb-2 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 delay-200">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-cyan-400/20 text-cyan-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 delay-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg transition-colors duration-300"
                  >
                    <GithubIcon size={18} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 rounded-lg hover:opacity-90 transition-opacity duration-300"
                  >
                    <ExternalLinkIcon size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-slate-700 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
