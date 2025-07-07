import React, { useState } from "react";
import {
  Code2Icon,
  LayoutIcon,
  ServerIcon,
  SmartphoneIcon,
  PencilRulerIcon,
  DatabaseIcon,
} from "lucide-react";
export const SkillsSection: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const skills = [
    {
      id: "html-css",
      name: "HTML & CSS",
      icon: <LayoutIcon className="w-8 h-8" />,
      color: "from-orange-400 to-red-500",
      description: "Semantic HTML5, CSS3, Flexbox, Grid, Animations",
      level: 95,
    },
    {
      id: "react",
      name: "React",
      icon: <Code2Icon className="w-8 h-8" />,
      color: "from-cyan-400 to-blue-500",
      description: "Hooks, Context API, Redux, React Router",
      level: 90,
    },
    {
      id: "tailwind",
      name: "Tailwind CSS",
      icon: <PencilRulerIcon className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-400",
      description: "Utility-first CSS, Custom configurations, JIT mode",
      level: 85,
    },
    {
      id: "typescript",
      name: "TypeScript",
      icon: <Code2Icon className="w-8 h-8" />,
      color: "from-blue-600 to-indigo-500",
      description: "Static typing, Interfaces, Advanced types",
      level: 80,
    },
    {
      id: "nextjs",
      name: "Next.js",
      icon: <ServerIcon className="w-8 h-8" />,
      color: "from-gray-700 to-gray-900",
      description: "SSR, SSG, API Routes, Image optimization",
      level: 85,
    },
    {
      id: "react-native",
      name: "React Native",
      icon: <SmartphoneIcon className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-600",
      description: "Cross-platform mobile app development",
      level: 75,
    },
    {
      id: "wordpress",
      name: "WordPress",
      icon: <DatabaseIcon className="w-8 h-8" />,
      color: "from-blue-400 to-blue-600",
      description: "Theme development, Custom plugins, Gutenberg",
      level: 80,
    },
  ];
  return (
    <section id="skills" className="py-24 px-4 bg-slate-800/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Skills
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I've spent years honing my skills in frontend development. Here's
            what I bring to the table.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="relative bg-slate-700/50 rounded-xl p-6 backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10 group"
              onMouseEnter={() => setHoveredSkill(skill.id)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300"
                style={{
                  background: `linear-gradient(to bottom right, ${
                    skill.color.split(" ")[1]?.replace("from-", "") ||
                    "cyan-400"
                  }, ${
                    skill.color.split(" ")[2]?.replace("to-", "") || "blue-500"
                  })`,
                }}
              ></div>
              <div
                className={`w-16 h-16 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br ${skill.color} text-white`}
              >
                {skill.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{skill.name}</h3>
              <p className="text-gray-400 mb-4">{skill.description}</p>
              <div className="w-full bg-slate-600/50 h-2 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                  style={{
                    width:
                      hoveredSkill === skill.id ? `${skill.level}%` : "15%",
                  }}
                ></div>
              </div>
              <div className="mt-2 text-sm text-right text-gray-400">
                {hoveredSkill === skill.id
                  ? `${skill.level}%`
                  : "Hover to see proficiency"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
