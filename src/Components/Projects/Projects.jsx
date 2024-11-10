import Project from "./Project";
import Logo from "../Projects/Logo.svg";
import { Portfolio } from "./Images/ScreenShots";
import {
  js,
  css,
  html,
  react,
  tw,
  vite,
} from "../Skills/Icons/Icons";
export default function Projects() {
  return (
    <div
      id="projects"
      className="About w-full px-[2rem]  md:px-[10rem] py-[3rem] md:py-[5rem] text-active bg-dark1 min-h-screen flex justify-center items-center"
    >
      <div className="w-full flex max-w-[70rem] flex-col justify-center gap-6 items-start">
      <h1 className="text-4xl">
        <span className="border-t-4 text-left border-main">P</span>rojects
      </h1>
      <div className="Projects w-full flex justify-start gap-6 flex-wrap">
        <Project
          logo={Logo}
          title="Portfolio"
          desc="This portfolio website showcases my Web development skills using React, Tailwind, and JavaScript, featuring diverse projects and a focus on user-centric design."
          skill1={js}
          skill2={react}
          skill3={tw}
          sc={Portfolio}
        />
      </div>
      </div>
    </div>
  );
}
