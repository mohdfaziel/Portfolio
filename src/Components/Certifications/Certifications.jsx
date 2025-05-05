import { motion } from "framer-motion";
import fadeIn from "../../Framer/Fadein.js";
import Certificate from "./Certificate";
import { ms, ibm, ln, git } from "./Icons/icons";
import intern from "./intern.pdf";
export default function Certifications() {
  let certificates = [
    {
      logos: [ms, ln],
      title: "MicroSoft and Linkdln",
      desc:
        "Career Essential in Software Development by Microsoft and LinkedIn",
      proof:
        "https://www.linkedin.com/learning/certificates/2cd7389e3a491029e558f5619b7c73ffd2171d928a2065a4b47d07c5acda0ba1",
    },
    {
      logos: [git],
      title: "GitHub Foundations",
      desc:
        "Entry-level certification on GitHub basics like repos, commits, and branching.",
      proof:
        "https://www.credly.com/badges/6cd97587-24c4-4803-b894-3fb62d342c91/public_url",
    },
    {
      logos: [ibm],
      title: "FrontEnd Intern",
      desc: "IBM SkillsBuild Summer Internship Program",
      proof: intern,
    },
  ];
  return (
    <div
      id="certificates"
      className=" w-full px-[2rem] md:px-[10rem] py-[4rem] md:py-[5rem] text-active bg-dark1 min-h-screen flex justify-center items-center"
    >
      <div className="relative container flex flex-col gap-6 justify-center items-start">
        <motion.dev
          variants={fadeIn("", 0.3)}
          initial="hidden"
          whileInView={"show"}
           viewport={fadeIn("left", 0.3).viewportOptions}
          className="title text-4xl md:text-6xl"
        >
          <span className="border-t-4 z-10 border-main">C</span>ertifications
        </motion.dev>
        <div className="certificates w-full justify-start gap-6 flex-wrap items-center flex">
          {certificates.map((certificate, idx) => (
            <Certificate
              key={idx}
              logos={certificate.logos}
              title={certificate.title}
              desc={certificate.desc}
              proof={certificate.proof}
            />
          ))}
        </div>
        <div className="w-[300px] rounded-full h-[300px] absolute blur-3xl animate-customPulse bg-active opacity-20 -top-[150px] -left-[150px]" />
      </div>
    </div>
  );
}
