import { motion } from "framer-motion";
import fadeIn from "../Framer/Fadein.js";
import { FaLinkedinIn } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import SplitText from "../utils/SplitText.jsx";
export default function Footer() {
  return (
    <div
      id="certificates"
      className="About w-full px-[2rem] md:px-[10rem] py-[4rem] md:py-[5rem] text-active  min-h-[50vh] bg-gradient-to-t from-dark1 to-dark2 flex justify-center items-center"
    >
      <div className="container w-full flex flex-col gap-3 justify-center items-center">
        <SplitText
          text="Imagining, Designing, and Delivering!"
          className="text-5xl py-2 md:text-6xl text-center bg-gradient-to-t from-dark2 to-active bg-clip-text"
          delay={50}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
        />
        <h1 className="text-4xl text-main">Get In Touch!</h1>
        <div className="SocialMedia flex justify-center items-center gap-5 md:gap-7">
          <a href="https://www.linkedin.com/in/mohdfaziel/" target="_blank">
            <FaLinkedinIn className="transition-all hover:scale-150 md:scale-150 md:hover:text-main" />
          </a>
          <a href="mailto:mohdfazel969@gmail.com" target="_blank">
            <HiOutlineMail className="transition-all hover:scale-150 md:scale-150 md:hover:text-main" />
          </a>
          <a href="https://github.com/mohdfaziel" target="_blank">
            <ImGithub className="transition-all hover:scale-150 md:scale-150 md:hover:text-main" />
          </a>
          <a href="https://leetcode.com/u/mohdfaziel/" target="_blank">
            <SiLeetcode className="transition-all hover:scale-150 md:scale-150 md:hover:text-main" />
          </a>
          <a
            href="https://www.instagram.com/heyy.faziel?igsh=MWQxdW1yNDJ5ZGVicA=="
            target="_blank"
          >
            <FaInstagram className="transition-all hover:scale-150 md:scale-150 md:hover:text-main" />
          </a>
        </div>
        <a href="#">
          <h1 className="-rotate-90 text-3xl md:text-4xl">&#10148;</h1>
        </a>
        <p className="text-sm md:text-base text-unactive">
          Design & Built by Mohd Faziel © 2024
        </p>
      </div>
    </div>
  );
}
