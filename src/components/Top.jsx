import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const Top = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    visible && (
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={scrollToTop}
          className="p-3 sm:p-4 rounded-full bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:from-[#00040F] dark:to-[#0B274C] text-[#00040f] dark:text-[#e1e1e1] shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </button>
      </div>
    )
  );
};

export default Top;
