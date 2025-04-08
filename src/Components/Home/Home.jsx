import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "../../assets/Image.jpg";
import { motion } from "framer-motion";
import fadeIn from "../../Framer/Fadein.js";
import Logo from "../../assets/logo.svg";
import { MdOutlineDownloading } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import resume from "../../assets/resume.pdf";
import ResumeButton from "./ResumeButton.jsx";
import SEO from "../SEO/SEO";

export default function Home() {
  const [text] = useTypewriter({
    words: ["Web Developer", "Coder", "Programmer"],
    loop: {},
  });

  return (
    <>
      <SEO 
        title="Mohd Faziel - Web Developer Portfolio | Home"
        description="MERN Stack Developer specializing in creating cutting-edge, user-centric web solutions. Explore my projects and skills in web development."
      />
      <section 
        className="MainHome w-full px-[2rem] md:px-[10rem] text-active py-[1rem] md:py-[5rem] bg-dark1 min-h-screen flex justify-center items-center"
        aria-label="Home Section"
      >
        <div className="Container max-w-[85rem] gap-20 md:gap-0 h-full md:h-full w-full flex flex-col-reverse md:flex-row justify-center md:justify-center items-center">
          <motion.article
            variants={fadeIn("", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="left w-full md:w-[50%] h-full flex justify-center items-center"
          >
            <div className="w-[70%] md:w-[60%] relative">
              <motion.img
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.1 }}
                width="100%"
                className="rounded-xl"
                src={Image}
                alt="Mohd Faziel - Professional Portrait"
                loading="eager"
              />
              <motion.div
                variants={fadeIn("down", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.1 }}
                className="absolute -top-9 md:-top-16 -left-10"
              >
                <img width="40px" className="md:w-[70px]" src={Logo} alt="Personal Logo" />
                <h1 className="name text-5xl md:text-6xl">
                  Mohd <br />{" "}
                  <span className="border-b-4 rounded-sm border-main">Faz</span>
                  iel
                </h1>
              </motion.div>
            </div>
          </motion.article>
          <motion.article
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="Right w-full md:w-[50%] h-full flex justify-start items-center gap-3 md:gap-12"
          >
            <div className="Info flex flex-col gap-2 justify-center items-start">
              <h2 className="text-6xl md:text-7xl">I'm</h2>
              <p className="text-3xl md:text-6xl text-main" role="text" aria-label="Professional roles">
                {text}
                <span className="text-main">
                  <Cursor cursorStyle="|" />
                </span>
              </p>
              <p className="text-sm md:text-lg text-justify w-[18rem] md:w-[30rem] text-unactive">
                MERN Developer. Dedicated to crafting
                cutting-edge, user-centric web solutions with a creative touch.
              </p>
              <a href={resume} target="_blank" rel="noopener noreferrer" aria-label="Download Resume">
                <ResumeButton />
              </a>
            </div>
            <nav className="SocialMedia flex flex-col justify-center items-center gap-5 md:gap-7" aria-label="Social Media Links">
              <a href="https://www.linkedin.com/in/mohdfaziel/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <FaLinkedinIn className="transition-all md:scale-150 md:hover:text-main hover:scale-150" />
              </a>
              <a href="mailto:mohdfazel969@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email Contact">
                <HiOutlineMail className="transition-all md:scale-150 md:hover:text-main hover:scale-150" />
              </a>
              <a href="https://github.com/mohdfaziel" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <ImGithub className="transition-all md:scale-150 md:hover:text-main hover:scale-150" />
              </a>
              <a href="https://leetcode.com/u/mohdfaziel/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode Profile">
                <SiLeetcode className="transition-all md:scale-150 md:hover:text-main hover:scale-150" />
              </a>
              <a href="https://www.instagram.com/heyy.faziel?igsh=MWQxdW1yNDJ5ZGVicA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
                <FaInstagram className="transition-all md:scale-150 md:hover:text-main hover:scale-150" />
              </a>
            </nav>
          </motion.article>
        </div>
      </section>
    </>
  );
}
