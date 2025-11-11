import { motion } from "framer-motion";
import fadeIn from "../../Framer/Fadein.js";
import Project from "./Project";
import { bakes, blog, ecometer, hiv, honey, Logo } from "./Logos/projectLogos.js";
import { Portfolio, Bakery, Blog, Honey, Hiv, Ecometer } from "./Images/ScreenShots";
import {
  js,
  css,
  html,
  react,
  tw,
  firebase,
  vite,
  appwrite,
  framer,
  express,
  ts,
  mongo,
  python,
  node,
} from "../Skills/Icons/Icons";

export default function Projects() {
  return (
    <>
      <section
        id="projects"
        className="About w-full px-[2rem] md:px-[10rem] py-[3rem] md:py-[5rem] text-active bg-dark1 min-h-screen flex justify-center items-center"
        aria-label="Projects Section"
      >
        <div className="relative w-full flex max-w-[70rem] flex-col justify-center gap-6 items-start">
          <motion.h2
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={fadeIn("left", 0.3).viewportOptions}
            className="text-4xl md:text-6xl"
          >
            <span className="border-t-4 text-left border-main">P</span>rojects
          </motion.h2>
          <div
            className="Projects w-full flex justify-center gap-6 flex-wrap"
            role="list"
            aria-label="Project List"
          >
            <Project
              logo={ecometer}
              title="EcoMeter"
              desc="EcoMeter is an ML-powered tool that predicts vehicle CO2 emissions based on car specifications. Compare different vehicles' environmental impact to make eco-conscious automotive decisions."
              skill1={react}
              skill2={mongo}
              skill3={node}
              skill4={python}
              sc={Ecometer}
              git="https://github.com/mohdfaziel/EcoMeter"
              link="https://ecometer-frontend.vercel.app/"
            />
            <Project
              logo={honey}
              title="RoyNect"
              desc="Roynect is a premium honey store from Bhadarwah, offering a seamless shopping experience with secure checkout, order tracking, and easy management."
              skill1={react}
              skill2={tw}
              skill3={firebase}
              skill4={node}
              sc={Honey}
              git="https://github.com/mohdfaziel/RoyNect"
              link="https://roynect.vercel.app/"
            />
            <Project
              logo={hiv}
              title="HIV Quest"
              desc="HIV Quest is an interactive HIV/AIDS education platform offering multilingual modules, engaging games, progress tracking, and a user-friendly, mobile-responsive experience."
              skill1={react}
              skill2={tw}
              skill3={ts}
              skill4={firebase}
              sc={Hiv}
              git="https://github.com/mohdfaziel/HIV-Quest"
              link="https://hivquest.vercel.app/"
            />
          </div>
          <div
            className="w-[300px] rounded-full h-[300px] absolute animate-customPulse blur-3xl bg-active opacity-20 -top-[85px] -right-[150px]"
            aria-hidden="true"
          />
        </div>
      </section>
    </>
  );
}
