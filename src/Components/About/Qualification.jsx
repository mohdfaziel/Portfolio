import fadeIn from "../../Framer/Fadein.js";
import { motion } from "framer-motion";
import PropTypes from 'prop-types';

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
      className="relative pt-0 pl-3" 
      role="listitem"
      itemScope 
      itemType="https://schema.org/EducationalOrganization"
    >
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
         viewport={fadeIn("left", 0.3).viewportOptions}
        className="text-base md:text-lg text-unactive"
      >
        <time itemProp="startDate">{year}</time> | <span itemProp="award">{board}</span>
      </motion.div>
      <motion.h3
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
         viewport={fadeIn("left", 0.3).viewportOptions}
        className="text-2xl"
        itemProp="name"
      >
        {institute}
      </motion.h3>
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
         viewport={fadeIn("left", 0.3).viewportOptions}
        className="text-sm md:text-base text-unactive"
        itemProp="address"
      >
        {location}
      </motion.div>
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
         viewport={fadeIn("left", 0.3).viewportOptions}
        className="text-sm md:text-base text-unactive"
        itemProp="description"
      >
        {desc}
      </motion.div>
      {isCurrent && (
        <div 
          className="w-[12px] h-[12px] absolute top-[4.7px] blur-sm -left-[6.65px] animate-pulse rounded-full bg-active"
          aria-hidden="true"
        ></div>
      )}
      <div 
        className="w-[10px] z-10 h-[10px] absolute top-[5.5px] -left-[5.90px] rounded-full bg-main"
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
  isCurrent: PropTypes.bool.isRequired
};
