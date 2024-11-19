import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header flex items-center justify-between mx-4 md:mx-10 lg:mx-32 my-4">

      <h1 className="logo-name text-5xl font-bold ml-2 lg:ml-0">
        Ifedolapo<span className="text-custom-orange text-6xl">.</span>
      </h1>

      <div className="lg:hidden">
        <button className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                  </svg>
              ) : (
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}>
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                      />
                  </svg>
                  )}
        </button>
      </div>
      <nav
        className={`nav-links flex-col lg:flex-row items-center list-none gap-12 text-xl ${
          isMenuOpen ? 'flex' : 'hidden'
        } lg:flex`}
      >
        <Link to="/" className="mr-4 hover:text-custom-blue">
          Home
        </Link>
        <Link to="/about" className="mr-4 hover:text-custom-blue">
          About
        </Link>
        <Link to="/skills" className="mr-4 hover:text-custom-blue">
          Skills
        </Link>
        <Link to="/projects" className="mr-4 hover:text-custom-blue">
          Projects
        </Link>
      </nav>

      {/* Chat Button (hidden on small screens) */}
      <div className="lets-chat px-7 py-5 border-2 border-gray-800 cursor-pointer delay=500 hover:scale-105 hidden lg:block hover:text-custom-blue">
      <Link to="/contact" className="">Chat With Me</Link>
      </div>
    </div>
  );
};

export default Nav;
