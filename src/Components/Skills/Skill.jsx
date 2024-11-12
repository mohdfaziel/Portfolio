import { motion } from "framer-motion";
import fadeIn from "../../Framer/Fadein.js";
export default function Skill({ title, purpose, logo }) {
  return (
    <motion.div
      variants={fadeIn("", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
      className="flex  hover:bg-active transition-all text-active hover:text-dark2 justify-start gap-2 border-[1px] rounded-2xl px-2 backdrop-blur-md py-2 border-unactive items-center w-full md:w-48"
    >
      <div className="Logo w-11">
        <img
          className="w-[80%] rounded-lg p-1 bg-dark1 h-[80%]"
          src={logo}
          alt=""
        />
      </div>
      <div className="flex flex-col text-left leading-3">
        <h1 className="title ">{title}</h1>
        <p className="Purpose text-unactive text-sm">{purpose}</p>
      </div>
    </motion.div>
  );
}
