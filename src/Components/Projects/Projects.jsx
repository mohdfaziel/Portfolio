import { motion } from "framer-motion";
import fadeIn from "../../Framer/Fadein.js";
import Project from "./Project";
import { Logo} from "./Logos/projectLogos.js";
import { Portfolio } from "./Images/ScreenShots";
import { js, css, html, react, tw, vite } from "../Skills/Icons/Icons";
export default function Projects() {
  return (
    <div
      id="projects"
      className="About w-full px-[2rem]  md:px-[10rem] py-[3rem] md:py-[5rem] text-active bg-dark1 min-h-screen flex justify-center items-center"
    >
      <div
        className=" relative w-full flex max-w-[70rem] flex-col justify-center gap-6 items-start"
      >
        <motion.h1
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="text-4xl"
        >
          <span className="border-t-4 text-left border-main">P</span>rojects
        </motion.h1>
        <div className="Projects w-full flex justify-start gap-6 flex-wrap">
          <Project
            logo={Logo}
            title="Portfolio"
            desc="This portfolio website showcases my Web development skills using React, Tailwind, and JavaScript, featuring diverse projects and a focus on user-centric design."
            skill1={js}
            skill2={react}
            skill3={tw}
            sc={Portfolio}
            git="https://github.com/mohdfaziel/Portfolio-New"
            link="https://faziel.vercel.app/"
          />
        </div>
      <div className="w-[300px] rounded-full h-[300px] absolute blur-3xl bg-active opacity-20 -top-[85px] -right-[150px]" />
      </div>
    </div>
  );
}
