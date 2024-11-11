import { GoArrowUpRight } from "react-icons/go";
import {arrow} from './Logos/projectLogos.js';
export default function Project({logo,title,desc,skill1,skill2,skill3,sc,git,link}) {
  return (
    <div className=" border-[1px] flex justify-start items-center border-active overflow-hidden relative px-8 py-8 rounded-2xl min-h-[50%] w-full">
      <div className="Info z-10 flex flex-col gap-3 justify-center items-start w-[100%] md:w-[50%]">
        <div className="Logo">
          <img src={logo} alt="" />
        </div>
       <a href={git} target="_blank"> <h1 className="text-2xl hover:scale-105 transition-all text-active flex gap-[3px] justify-center items-center"><span>{title}</span> <img className="w-4 pt-1" src={arrow} alt="" /></h1></a>
        <p className=" text-sm text-unactive">
        {desc}
        </p>
        <div className="Skills flex justify-start items-center gap-2">
          <img className="w-6" src={skill1} alt="" />
          <img className="w-6" src={skill2} alt="" />
          <img className="w-6" src={skill3} alt="" />
        </div>
        <a href={link} target="_blank"><button className="text-xl transition-all  hover:scale-105 text-dark1 w-16 mt-3 bg-main px-3 rounded-3xl py-1">
          Live
        </button></a>
      </div>
      <img src={sc} className="rounded-xl w-[25rem]  md:w-[30rem] max-w-[30rem] -right-[220px] -bottom-[50px] md:-right-20 md:-bottom-[15px] absolute" alt="" />
    </div>
  );
}
