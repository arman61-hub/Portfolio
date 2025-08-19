import React from 'react';
import {SiGithub, SiGmail, SiInstagram, SiLinkedin, SiX} from 'react-icons/si';
import {FaChevronCircleRight, FaPhone, FaEnvelope, FaMapMarkedAlt} from 'react-icons/fa';
import {image} from '../assets/image/image.js';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <section className="dark:bg-[#111827]  px-6 py-10 mt-20 font-['Poppins'] lg:pl-20">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 sm:gap-12">
        <div className="flex-1 min-w-[280px] max-w-sm text-gray-600 dark:text-gray-400">
          <div className="flex gap-4 items-center mb-4 max-sm:flex-col max-sm:text-center">
            <img src={image.pic} className="w-20 h-20" alt="Profile" />
            <div className="text-[#00040f] dark:text-white">
              <h3 className="text-2xl font-bold">Arman Redhu</h3>
              <h4 className="text-lg font-semibold">Web Developer</h4>
            </div>
          </div>
          <p className="text-base sm:text-lg mt-2 max-sm:text-center">
            Unstop Campus Ambassador | Content & Editorial Lead and Public Relations & Outreach Executive at IIIT Kernel | Reliance Foundation Scholar | IIIT Kota'27
          </p>
        </div>

        <div className="flex-1 min-w-[280px] max-w-sm text-[#00040f] dark:text-white">
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
          {[
            ['Home', 'Home'],
            ['Skills', 'Skills'],
            ['Projects', 'Projects'],
            ['Contact', 'Contact'],
          ].map(([label, to]) => (
            <Link key={to} to={to} smooth duration={200} offset={-60} className="text-lg cursor-pointer block mb-2 hover:text-slate-500 dark:hover:text-sky-300 hover:font-semibold transition-all duration-200" >
              <FaChevronCircleRight className="inline pr-2" /> {label}
            </Link>
          ))}
        </div>

        <div className="flex-1 min-w-[280px] max-w-sm text-[#00040f] dark:text-white ">
          <h3 className="text-2xl font-bold mb-4">Connect with me</h3>
          <p className="text-base sm:text-lg mb-2">
            <FaPhone className="inline size-5 pr-2" /> +91 81684-70250
          </p>
          <p className="text-base sm:text-lg mb-2">
            <FaEnvelope className="inline size-5 pr-2" /> armanredhu.tech27@gmail.com
          </p>
          <p className="text-base sm:text-lg mb-2">
            <FaMapMarkedAlt className="inline size-5 pr-2" /> Kota, India-325003
          </p>
          <div className="flex text-2xl mt-4 space-x-4">
            <a href="https://github.com/arman61-hub/" className="hover:text-slate-500 dark:hover:text-sky-300"><SiGithub /></a>
            <a href="https://www.linkedin.com/in/arman-redhu-5b14ba293/" className="hover:text-slate-500 dark:hover:text-sky-300"><SiLinkedin /></a>
            <a href="https://www.instagram.com/a_red.hu/" className="hover:text-slate-500 dark:hover:text-sky-300"><SiInstagram /></a>
            {/* <a href="#" className="hover:text-slate-500 dark:hover:text-sky-300"><SiX /></a> */}
            <a href="mailto:armanredhu.tech27@gmail.com" className="hover:text-slate-500 dark:hover:text-sky-300"><SiGmail /></a>
          </div>
        </div>
      </div>

      <p className="text-center text-[#00040f] dark:text-slate-300 text-sm sm:text-base mt-10 pt-4 border-t border-slate-300 dark:border-sky-800 tracking-widest">
        Made with ❤️ by Arman Redhu. All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
