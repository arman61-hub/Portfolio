import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { tech_logo } from "../assets/tech_logo/tech_logo.js";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [activeCategory, setActiveCategory] = useState("Languages");

  const techs = [
    { id: 1, src: tech_logo.c, title: "C", style: "shadow-gray-500", category: "Languages" },
    { id: 2, src: tech_logo.cpp, title: "C++", style: "shadow-blue-500", category: "Languages" },
    { id: 3, src: tech_logo.javascript, title: "JavaScript", style: "shadow-yellow-400", category: "Languages" },
    { id: 4, src: tech_logo.java, title: "Java", style: "shadow-orange-700", category: "Languages" },
    { id: 5, src: tech_logo.python, title: "Python", style: "shadow-blue-400", category: "Languages" },

    { id: 6, src: tech_logo.react, title: "React", style: "shadow-cyan-400", category: "Libraries/Frameworks" },
    { id: 7, src: tech_logo.tailwindcss, title: "Tailwind", style: "shadow-sky-400", category: "Libraries/Frameworks" },
    { id: 8, src: tech_logo.express, title: "Express.js", style: "shadow-zinc-400", category: "Libraries/Frameworks" },
    { id: 9, src: tech_logo.node, title: "Node.js", style: "shadow-lime-500", category: "Libraries/Frameworks" },
    { id: 10, src: tech_logo.php, title: "PHP", style: "shadow-indigo-500", category: "Libraries/Frameworks" },

    { id: 11, src: tech_logo.mysql, title: "MySQL", style: "shadow-blue-500", category: "Databases" },
    { id: 12, src: tech_logo.mongodb, title: "MongoDB", style: "shadow-green-600", category: "Databases" },

    { id: 13, src: tech_logo.git, title: "Git", style: "shadow-orange-500", category: "Tools" },
    { id: 14, src: tech_logo.github, title: "GitHub", style: "shadow-neutral-500", category: "Tools" },
    { id: 15, src: tech_logo.vscode, title: "VS Code", style: "shadow-blue-400", category: "Tools" },
    { id: 16, src: tech_logo.postman, title: "Postman", style: "shadow-orange-400", category: "Tools" },
    { id: 17, src: tech_logo.linux, title: "Linux", style: "shadow-yellow-300", category: "Tools" },
    { id: 17, src: tech_logo.jupyter, title: "Jupyter", style: "shadow-orange-500", category: "Tools" },
  ];

  const categories = ["Languages", "Libraries/Frameworks", "Databases", "Tools"];
  const filteredTechs = techs.filter(t => t.category === activeCategory);

  return (
    <div name="Skills" className="w-full px-4 py-8 text-[#00040f] dark:text-[#e1e1e1]">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center w-full h-full">
        <h1 className="text-center font-extrabold text-4xl sm:text-5xl mb-4 dark:text-slate-300">
          Skills
        </h1>
        <p className="text-center text-sm sm:text-base md:text-lg mb-6 px-2 sm:px-12">
          A collection of my technical skills honed through experience
        </p>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-[#5f6fff] text-white shadow-lg"
                  : "bg-transparent text-[#5f6fff] border-[#5f6fff] dark:border-white dark:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 transition-all duration-500" data-aos="fade-left" key={activeCategory}>
          {filteredTechs.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-300 py-6 px-4 rounded-xl flex flex-col items-center justify-center ${style}`}>
              <img src={src} alt={title} className="w-14 h-14 sm:w-16 sm:h-16 object-contain mb-3" />
              <p className="text-sm sm:text-base font-medium text-center">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
