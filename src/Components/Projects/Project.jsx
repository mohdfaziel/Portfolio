import { arrow } from "./Logos/projectLogos.js";
import { motion } from "framer-motion";
import fadeIn from "../../Framer/Fadein.js";
import AniButton from "./AniButton.jsx";
import PropTypes from 'prop-types';

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
    <motion.article
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
      className="border-[1px] h-[25rem] md:h-fit flex justify-start backdrop-blur-md items-start md:items-center border-active overflow-hidden relative p-4 md:p-6 rounded-2xl min-h-[50%] w-full"
      role="listitem"
      itemScope
      itemType="https://schema.org/WebSite"
    >
      <div className="Info z-10 flex flex-col gap-3 justify-center items-start w-[100%] md:w-[50%]">
        <div className="Logo w-[4rem] h-[4rem]">
          <img src={logo} className="w-full h-full" alt={`${title} Logo`} />
        </div>
        <a 
          href={git} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label={`View ${title} source code on GitHub`}
        >
          <h3 
            className="text-2xl hover:scale-105 transition-all text-active flex gap-[3px] justify-center items-center"
            itemProp="name"
          >
            <span>{title}</span> 
            <img className="w-4 pt-1" src={arrow} alt="External link arrow" />
          </h3>
        </a>
        <p 
          className="text-sm md:text-base text-justify text-unactive"
          itemProp="description"
        >
          {desc}
        </p>
        <div 
          className="Skills flex justify-start items-center gap-2"
          aria-label="Technologies used"
        >
          {skill1 && <img className="w-6" src={skill1} alt="Technology 1" />}
          {skill2 && <img className="w-6" src={skill2} alt="Technology 2" />}
          {skill3 && <img className="w-6" src={skill3} alt="Technology 3" />}
          {skill4 && <img className="w-6" src={skill4} alt="Technology 4" />}
        </div>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label={`Visit live ${title} website`}
          itemProp="url"
        >
          <AniButton />
        </a>
      </div>
      <img
        src={sc}
        className="rounded-xl w-[25rem] md:w-[40rem] max-w-[45rem] -right-[210px] -bottom-[40px] md:-right-28 md:-bottom-[15px] absolute"
        alt={`${title} project screenshot`}
        loading="lazy"
        itemProp="image"
      />
    </motion.article>
  );
}

Project.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  skill1: PropTypes.string,
  skill2: PropTypes.string,
  skill3: PropTypes.string,
  skill4: PropTypes.string,
  sc: PropTypes.string.isRequired,
  git: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};
