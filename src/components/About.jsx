import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { image } from "../assets/image/image.js";
import { Link as ScrollLink } from "react-scroll";

const About = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div name="About" className="mt-16 px-6 py-10 max-w-7xl mx-auto sm:px-4 sm:mt-12">
      <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-between gap-10" data-aos="fade-right">
        <div className="w-full md:w-2/3 mt-6 px-2 sm:px-0 text-center md:text-left">
          <h3 className="inline-block border-b-4 border-[#00040f] dark:border-white font-extrabold text-3xl sm:text-4xl text-[#00040f] dark:text-slate-300 mb-4">
            About Me
          </h3>
          <p className="mt-4 text-[#00040f] dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            I’m Arman Redhu, a passionate Full Stack Developer dedicated to transforming ideas into seamless digital experiences. With expertise in React.js, Node.js, and Tailwind CSS, I build scalable, efficient, and intuitive web applications.
          </p>
          <p className="mt-4 text-[#00040f] dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            My portfolio includes impactful projects such as <strong>GenCraftAI</strong>, <strong>DocNow</strong>, and <strong>EcoWaste</strong>, where I focused on AI integration, secure authentication, and performance optimization.
          </p>
          <p className="mt-4 text-[#00040f] dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            I value clean code, continuous learning, and collaborative development. Whether it's building user-centric features or tackling complex backend logic, I'm always eager to contribute to meaningful and innovative projects.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <ScrollLink to="Contact" smooth={true} duration={500} offset={-60} className="bg-[#5f6fff] hover:bg-[#4d5df0] text-white px-6 py-2 rounded-lg shadow-md transition duration-300 cursor-pointer font-semibold text-base" >
              📬 Contact Me
            </ScrollLink>
          </div>
        </div>

        <div className="w-full md:w-1/3 flex justify-center">
          <img src={image.pic} alt="Profile" className="max-h-[320px] max-w-[320px] w-full h-auto border-4 border-black dark:border-slate-500 rounded-full shadow-md"/>
        </div>
      </div>
    </div>
  );
};

export default About;