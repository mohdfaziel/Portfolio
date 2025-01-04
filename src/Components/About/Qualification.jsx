import fadeIn from "../../Framer/Fadein.js";
import { motion } from "framer-motion";
export default function Qualification({
  year,
  board,
  institute,
  location,
  desc,
  isCurrent,
}) {
  return (
    <div className="relative pt-0 pl-3">
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="text-base md:text-lg text-unactive"
      >
        {year} | {board}
      </motion.div>
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="text-2xl"
      >
        {institute}
      </motion.div>
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="text-sm md:text-base text-unactive"
      >
        {location}
      </motion.div>
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="text-sm md:text-base text-unactive"
      >
        {desc}
      </motion.div>
      {isCurrent && (
        <div className="w-[12px] h-[12px] absolute top-[4.7px] blur-sm -left-[6.65px] animate-pulse rounded-full bg-active"></div>
      )}
      <div className="w-[10px] z-10 h-[10px] absolute top-[5.5px] -left-[5.90px] rounded-full bg-main"></div>
    </div>
  );
}
