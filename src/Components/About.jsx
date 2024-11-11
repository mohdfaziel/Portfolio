import { motion } from "framer-motion";
import fadeIn from "../Framer/Fadein.js";
export default function About() {
  return (
    <div
      id="about"
      className="About w-full text-active px-[2rem] md:px-[10rem] py-[3rem] md:py-[5rem] bg-dark2 min-h-screen flex justify-center items-center"
    >
      <div className="Container max-w-[70rem] w-full h-[80%] md:h-full gap-10 md:gap-0 flex md:flex-row flex-col justify-between items-center">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="aboutme pr-10 w-full md:w-[50%] gap-2 flex flex-col items-start"
        >
          <h1 className="text-4xl">
            <span className="border-t-4 border-main">A</span>bout me
          </h1>
          <p className="text-sm text-unactive">
            Hi there! I'm an eager developer who likes to write code and make
            new stuff. I'm working toward a Bachelor of Technology in Computer
            Science Engineering. I'm always willing to learn about and
            experiment with new technologies. I am skilled in many programming
            languages and technologies, including C, Java, JavaScript and React.
            I'm constantly looking for new projects to work on and possibilities
            to interact with other devs. I'm excited to grow as a developer,
            learn new things, and contribute to the tech sector.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="qualifications border-l-2 w-full md:w-[50%] gap-7 flex flex-col items-start"
        >
          <h1 className="text-4xl pl-3">
            <span className="border-t-4 border-main">Q</span>ualifications
          </h1>
          <div className="relative pt-0 pl-3">
            <div className="text-base text-unactive">2020-2021 | JKBOSE</div>
            <div className="text-2xl">Boys HSS</div>
            <div className="text-sm text-unactive">Bhadarwah, J&K</div>
            <div className="text-sm text-unactive">
              Completed my 12th grade with 96% in the Science Stream.
            </div>
            <div className="w-[10px] h-[10px] absolute top-[5.5px] -left-[5.5px] rounded-full bg-main"></div>
          </div>
          <div className="relative pl-3">
            <div className="text-base text-unactive">2022-2026 | AKTU</div>
            <div className="text-2xl">
              Galgotias College of Engineering and Technology
            </div>
            <div className="text-sm text-unactive">Noida, Uttar Pradesh</div>
            <div className="text-sm text-unactive">
              Currently pursuing a Bachelor of Technology in Computer Science
              Engineering
            </div>
            <div className="w-[12px] h-[12px] absolute top-[4.7px] blur-sm -left-[6.65px] animate-pulse rounded-full bg-active"></div>
            <div className="w-[10px] z-10 h-[10px] absolute top-[5.5px] -left-[5.5px] rounded-full bg-main"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
