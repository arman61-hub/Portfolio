import React, { useEffect } from "react";
import Lottie from "lottie-react";
import { lottie } from "../assets/lottie/lottie.js";
import { image } from "../assets/image/image.js";
import AOS from "aos";
import "aos/dist/aos.css";

const Education = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div name="Education" className="px-4 sm:px-6 py-12 mx-auto max-w-7xl">
      <h1 className="text-center text-[#00040f] dark:text-slate-300 font-extrabold text-4xl sm:text-5xl mb-12">
        Education
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-between gap-10 bg-gradient-to-tl from-[#e1e1e1] to-[#fff]  dark:from-[#050710] dark:to-[#142a47] p-6 sm:p-10 rounded-2xl shadow-xl transition-all duration-300" data-aos="fade-up">
        <div className="w-full md:w-1/2">
          <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8 text-center sm:text-left flex-col sm:flex-row">
            <img src={image.IIIT_Kota} alt="IIIT Kota" className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] object-contain"/>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#00040f] dark:text-white">
              Indian Institute of Information Technology, Kota
            </h2>
          </div>

          <div className="space-y-3 pl-0 sm:pl-4 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#5f6fff] dark:text-indigo-400">
              Bachelor of Technology
            </h3>
            <p className="text-gray-600 dark:text-slate-400 text-base sm:text-lg">
              <strong className="font-medium text-slate-700 dark:text-slate-300">Duration:</strong>{" "}
              August 2023 – May 2027
            </p>
            <p className="text-gray-600 dark:text-slate-400 text-base sm:text-lg">
              <strong className="font-medium text-slate-700 dark:text-slate-300">Major:</strong>{" "}
              Computer Science and Engineering
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <Lottie 
            animationData={lottie.education} 
            loop 
            className="w-[240px] sm:w-[350px] md:w-[420px] lg:w-[480px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Education;