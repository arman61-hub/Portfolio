import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub } from "react-icons/fa";
import { TbLogin2 } from "react-icons/tb";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { projects } from "../assets/projects/projects.js";
import { tech_logo } from "../assets/tech_logo/tech_logo.js";

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);
  const projectSectionRef = useRef(null);

  const projectList = [
    {
      imgUrl: projects.GenCraftAi,
      title: "GenCraftAi",
      description: "✨ GenCraftAI — An AI-powered SaaS platform to ✍️ generate blogs, 📰 craft article titles, 🧾 review resumes, and 🖼️ create visuals — all in one creative hub.",
      githubLink: "https://github.com/arman61-hub/GenCraftAI/",
      projectLink: "https://gen-craft-ai.vercel.app/",
      icons: [ tech_logo.react, tech_logo.node, tech_logo.express, tech_logo.postgresql, tech_logo.tailwindcss, tech_logo.gemini_ai, tech_logo.clipdrop, tech_logo.neon],
    },
    {
      imgUrl: projects.DocNow,
      title: "DocNow",
      description: "🩺 DocNow — A smart React web app to book appointments, 💊 manage prescriptions, and 💳 pay securely — all in one place.",
      githubLink: "https://github.com/arman61-hub/DocNow/",
      projectLink: "https://docnow-sr1f.onrender.com/",
      icons: [ tech_logo.react, tech_logo.node, tech_logo.express, tech_logo.mongodb, tech_logo.tailwindcss, tech_logo.razorpay],
    },
    {
      imgUrl: projects.EcoWaste,
      title: "EcoWaste",
      description: "♻️ EcoWaste is a smart waste management and recycling platform with AI-based identification, community engagement, and educational resources. 🚀",
      githubLink: "https://github.com/arman61-hub/EcoWaste",
      projectLink: "https://eco-waste-navy.vercel.app/",
      icons: [ tech_logo.react, tech_logo.node, tech_logo.express, tech_logo.mongodb, tech_logo.tailwindcss, tech_logo.gemini_ai],
    },
    {
      imgUrl: projects.Portfolio,
      title: "Portfolio Site",
      description: "🚀 MyPortfolio — A modern React + Tailwind showcase with 🌗 theme switcher, ✨ fluid animations, 🧩 interactive projects, and ⚙️ smart custom hooks — built for impact.",
      githubLink: "https://github.com/arman61-hub/portfolio",
      projectLink: "https://arman-redhu-portfolio.vercel.app/",
      
      icons: [tech_logo.react, tech_logo.tailwindcss],
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
      icons: [ tech_logo.html, tech_logo.css, tech_logo.javascript, tech_logo.php, tech_logo.mysql],
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

  const batchSize = isMobile ? 2 : 3;

  useEffect(() => {
    AOS.init();
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      setVisibleCount(mobile ? 2 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + batchSize);
  };

  const handleShowLess = () => {
    setVisibleCount(batchSize);
    if (projectSectionRef.current) {
      const offset = -80; 
      const top =
        projectSectionRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        offset;

      window.scrollTo({ top, behavior: "smooth" });
    }
  };


  const displayedProjects = projectList.slice(0, visibleCount);
  const hasMore = visibleCount < projectList.length;

  return (
    <div
      ref={projectSectionRef}
      name="Projects"
      className="p-5 mx-auto mt-10 max-w-screen-xl min-h-screen"
    >
      <h1 className="text-[#00040f] dark:text-slate-200 text-center font-extrabold text-5xl my-5 max-sm:text-4xl">
        Projects
      </h1>

      <div
        className="grid gap-8 mt-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        data-aos="fade-up"
      >
        {displayedProjects.map(
          ({ imgUrl, title, description, githubLink, projectLink, icons }) => (
            <div
              key={title}
              className="bg-[#0f172a] dark:bg-[#111827] text-white rounded-2xl shadow-xl flex flex-col justify-between transition hover:-translate-y-1 duration-300"
            >
              <img
                src={imgUrl}
                alt={title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-sm text-gray-300 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {icons.map((icon, i) => (
                    <img
                      key={i}
                      src={icon}
                      alt="tech"
                      className="w-7 h-7 object-contain"
                    />
                  ))}
                </div>
                <div className="mt-auto flex gap-3">
                  <a
                    href={projectLink}
                    target="_blank"
                    className="flex-1 inline-block bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium text-center py-2 rounded-lg transition"
                  >
                    <TbLogin2 className="inline mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={githubLink}
                    target="_blank"
                    className="flex-1 inline-block border border-slate-400 hover:border-white text-sm text-white text-center py-2 rounded-lg transition"
                  >
                    <FaGithub className="inline mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      {projectList.length > batchSize && (
        <div className="flex justify-center mt-8">
          <button
            onClick={hasMore ? handleShowMore : handleShowLess}
            className="px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition duration-300 ease-in-out shadow-lg flex items-center gap-2"
          >
            {hasMore ? (
              <>
                Show More
                <FiChevronDown />
              </>
            ) : (
              <>
                Show Less
                <FiChevronUp />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
