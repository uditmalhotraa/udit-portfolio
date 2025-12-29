import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import social from "../data/social.json";

import Instagram from "../assets/Instagram";
import Linkedin from "../assets/Linkedin";
import Github from "../assets/Github";

export const Footer = () => {
  const [socialData] = useState(social);

  const getSocialLogo = (socialName) => {
    switch (socialName) {
      case "Github":
        return (
          <Github className="w-[50px] h-[50px] stroke-accent-light dark:stroke-accent-dark" />
        );
      case "Linkedin":
        return (
          <Linkedin className="w-[50px] h-[50px] fill-accent-light dark:fill-accent-dark" />
        );
      case "Instagram":
        return (
          <Instagram className="w-[50px] h-[50px] fill-accent-light dark:fill-accent-dark" />
        );
      default:
        break;
    }
  };
  return (
    <>
      <div className="flex flex-col w-full">
        <motion.div
          layout={false}
          className="flex flex-row justify-center gap-4 flex-wrap w-full h-auto mb-10"
        >
          {socialData.map((socialData) => (
            <a
              tabIndex={0}
              key={socialData.socialIndex}
              className="flex flex-col justify-center items-center shadow-md rounded-2xl w-auto h-auto p-3 cursor-pointer border border-black/10 dark:border-white/20 hover:border-accent-light dark:hover:border-accent-dark backdrop-blur-sm bg-cream dark:bg-black dark:hover:bg-accent-dark/[0.05] hover:bg-accent-light/[0.06]"
              href={socialData.link}
              alt={`${socialData.name} Link`}
              aria-label={`Find Udit at ${socialData.name} platform and connect`}
            >
              {getSocialLogo(socialData.name)}
            </a>
          ))}
        </motion.div>
        <div className="flex flex-col justify-center lg:flex-row lg:gap-x-5 w-full h-auto mb-5">
          <Link to="/terms-and-conditions" className="font-poppins text-md font-thin text-center text-gray dark:text-white tracking-wider leading-relaxed hover:underline cursor-pointer">
            Terms & Conditions
          </Link>
          <Link to="/privacy-policy" className="font-poppins text-md font-thin text-center text-gray dark:text-white tracking-wider leading-relaxed hover:underline cursor-pointer">
            Privacy Policy
          </Link>
        </div>
        <div className="flex flex-col w-full h-auto">
          <p className="font-poppins text-sm font-thin text-center opacity-75 text-gray dark:text-white tracking-wider leading-relaxed">
            Designed, developed, and owned by <br />
            Udit Malhotra
          </p>
        </div>
      </div>
    </>
  );
};
