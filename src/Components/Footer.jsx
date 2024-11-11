import { motion } from "framer-motion";
import fadeIn from "../Framer/Fadein.js";
import { FaLinkedinIn } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
export default function Footer() {
  return (
    <div
      id="certificates"
      className="About w-full px-[2rem] md:px-[10rem] py-[4rem] md:py-[5rem] text-active  min-h-[50vh] bg-gradient-to-t from-dark1 to-dark2 flex justify-center items-center"
    >
      <motion.dev
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="container w-full flex flex-col gap-3 justify-center items-center"
      >
        <h1 className="text-5xl text-center bg-gradient-to-t from-dark2 to-active bg-clip-text text-transparent">
          Imagining, Designing, and Delivering!
        </h1>
        <h1 className="text-4xl text-main">Get In Touch!</h1>
        <div className="SocialMedia flex justify-center items-center gap-5">
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
        <a href="#">
          <h1 className="-rotate-90 text-2xl">&#10148;</h1>
        </a>
        <p className="text-sm text-unactive">
          Design & Built by Mohd Faziel © 2024
        </p>
      </motion.dev>
    </div>
  );
}
