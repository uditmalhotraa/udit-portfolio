import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import social from "../data/social.json";

import Instagram from "../assets/Instagram";
import Linkedin from "../assets/Linkedin";
import Youtube from "../assets/Youtube";

export const Footer = () => {
  const [socialData] = useState(social);

  const getSocialLogo = (socialName) => {
    switch (socialName) {
      case "Linkedin":
        return (
          <Linkedin className="w-[50px] h-[50px] fill-ink-dark group-hover:fill-brass-dark" />
        );
      case "Youtube":
        return (
          <Youtube className="w-[50px] h-[50px] fill-ink-dark group-hover:fill-brass-dark" />
        );
      case "Instagram":
        return (
          <Instagram className="w-[50px] h-[50px] fill-ink-dark group-hover:fill-brass-dark" />
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
              className="flex flex-col justify-center items-center group shadow-md rounded-2xl w-auto h-auto p-3 cursor-pointer border border-rule-dark hover:border-brass-dark backdrop-blur-sm bg-panel-dark hover:bg-panel-dark/[0.05]"
              href={socialData.link}
              alt={`${socialData.name} Link`}
              aria-label={`Find Udit at ${socialData.name} platform and connect`}
            >
              {getSocialLogo(socialData.name)}
            </a>
          ))}
        </motion.div>
        <div className="flex flex-col justify-center lg:flex-row lg:gap-x-5 gap-y-3 w-full h-auto mb-5">
          <Link
            to="/terms-and-conditions"
            className="font-body text-base font-thin text-center text-ink-dark leading-relaxed underline cursor-pointer"
          >
            Terms & Conditions
          </Link>
          <Link
            to="/privacy-policy"
            className="font-body text-base font-thin text-center text-ink-dark leading-relaxed underline cursor-pointer"
          >
            Privacy Policy
          </Link>
        </div>
        <div className="flex flex-col w-full h-auto gap-2 mb-2">
          <p className="font-body text-md font-thin text-center opacity-75 text-ink-dark leading-relaxed">
            Name: Udit Malhotra
          </p>
          <p className="font-body text-md font-thin text-center opacity-75 text-ink-dark leading-relaxed">
            Email: contact@uditmalhotra.in
          </p>
        </div>
        <div className="flex flex-col w-full h-auto">
          <p className="font-body text-md font-thin text-center opacity-75 text-ink-dark leading-relaxed">
            Designed, developed, and owned by <br />
            Udit Malhotra
          </p>
        </div>
      </div>
    </>
  );
};
