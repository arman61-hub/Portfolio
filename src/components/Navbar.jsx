import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { HiSun, HiMoon } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const links = [
    { id: 1, link: "Home" },
    { id: 2, link: "About" },
    { id: 3, link: "Skills" },
    { id: 4, link: "Projects" },
    { id: 5, link: "Contact" },
  ];

  return (
    <div className="fixed w-full h-20 px-4 flex justify-between items-center bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:from-[#00040F] dark:to-[#0B274C] text-[#00040f] dark:text-[#e1e1e1] shadow-md z-50 transition-colors duration-300">
      <h1 className="text-3xl sm:text-4xl font-signature">Arman</h1>
      <ul className="hidden md:flex gap-6 text-base lg:text-lg">
        {links.map(({ id, link }) => (
          <li key={id} className="cursor-pointer capitalize relative group transition-all duration-300">
            <Link
              to={link}
              smooth
              duration={200}
              offset={-80}
              className="inline-block group-hover:text-sky-500 group-hover:font-semibold transition-all duration-300"
            >
              {link}
              <span className="block h-[2px] max-w-0 group-hover:max-w-full bg-sky-500 transition-all duration-300 mt-1"></span>
            </Link>
          </li>
        ))}
        <li>
          <button onClick={handleTheme} className="text-2xl transition duration-300 hover:scale-110" aria-label="Toggle Theme">
            {theme === "dark" ? <HiSun /> : <HiMoon />}
          </button>
        </li>
      </ul>

      <div className="md:hidden flex items-center gap-4 z-50">
        <button onClick={handleTheme} className="text-2xl transition duration-300" aria-label="Toggle Theme">
          {theme === "dark" ? <HiSun /> : <HiMoon />}
        </button>
        <button onClick={() => setNav(!nav)} aria-label="Toggle Navigation">
          {nav ? <FaTimes size={26} /> : <FaBars size={26} />}
        </button>
      </div>

      {nav && (
        <div className="md:hidden fixed top-0 right-0 w-3/5 sm:w-2/5 h-screen bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:from-[#00040F] dark:to-[#0B274C] text-[#00040f] dark:text-[#e1e1e1] p-6 pt-20 flex flex-col items-start gap-8 shadow-xl transition-all duration-300 z-40">
          {links.map(({ id, link }) => (
            <li key={id} className="text-xl sm:text-2xl capitalize cursor-pointer list-none w-full">
              <Link
                to={link}
                onClick={() => setNav(false)}
                smooth
                duration={200}
                offset={-80}
                className="block w-full px-3 py-2 rounded-md transition-all duration-300 hover:bg-sky-500/20 hover:text-sky-400"
              >
                {link}
              </Link>
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
