import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@mui/material";
import { FaGithub } from "react-icons/fa";
import { TbLogin2 } from "react-icons/tb";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import {projects} from "../assets/projects/projects.js";  
import {tech_logo} from "../assets/tech_logo/tech_logo.js";  

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init();
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const project = [
    {
      imgUrl: projects.DocNow,
      title: "DocNow",
      description: "🩺 DocNow — A smart React web app to book appointments, 💊 manage prescriptions, and 💳 pay securely — all in one place.",
      githubLink: "https://github.com/arman61-hub/DocNow/",
      projectLink: "https://docnow-sr1f.onrender.com/",
      icons: [tech_logo.react, tech_logo.node, tech_logo.express, tech_logo.mongodb, tech_logo.tailwindcss, tech_logo.razorpay_logo],
    },
    {
      imgUrl: projects.EcoWaste,
      title: "EcoWaste",
      description: "♻️ EcoWaste is a smart waste management and recycling platform with AI-based identification, community engagement, and educational resources. 🚀",
      githubLink: "https://github.com/arman61-hub/EcoWaste",
      projectLink: "https://eco-waste-navy.vercel.app/",
      icons: [tech_logo.react, tech_logo.node, tech_logo.express, tech_logo.mongodb, tech_logo.tailwindcss, tech_logo.google_gemini_logo],
    },
    {
      imgUrl: projects.TrendIntel,
      title: "TrendIntel",
      description: "📊 TrendIntel – A sleek and interactive frontend platform for tracking and visualizing trending topics in real time! 🚀📈",
      githubLink: "https://github.com/arman61-hub/trendintel",
      projectLink: "https://trendintel.onrender.com/",
      icons: [tech_logo.react, tech_logo.tailwindcss],
    },
    {
      imgUrl: projects.BurgerHut,
      title: "BurgerHut",
      description: "🍔 BurgerHut – A sleek and user-friendly web app for viewing menu options and booking advance slots for your favorite burgers! 🚀🔥",
      githubLink: "https://github.com/arman61-hub/BurgerHut",
      projectLink: "http://burgerhut.free.nf/",
      icons: [tech_logo.html, tech_logo.css, tech_logo.javascript, tech_logo.php, tech_logo.mysql],
    },
    {
      imgUrl: projects.GameArena,
      title: "GameArena",
      description: "🎮 GameArena – A dynamic gaming platform where users can explore and play exciting games. Built for a seamless and engaging experience! 🚀🔥",
      githubLink: "https://github.com/arman61-hub/GameArena",
      projectLink: "https://arman61-hub.github.io/GameArena/",
      icons: [tech_logo.html, tech_logo.css, tech_logo.javascript],
    },
    {
      imgUrl: projects.CurrencyConverter,
      title: "CurrencyConverter",
      description: "💰 CurrencyConverter – A fast and user-friendly currency conversion tool built with JavaScript, providing real-time exchange rates for accurate conversions. 🚀🌍",
      githubLink: "https://github.com/arman61-hub/CurrencyConverter",
      projectLink: "https://arman61-hub.github.io/CurrencyConverter/",
      icons: [tech_logo.html, tech_logo.css, tech_logo.javascript],
    },
  ];

  const displayedProjects = isMobile ? (showAll ? project : project.slice(0, 3)) : project;
  const toggleShowAll = () => setShowAll(!showAll);

  return (
    <div name="Projects" className="p-5 mx-20 mb-10 mt-10 min-h-screen max-sm:p-2 max-sm:mx-5">
      <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl my-5 max-sm:text-4xl">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-10" data-aos="fade-right">
        {displayedProjects.map(
          ({ imgUrl, title, description, githubLink, projectLink, icons }) => (
            <div key={title} className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:from-[#050710] dark:to-[#142a47] text-[#00040f] dark:text-[#e1e1e1] hover:scale-105 transition-transform duration-300 ease-in-out p-5 flex flex-col">
              <div className="relative flex flex-col gap-5 justify-between h-full">
                <div className="wrapper flex gap-4 sm:flex-row flex-col-reverse">
                  <div className="flex flex-col sm:w-[40%]">
                    <h1 className="text-2xl font-bold mb-2">{title}</h1>
                    <p className="text-[13px] md:text-[14px]">{description}</p>
                  </div>
                  <div className="sm:w-[60%] flex justify-center items-center">
                    <a href={projectLink} target="_blank" rel="noopener noreferrer">
                      <img className="rounded-xl cursor-pointer" src={imgUrl} alt={title}/>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between items-center">
                  <div className="tech-stack flex flex-wrap gap-3 justify-center mt-3 sm:mt-0">
                    {icons.map((icon, idx) => (
                      <img key={idx} src={icon} alt="tech" className="w-8 h-8 object-contain"/>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-4 sm:mt-0 items-center">
                    {isMobile ? (
                      <>
                        <Button variant="outlined" href={githubLink} target="_blank">
                          Github
                        </Button>
                        <Button variant="outlined" href={projectLink} target="_blank">
                          Live
                        </Button>
                      </>
                    ) : (
                      <>
                        <a title="Github" href={githubLink} target="_blank">
                          <FaGithub className="h-8 w-8" />
                        </a>
                        <a title="Live Link" href={projectLink} target="_blank">
                          <TbLogin2 className="h-8 w-8" />
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      {isMobile && project.length > 3 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={toggleShowAll}
            className="px-8 py-3 rounded-full font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition duration-300 ease-in-out shadow-lg flex items-center gap-2"
          >
            {showAll ? (
              <>
                Show Less
                <FiChevronUp className="inline" />
              </>
            ) : (
              <>
                See More
                <FiChevronDown className="inline" />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
