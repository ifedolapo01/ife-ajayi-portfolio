import React from 'react';

const Footer = () => {
  return (
    <div className="footer bg-custom-dark p-4 lg:p-8">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-48">
        <div className="flex flex-col items-start md:items-center">
          <h1 className="text-white text-lg md:text-2xl lg:text-3xl font-bold text-left md:text-center">
            Project Statistics 2024
          </h1>
          <button className="bg-custom-yellow mt-6 text-black text-sm md:text-base lg:text-lg py-2 px-6 rounded-md cursor-pointer hover:brightness-90">
            Know More
          </button>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center text-white font-semibold text-base md:text-xl lg:text-2xl gap-8">
            <p>Website Design</p>
            <p>4</p>
          </div>
          <hr className="border-t border-gray-600" />
          <div className="flex justify-between items-center text-white font-semibold text-base md:text-xl lg:text-2xl">
            <p>Mobile Design</p>
            <p>2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
