import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "../assets/Image.jpg";
import { motion } from "framer-motion";
import fadeIn from "../Framer/Fadein.js";
import Logo from "../assets/logo.svg";
import { MdOutlineDownloading } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import resume from "../assets/resume.pdf";
export default function Home() {
  const [text] = useTypewriter({
    words: ["Web Developer", "Coder", "Programmer"],
    loop: {},
  });
  return (
    <div className="MainHome w-full px-[2rem] md:px-[10rem] text-active py-[1rem] md:py-[5rem] bg-dark1 min-h-screen flex justify-center   items-center">
      <div className="Container max-w-[85rem] gap-20 md:gap-0 h-full md:h-full w-full flex flex-col-reverse md:flex-row justify-center md:justify-between items-center">
        <motion.div
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
              alt=""
            />
            <motion.div
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className="absolute -top-9 -left-10"
            >
              <img width="40px" className="" src={Logo} alt="" />
              <div className="name text-5xl md:text-6xl ">
                Mohd <br />{" "}
                <span className="border-b-4 rounded-sm border-main">Faz</span>
                iel
              </div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="Right w-full md:w-[50%]  h-full flex justify-center items-center gap-3"
        >
          <div className="Info flex flex-col gap-2 justify-center items-start">
            <div className="text-6xl">I'm</div>
            <div className="text-3xl text-main">
              {text}
              <span className="text-main">
                <Cursor cursorStyle="|" />
              </span>
            </div>
            <div className="text-sm text-unactive">
              Aspiring Full-Stack Web Developer. Dedicated to crafting
              cutting-edge, user-centric web solutions with a creative touch.
            </div>
            <a href={resume} target="_blank">
              <button className="flex justify-center hover:scale-105 items-center gap-1 text-dark1 transition-all  bg-main px-3 py-1 rounded-2xl mt-3">
                Resume <MdOutlineDownloading />
              </button>
            </a>
          </div>
          <div className="SocialMedia flex flex-col justify-center items-center gap-5">
            <a href="https://www.linkedin.com/in/mohdfaziel/" target="_blank">
              <FaLinkedinIn className="transition-all hover:scale-150" />
            </a>
            <a href="mailto:mohdfazel969@gmail.com" target="_blank">
              <HiOutlineMail className="transition-all hover:scale-150" />
            </a>
            <a href="https://github.com/mohdfaziel" target="_blank">
              <ImGithub className="transition-all hover:scale-150" />
            </a>
            <a href="https://leetcode.com/u/mohdfaziel/" target="_blank">
              <SiLeetcode className="transition-all hover:scale-150" />
            </a>
            <a
              href="https://www.instagram.com/heyy.faziel?igsh=MWQxdW1yNDJ5ZGVicA=="
              target="_blank"
            >
              <FaInstagram className="transition-all hover:scale-150" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
