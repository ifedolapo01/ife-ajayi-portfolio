import React from "react";
import orange from '../../assets/orange.svg';
import blue from '../../assets/blue.svg';
import yellow from '../../assets/yellow.svg';

const About = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* Section 1 */}
      <div className="flex-1 bg-orange-500 flex items-center justify-center">
      <img
            src={orange}
            alt="About Ifedolapo Ajayi"
            className="w-40 h-40 md:w-40 md:h-40 object-contain rounded-full ml-60"
          />
      <div className="flex-col ml-16">
        <h1 className="text-white text-4xl font-extrabold">About Me</h1>
        <div className="w-3/4">
        <p className="text-white">Hey there! I'm Ifedolapo, your friendly neighborhood frontend engineer and mobile developer with a knack for turning ideas into cool apps and websites.</p>
        <p className="text-white">I've got a bachelor's degree in environmental botany and palynology (yes, that's a mouthful) and an advanced diploma in software engineering—so I guess you could say I'm good with both plants and code. Oh, and I'm gearing up for my master's degree soon, because why stop now?</p>
        </div>
      </div>
      </div>

      {/* Section 2 */}
      <div className="flex-1 bg-yellow-500 flex items-center justify-center">
      <img
            src={yellow}
            alt="About Ifedolapo Ajayi"
            className="w-40 h-40 md:w-40 md:h-40 object-contain rounded-full ml-60"
          />
        <div className="flex-col ml-16">
        <h1 className="text-white text-4xl font-extrabold">I've been busy building things like:</h1>
        <div className="w-3/4">
        <ul>
          <li className="text-white list-disc">A Bus Management App using Java (because buses deserve good apps too).</li>
          <li className="text-white list-disc">An E-commerce Website using Kotlin (because shopping online is life).</li>
          <li className="text-white list-disc">A Portfolio Website using React (because you're looking at it, duh).</li>
          <li className="text-white list-disc">An Event Management Website (because parties need tech love too).</li>
        </ul>
        <p className="text-white">Before all this tech madness, I worked in a plant nursery, where I learned how to keep plants alive—a skill that doesn't translate to debugging, unfortunately.</p>
        <p className="text-white">When I'm not coding, you can find me knitting (yes, it's a vibe), bingeing on good music, reading books I can't put down, or pretending I can draw.</p>
        </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex-1 bg-blue-500 flex items-center justify-center">
      <img
            src={blue}
            alt="About Ifedolapo Ajayi"
            className="w-40 h-40 md:w-40 md:h-40 object-contain rounded-full ml-60"
          />
        <div className="flex-col ml-16">
        <h1 className="text-white text-4xl font-extrabold">Why Me?</h1>
        <div className="w-3/4">
        <p className="text-white">I'm loyal, hardworking, and all about creating solutions that make life easier (and more fun!). Whether it's collaborating on a team or building solo, I bring a mix of creativity, dedication, and a dash of humor to the table. Let's make your next project amazing—just don't ask me to fix your plants.</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
