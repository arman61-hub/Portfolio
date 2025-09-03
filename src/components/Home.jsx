import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Lottie from 'lottie-react';
import { lottie } from '../assets/lottie/lottie.js';
import { Link as ScrollLink } from "react-scroll";

const Home = () => {
  const [text] = useTypewriter({
    words: ['Arman Redhu', 'Full Stack Developer', 'Web Developer', 'Tech Enthusiast', 'Problem Solver'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  return (
    <div
      name="Home"
      className="w-full min-h-screen flex items-center justify-center px-4 py-16 text-[#00040f] dark:text-[#e1e1e1]"
    >
      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="text-center md:text-left flex-1">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug sm:leading-tight">
            Hi, there! <br />
            I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              {text}
            </span>
            <span className="text-gray-400">
              <Cursor cursorStyle="|" />
            </span>
          </h2>

          <div className="mt-6 px-2">
            <strong>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
                Passionate developer with a knack for crafting impactful, real-world solutions through innovative web technologies.
              </p>
            </strong>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="https://arman61-hub.github.io/Resume/Arman_Redhu_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300"
            >
              📄 View Resume
            </a>
            <ScrollLink
              to="Projects"
              smooth={true}
              duration={500}
              offset={-60}
              className="bg-gray-800 text-white px-6 py-2 rounded-lg shadow hover:bg-gray-900 transition duration-300 cursor-pointer"
            >
              🚀 View Projects
            </ScrollLink>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <Lottie
            animationData={lottie.home}
            loop={true}
            className="w-[220px] sm:w-[300px] md:w-[380px] lg:w-[460px] xl:w-[520px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;