import { motion } from "framer-motion";
import fadeIn from "../../Framer/Fadein.js";
import {
  js,
  c,
  j,
  py,
  css,
  figma,
  git,
  github,
  html,
  mi,
  react,
  tw,
  firebase,
  appwrite,
  vite,
  mongo,
  express,
  framer
} from "./Icons/Icons";
import Skill from "./Skill.jsx";
import SkillButton from "../Certifications/CerButton.jsx";
import SEO from "../SEO/SEO";

export default function Skills() {
  const skills = [
    { title: "JavaScript", purpose: "Interaction", logo: js },
    { title: "C", purpose: "Programming", logo: c },
    { title: "Java", purpose: "Programming", logo: j },
    { title: "Python", purpose: "Programming", logo: py },
    { title: "CSS", purpose: "User Interface", logo: css },
    { title: "Figma", purpose: "Design Tool", logo: figma },
    { title: "Git", purpose: "Versioning", logo: git },
    { title: "Github", purpose: "Collaboration", logo: github },
    { title: "HTML", purpose: "Structure", logo: html },
    { title: "Material UI", purpose: "Components", logo: mi },
    { title: "React", purpose: "FrameWork", logo: react },
    { title: "Express", purpose: "FrameWork", logo: express },
    { title: "MongoDB", purpose: "DataBase", logo: mongo },
    { title: "Tailwind", purpose: "User Interface", logo: tw },
    { title: "Vite", purpose: "Bundling", logo: vite },
    { title: "Appwrite", purpose: "BaaS", logo: appwrite },
    { title: "Firebase", purpose: "BaaS", logo: firebase },
    { title: "Framer Motion", purpose: "Animation", logo: framer },
  ];

  return (
    <>
      <SEO 
        title="Mohd Faziel - Technical Skills & Tools"
        description="Explore my technical skills and tools including JavaScript, React, Node.js, and modern web development technologies."
      />
      <section
        id="skills"
        className="About w-full px-[2rem] md:px-[10rem] py-[4rem] md:py-[5rem] text-active bg-dark2 min-h-screen flex justify-center items-center"
        aria-label="Skills Section"
      >
        <div className="relative Container w-full max-w-[70rem] gap-7 h-full flex flex-col justify-center items-Start">
          <motion.header
            variants={fadeIn("", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={fadeIn("", 0.3).viewportOptions}
            className="Upper"
          >
            <h2 className="text-4xl md:text-6xl text-active">
              <span className="border-t-4 z-10 border-main">E</span>ssential Tools I
              use
            </h2>
            <p 
              className="z-10 text-sm text-justify md:text-lg text-unactive"
              itemProp="description"
            >
              Discover the powerful tools and technologies I use to create
              exceptional, high-performing websites & applications.
            </p>
          </motion.header>
          <div 
            className="Lower w-full flex flex-wrap justify-start items-center gap-3 md:gap-8"
            role="list"
            aria-label="Skills List"
          >
            {skills.map((skill, idx) => (
              <Skill
                key={idx}
                title={skill.title}
                purpose={skill.purpose}
                logo={skill.logo}
              />
            ))}
          </div>
          <div 
            className="w-[300px] rounded-full h-[300px] animate-customPulse absolute blur-3xl bg-active opacity-20 -top-[150px] -left-[150px]"
            aria-hidden="true"
          />
        </div>
      </section>
    </>
  );
}
