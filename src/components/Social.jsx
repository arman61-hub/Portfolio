import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Social = () => {
  const [showSocial, setShowSocial] = useState(true);
  const resumeLink = import.meta.env.VITE_RESUME_LINK;
  
  const checkSectionsInView = () => {
    const sections = ['Home', 'About', 'Education'];
    const buffer = 80;

    const isAnyVisible = sections.some((id) => {
      const section = document.querySelector(`[name='${id}']`);
      if (!section) return false;
      const rect = section.getBoundingClientRect();
      return (
        rect.top < window.innerHeight - buffer &&
        rect.bottom > buffer
      );
    });

    setShowSocial(isAnyVisible);
  };

  useEffect(() => {
    checkSectionsInView(); 
    window.addEventListener('scroll', checkSectionsInView);
    window.addEventListener('resize', checkSectionsInView);

    return () => {
      window.removeEventListener('scroll', checkSectionsInView);
      window.removeEventListener('resize', checkSectionsInView);
    };
  }, []);

  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: 'https://www.linkedin.com/in/arman-redhu-5b14ba293/',
      style: 'rounded-tr-md bg-blue-500',
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      style: 'bg-black',
      href: 'https://github.com/arman61-hub/',
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      style: 'bg-red-500',
      href: 'mailto:armanredhu.tech27@gmail.com',
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      style: 'rounded-br-md bg-gray-500',
      href: resumeLink, 
    },
  ];

  if (!showSocial) return null;

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-10">
      <ul>
        {links.map((link) => (
          <li key={link.id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 text-white ${link.style}`}>
            <a href={link.href} className="flex justify-between items-center w-full" target="_blank" rel="noreferrer">
              {link.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
