import { motion } from "framer-motion";
import fadeIn from "../../Framer/Fadein.js";
import PropTypes from 'prop-types';

export default function Skill({ title, purpose, logo }) {
  return (
    <motion.article
      variants={fadeIn("", 0.3)}
      initial="hidden"
      whileInView={"show"}
       viewport={fadeIn("left", 0.3).viewportOptions}
      className="flex hover:bg-active transition-all text-active hover:text-dark2 justify-start gap-2 md:gap-0 border-[1px] rounded-2xl px-2 backdrop-blur-md py-2 border-unactive items-center w-full md:w-60"
      role="listitem"
      itemScope
      itemType="https://schema.org/TechArticle"
    >
      <div className="Logo w-11 md:w-20">
        <img
          className="w-[80%] rounded-lg p-1 bg-dark1 h-[80%]"
          src={logo}
          alt={`${title} icon`}
          loading="lazy"
          itemProp="image"
        />
      </div>
      <div className="flex flex-col text-left leading-3">
        <h3 
          className="title md:text-lg"
          itemProp="name"
        >
          {title}
        </h3>
        <p 
          className="Purpose text-unactive text-sm"
          itemProp="description"
        >
          {purpose}
        </p>
      </div>
    </motion.article>
  );
}

Skill.propTypes = {
  title: PropTypes.string.isRequired,
  purpose: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired
};
