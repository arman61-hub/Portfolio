import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { Home, User, Code, FolderOpen, Mail, GraduationCap, Menu, X, Sun, Moon } from 'lucide-react';

const navLinks = [
  { name: 'Home', to: 'Home', icon: <Home size={18} /> },
  { name: 'About', to: 'About', icon: <User size={18} /> },
  { name: 'Education', to: 'Education', icon: <GraduationCap size={18} /> },
  { name: 'Skills', to: 'Skills', icon: <Code size={18} /> },
  { name: 'Projects', to: 'Projects', icon: <FolderOpen size={18} /> },
  { name: 'Contact', to: 'Contact', icon: <Mail size={18} /> },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [activeLink, setActiveLink] = useState('Home');

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
  };

  useEffect(() => {
    document.documentElement.classList.add('dark');
    setActiveLink('Home');
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      navLinks.forEach(({ to }) => {
        const section = document.getElementById(to);
        if (section) {
          const { top, height } = section.getBoundingClientRect();
          if (top <= 150 && top + height >= 150) {
            setActiveLink(to);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-10%); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-slideDown {
            animation: slideDown 0.3s ease-out forwards;
          }
        `}
      </style>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/30 dark:bg-black/30 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="text-4xl font-bold font-[Charm] bg-gradient-to-r from-[#5f6fff] via-[#7f53ff] to-[#00cfc8] text-transparent bg-clip-text">
              Arman
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-1 justify-center space-x-6">
              {navLinks.map(({ name, to, icon }) => (
                <Link
                  key={name}
                  to={to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-60}
                  onSetActive={() => setActiveLink(to)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium cursor-pointer transition-all duration-300 ${
                    activeLink === to
                      ? 'text-[#5f6fff] bg-[#5f6fff1a] dark:text-[#5f6fff]'
                      : 'text-gray-800 dark:text-gray-300 hover:text-[#7c3aed] dark:hover:text-[#a78bfa]'
                  }`}
                >
                  {icon}
                  <span>{name}</span>
                </Link>
              ))}
            </div>

            {/* Theme Toggle (always visible on right) */}
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-xl transition-all duration-300 ${
                  darkMode
                    ? 'text-yellow-400 hover:bg-gray-800/50 hover:text-yellow-300'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
                aria-label="Toggle theme"
              >
                {darkMode ? (
                  <Sun className="h-5 w-5 transition-transform duration-300 hover:rotate-180" />
                ) : (
                  <Moon className="h-5 w-5 transition-transform duration-300 hover:rotate-12" />
                )}
              </button>

              {/* Mobile Menu Icon */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-800 dark:text-white lg:hidden"
              >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {menuOpen && (
            <div className="lg:hidden animate-slideDown py-4 rounded-xl bg-white/30 dark:bg-black/30 backdrop-blur-lg shadow-lg">
              <div className="flex flex-col space-y-3 px-4">
                {navLinks.map(({ name, to, icon }) => (
                  <Link
                    key={name}
                    to={to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-60}
                    onClick={() => {
                      setMenuOpen(false);
                      setActiveLink(to);
                    }}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-md font-medium transition cursor-pointer ${
                      activeLink === to
                        ? 'text-[#5f6fff] bg-[#5f6fff1a] dark:text-[#5f6fff]'
                        : 'text-gray-800 dark:text-white hover:text-[#5f6fff] dark:hover:text-[#a78bfa]'
                    }`}
                  >
                    {icon}
                    <span>{name}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}