import React from 'react';
import About_img_tall from '../../assets/About_img_tall.jpg';
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import Footer from './Footer';

const Header = () => {
  return (
    <>
      {/* Horizontal Line with Responsive Spacing */}
      <hr className="ml-6 md:ml-12 lg:ml-24 mr-2 md:mr-0 mt-4 border-t-3 border-custom-brown mb-6 md:mb-0" />

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-5 h-screen items-stretch">
        {/* Image Section (Top on Small Screens) */}
        <div className="md:col-span-2 flex items-center justify-center md:order-2 order-1">
          <img
            src={About_img_tall}
            alt="About Ifedolapo Ajayi"
            className="w-40 h-40 md:w-full md:h-full object-cover rounded-full md:rounded-none"
          />
        </div>

        {/* Left Section */}
        <div className="md:col-span-3 flex flex-col justify-between bg-white md:order-1 order-2">
          {/* Main Content */}
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left p-6 md:ml-6 lg:ml-16 space-y-12">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mt-0 md:mt-10">
              Hi! I Am{' '}
              <span className="relative inline-block -top-1.5 px-6 py-2 bg-custom-blue text-white text-lg md:text-xl rounded-3xl">
                React
              </span>{' '}
              Ifedolapo Ajayi
            </h1>

            {/* Description */}
            <p className="text-sm md:text-base leading-6 md:w-11/12 lg:w-8/12 font-semi-bold">
              Frontend engineer in React and Tailwind CSS, and Java mobile developer, creating seamless, responsive
              applications.
            </p>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 md:pt-4">
              <button className="hire-me px-8 py-3 md:px-16 md:py-5 bg-custom-orange text-white cursor-pointer hover:border-2 border-black">
                Hire Me
              </button>
              <div className="my-resume flex items-center cursor-pointer hover:scale-105 hover:text-custom-orange">
                <span className="px-3 md:px-5 py-3 font-bold">Resume</span>
                <ArrowUpRightIcon className="h-6 w-6 text-black font-bold" />
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16 lg:gap-32 md:pt-8">
              <div>
                <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl">+10</h1>
                <p className="text-sm md:text-base lg:text-lg">Projects Done</p>
              </div>
              <div>
                <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl">Contact</h1>
                <p className="text-sm md:text-base lg:text-lg">ifedolapoajayi0@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Header;
