import { arrow } from "./Logos/projectLogos.js";
import { motion } from "framer-motion";
import fadeIn from "../../Framer/Fadein.js";
import AniButton from "./AniButton.jsx";
export default function Project({
  logo,
  title,
  desc,
  skill1 = false,
  skill2 = false,
  skill3 = false,
  skill4 = false,
  sc,
  git,
  link,
}) {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
      className=" border-[1px] h-[25rem] md:h-fit flex justify-start backdrop-blur-md items-start md:items-center border-active overflow-hidden relative p-4 md:p-6 rounded-2xl min-h-[50%] w-full"
    >
      <div className="Info z-10 flex flex-col gap-3 justify-center items-start w-[100%] md:w-[50%]">
        <div className="Logo w-[4rem] h-[4rem]">
          <img src={logo} className="w-full h-full" alt="" />
        </div>
        <a href={git} target="_blank">
          {" "}
          <h1 className="text-2xl hover:scale-105 transition-all text-active flex gap-[3px] justify-center items-center">
            <span>{title}</span> <img className="w-4 pt-1" src={arrow} alt="" />
          </h1>
        </a>
        <p className=" text-sm md:text-base text-justify text-unactive">{desc}</p>
        <div className="Skills flex justify-start items-center gap-2">
          {skill1 && <img className="w-6" src={skill1} alt="" />}
          {skill2 && <img className="w-6" src={skill2} alt="" />}
          {skill3 && <img className="w-6" src={skill3} alt="" />}
          {skill4 && <img className="w-6" src={skill4} alt="" />}
        </div>
        <a href={link} target="_blank">
          <AniButton />
        </a>
      </div>
      <img
        src={sc}
        className="rounded-xl w-[25rem]  md:w-[40rem] max-w-[45rem] -right-[210px] -bottom-[40px] md:-right-28 md:-bottom-[15px] absolute"
        alt=""
      />
    </motion.div>
  );
}
