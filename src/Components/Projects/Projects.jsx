import { motion } from "framer-motion";
import fadeIn from "../../Framer/Fadein.js";
import Project from "./Project";
import { bakes, blog, honey, Logo} from "./Logos/projectLogos.js";
import { Portfolio, Bakery,Blog, Honey } from "./Images/ScreenShots";
import { js, css, html, react, tw, firebase,vite,appwrite ,framer, express} from "../Skills/Icons/Icons";
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
          className="text-4xl md:text-6xl"
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
            logo={blog}
            title="Blog WebApp"
            desc="Blog WebApp is a web application for uploading and viewing blog posts. Built using React.js and Appwrite, it features secure authentication, intuitive navigation, and smooth performance"
            skill1={react}
            skill2={tw}
            skill3={appwrite}
            sc={Blog}
            git="https://github.com/mohdfaziel/BlogApp"
            link="https://blog-app-faziel.vercel.app/"
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
            title="RoyNect"
            desc="Roynect is a premium honey store from Bhadarwah, offering a seamless shopping experience with secure checkout, order tracking, and easy management."
            skill1={react}
            skill2={tw}
            skill3={firebase}
            skill4={express}
            sc={Honey}
            git="https://github.com/mohdfaziel/RoyNect"
            link="https://roynect.vercel.app/product"
          />
        </div>
      <div className="w-[300px] rounded-full h-[300px] absolute animate-customPulse blur-3xl bg-active opacity-20 -top-[85px] -right-[150px]" />
      </div>
    </div>
  );
}
