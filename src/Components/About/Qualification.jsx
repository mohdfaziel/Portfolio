import fadeIn from "../../Framer/Fadein.js";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { TextGenerateEffect } from "../../utils/TextGenerator/TextGenerateEffect.jsx";

export default function Qualification({
  year,
  board,
  institute,
  location,
  desc,
  isCurrent,
}) {
  return (
    <article
      className="relative  pt-0 pl-3"
      role="listitem"
      itemScope
      itemType="https://schema.org/EducationalOrganization"
    >
      <div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={fadeIn("left", 0.3).viewportOptions}
        className="text-base md:text-lg text-unactive"
      >
        <time itemProp="startDate">{year}</time> |{" "}
        <span itemProp="award">{board}</span>
      </div>
      <motion.h3
        variants={fadeIn("", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={fadeIn("left", 0.3).viewportOptions}
        className="text-2xl"
        itemProp="name"
      >
        {institute}
      </motion.h3>
      <div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={fadeIn("left", 0.3).viewportOptions}
        className="text-sm md:text-base text-unactive"
        itemProp="address"
      >
        {location}
      </div>
      <TextGenerateEffect
        words={desc}
        duration={0.05}
        staggerDelay={0.06}
        filter={true}
        threshold={0.4}
        className="" // Added custom className prop
      />
      {isCurrent && (
        <div
          className="w-[10px] h-[10px] absolute top-[8.7px] blur-sm -left-[5.65px] animate-pulse rounded-full bg-active"
          aria-hidden="true"
        ></div>
      )}
      <div
        className="w-[8px] z-10 h-[8px] absolute top-[9.8px] -left-[4.90px] rounded-full bg-main"
        aria-hidden="true"
      ></div>
    </article>
  );
}

Qualification.propTypes = {
  year: PropTypes.string.isRequired,
  board: PropTypes.string.isRequired,
  institute: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  isCurrent: PropTypes.bool.isRequired,
};
