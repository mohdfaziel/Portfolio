import { motion } from "framer-motion";
import fadeIn from "../../Framer/Fadein.js";
import Arrow from "./Icons/arrow.png";
import { cf } from "./Icons/icons";
import CerButton from "./CerButton.jsx";
export default function Certificate({ logos, title, desc, proof }) {
  return (
    <motion.div
      variants={fadeIn("", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
      className="md:w-[20rem] backdrop-blur-xl w-full h-[17rem] px-6 py-3 border-dark1 transition-all flex flex-col justify-between items-start  rounded-t-xl bg-gradient-to-t from-dark1 to-dark2"
    >
      <div className="logos flex w-full justify-between items-center">
        <div className="left flex">
          {logos.map((logo, idx) => (
            <img key={idx} className="w-12 md:w-14" src={logo} alt="" />
          ))}
        </div>
        <div className="right">
          <img className="w-8 md:w-10 invert" src={cf} alt="" />
        </div>
      </div>
      <div className="info">
        <h1 className="text-xl md:text-2xl text-active">{title}</h1>
        <p className="text-sm md:text-base text-unactive">{desc}</p>
      </div>
      <a href={proof} target="_blank">
        {/* <button className="btn mb-5 flex gap-[4px] justify-center rounded-2xl items-center px-3 py-1 transition-all bg-main text-dark1">
          <span>Show Credential</span>
          <img className="w-[14px] pt-[1px]" src={Arrow} alt="" />
        </button> */}
        <CerButton/>
      </a>
    </motion.div>
  );
}
