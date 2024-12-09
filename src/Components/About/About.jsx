import React from "react";
import orange from '../../assets/orange.svg';
import blue from '../../assets/blue.svg';
import yellow from '../../assets/yellow.svg';

const About = () => {
  return (
    <div className="h-screen flex flex-col">
      <hr className="ml-6 md:ml-12 lg:ml-24 mr-2 border-t-3 border-custom-brown mb-6 md:mb-0" />
      {/* Section 1 */}
      <div className="flex-1 flex items-center justify-center mt-5">
      <img
            src={orange}
            alt="About Ifedolapo Ajayi"
            className="w-20 h-20 md:w-40 md:h-40 object-contain rounded-full md:ml-20 lg:ml-60"
          />
      <div className="flex-col ml-16">
        <h1 className="text-lg md:text-4xl font-extrabold transition-all duration-500 animated-background text-transparent bg-clip-text bg-gradient-to-r from-custom-orange via-transparent-500 to-orange-500">About Me</h1>
        <div className="w-64 md:w-4/5 lg:w-3/4 mt-2">
        <p className="text-black text-xs md:text-base">Hey there! I'm Ifedolapo, your friendly neighborhood frontend engineer and mobile developer with a knack for turning ideas into cool apps and websites.</p>
        <p className="text-black text-xs md:text-base">I've got a bachelor's degree in environmental botany and palynology (yes, that's a mouthful) and an advanced diploma in software engineering—so I guess you could say I'm good with both plants and code. Oh, and I'm gearing up for my master's degree soon, because why stop now?</p>
        </div>
      </div>
      </div>

      {/* Section 2 */}
      <div className="flex-1 flex items-center justify-center mt-5">
      <img
            src={yellow}
            alt="About Ifedolapo Ajayi"
            className="w-24 h-24 md:w-40 md:h-40 object-contain rounded-full ml-4 md:ml-20 lg:ml-60"
          />
        <div className="flex-col ml-14">
        <h1 className="text-lg md:text-4xl font-extrabold transition-all duration-500 animated-background text-transparent bg-clip-text bg-gradient-to-r from-custom-yellow via-transparent-500 to-amber-500">I've been busy building things like:</h1>
        <div className="w-52 md:w-3/4 mt-2">
        <ul>
          <li className="text-black list-disc text-xs md:text-base">A Bus Management App using Java (because buses deserve good apps too).</li>
          <li className="text-black list-disc text-xs md:text-base">An E-commerce Website using Kotlin (because shopping online is life).</li>
          <li className="text-black list-disc text-xs md:text-base">A Portfolio Website using React (because you're looking at it, duh).</li>
          <li className="text-black list-disc text-xs md:text-base">An Event Management Website (because parties need tech love too).</li>
        </ul>
        <p className="text-black text-xs md:text-base">Before all this tech madness, I worked in a plant nursery, where I learned how to keep plants alive—a skill that doesn't translate to debugging, unfortunately.</p>
        <p className="text-black text-xs md:text-base">When I'm not coding, you can find me knitting (yes, it's a vibe), bingeing on good music, reading books I can't put down, or pretending I can draw.</p>
        </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex-1 flex items-center justify-center mt-5">
      <img
            src={blue}
            alt="About Ifedolapo Ajayi"
            className="w-20 h-20 md:w-40 md:h-40 object-contain rounded-full md:ml-20 lg:ml-60"
          />
        <div className="flex-col ml-16 mt-2">
        <h1 className="text-lg md:text-4xl font-extrabold transition-all duration-500 animated-background text-transparent bg-clip-text bg-gradient-to-r from-custom-blue via-transparent-500 to-purple-500">Why Me?</h1>
        <div className="w-64 md:w-3/4">
        <p className="text-black text-xs md:text-base">I'm loyal, hardworking, and all about creating solutions that make life easier (and more fun!). Whether it's collaborating on a team or building solo, I bring a mix of creativity, dedication, and a dash of humor to the table. Let's make your next project amazing—just don't ask me to fix your plants.</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
