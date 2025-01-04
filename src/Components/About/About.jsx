import { motion } from "framer-motion";
import fadeIn from "../../Framer/Fadein.js";
import Qualification from "./Qualification.jsx";
export default function About() {
  const qualifications = [
    {
      year : '2020-2021',
      board : 'JKBOSE',
      institute : 'Boys HSS',
      location : 'Bhadarwah, J&K',
      desc : 'Completed my 12th grade with 96% in the Science Stream.',
      isCurrent : false
    },
    {
      year : '2022-2026',
      board : 'AKTU',
      institute : 'Galgotias College of Engineering and Technology',
      location : 'Noida, Uttar Pradesh',
      desc : 'Currently pursuing a Bachelor of Technology in Computer Science Engineering',
      isCurrent : true
    }
  ]
  return (
    <div
      id="about"
      className="About w-full text-active px-[2rem] md:px-[10rem] py-[3rem] md:py-[5rem] bg-dark2 min-h-screen flex justify-center items-center"
    >
      <div className="Container max-w-[70rem] w-full h-[80%] md:h-full gap-10 md:gap-0 flex md:flex-row flex-col justify-between items-center">
        <div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="aboutme pr-10 w-full md:w-[50%] gap-2 flex flex-col items-start"
        >
          <motion.h1
            variants={fadeIn("", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="text-4xl md:text-6xl"
          >
            <span className="border-t-4 border-main">A</span>bout me
          </motion.h1>
          <motion.p
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="text-sm md:text-lg text-justify text-unactive"
          >
            Hi there! I'm an eager developer who likes to write code and make
            new stuff. I'm working toward a Bachelor of Technology in Computer
            Science Engineering. I'm always willing to learn about and
            experiment with new technologies. I am skilled in many programming
            languages and technologies, including C, Java, JavaScript and React.
            I'm constantly looking for new projects to work on and possibilities
            to interact with other devs. I'm excited to grow as a developer,
            learn new things, and contribute to the tech sector.
          </motion.p>
        </div>
        <div className="qualifications border-l-2 w-full md:w-[50%] gap-7 flex flex-col items-start">
          <motion.h1
            variants={fadeIn("", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="text-4xl md:text-6xl pl-3"
          >
            <span className="border-t-4 border-main">Q</span>ualifications
          </motion.h1>
          {
            qualifications.map((qual)=> <Qualification year={qual.year} board={qual.board} institute={qual.institute} location={qual.location} desc={qual.desc} isCurrent={qual.isCurrent}/>)
          }
        </div>
      </div>
    </div>
  );
}
