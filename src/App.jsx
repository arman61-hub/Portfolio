import { useState, useEffect } from "react";
import { PacmanLoader } from "react-spinners";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Social from "./components/Social";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Project from "./components/Projects";
import About from "./components/About";
import Top from "./components/Top";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  
  return (
    <>
      {loading ? (
        <div className="dark bg-[#00040f] text-white flex h-screen justify-center items-center transition-colors duration-300">
          <div className="p-6 rounded-lg bg-opacity-70 backdrop-blur-md shadow-xl text-center">
            <PacmanLoader color="#5f6fff" size={60} />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mt-6 text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"
            >
              Almost there... stay tuned!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-2 text-sm text-gray-400"
            >
              Good things are compiling 🚧
            </motion.p>
          </div>
        </div>
      ) : (
        <div>
          <Top />
          <Navbar />
          <Home />
          <About />
          <Social />
          <Education />
          <Skills />
          <Project />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};
export default App;