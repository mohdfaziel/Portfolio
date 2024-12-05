import { motion } from "framer-motion";
import fadeIn from "../../Framer/Fadein.js";
import Project from "./Project";
import { bakes, honey, Logo} from "./Logos/projectLogos.js";
import { Portfolio, Bakery, Honey } from "./Images/ScreenShots";
import { js, css, html, react, tw, vite,appwrite ,framer} from "../Skills/Icons/Icons";
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
            skill1={react}
            skill2={tw}
            skill3={framer}
            sc={Portfolio}
            git="https://github.com/mohdfaziel/Portfolio-New"
            link="https://faziel.vercel.app/"
          />
          <Project
            logo={bakes}
            title="Aatiqa Bakes"
            desc="A charming and modern bakery website built using Tailwind CSS, React, and Framer Motion, designed to provide an inviting and interactive experience for customers."
            skill1={react}
            skill2={tw}
            skill3={framer}
            sc={Bakery}
            git="https://github.com/mohdfaziel/Aatiqa-Bakes-Cakes"
            link="https://aatiqa-bakes-cakes.vercel.app/"
          />
          <Project
            logo={honey}
            title="Dawood BeeKeeper"
            desc="Dawood Beekeeper is an online store for selling pure, natural honey. I built it using React for the front end and Appwrite for the back end to make it easy for customers to browse and buy my honey securely."
            skill1={react}
            skill2={tw}
            skill3={appwrite}
            sc={Honey}
            git="https://github.com/mohdfaziel/E-Commerce-Honey-Selling-Website-"
            link="https://dawood-beekeeper.vercel.app/"
          />
        </div>
      <div className="w-[300px] rounded-full h-[300px] absolute blur-3xl bg-active opacity-20 -top-[85px] -right-[150px]" />
      </div>
    </div>
  );
}
