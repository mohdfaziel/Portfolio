import { IoPerson } from "react-icons/io5";
import { PiCertificate } from "react-icons/pi";
import { GoLightBulb } from "react-icons/go";
import { IoIosApps } from "react-icons/io";
import logo from "../assets/logo.svg";
import Ellipse from '../assets/Ellipse.svg';
import { useState } from "react";
import Item from "./Item";
export default function NavBar() {
  const [activeLink, setActiveLink] = useState(null);
  const handleClick = (id) => {
    setActiveLink(id);
  };
  return (
    <>
      <div className="fixed z-20 max-[500px]:hidden top-2 w-full flex font-poppins justify-center items-center h-[4rem] bg-secondary">
        <ul className="w-full text-sm h-full text-unactive bg-transparent flex justify-evenly items-center">
          <Item
            title={"About"}
            target={"about"}
            activeLink={activeLink}
            handleClick={handleClick}
          />
          <Item
            title={"Projects"}
            target={"projects"}
            activeLink={activeLink}
            handleClick={handleClick}
          />
          <a href="#" onClick={() => handleClick("home")}>
            <img src={logo} alt="" />
          </a>
          <Item
            title={"Skills"}
            target={"skills"}
            activeLink={activeLink}
            handleClick={handleClick}
          />
          <Item
            title={"Certificates"}
            target={"certificates"}
            activeLink={activeLink}
            handleClick={handleClick}
          />
           <img width="300px" className="-z-10 -translate-x-2 absolute opacity-15" src={Ellipse} alt="" />
        </ul>
      </div>
      <div className="fixed min-[500px]:hidden z-20 bottom-0 bg-transparent w-full justify-center items-center">
        <ul className="w-full relative flex bg-transparent py-2 justify-evenly items-center">
          <li className="flex h-6 gap-1 flex-col items-center">
            <a
              href="#about"
              onClick={() => handleClick("about")}
              className={`${
                activeLink === "about" ? "text-active" : "text-unactive"
              } hover:text-active hover:scale-125 transition-all`}
            >
              <IoPerson />
            </a>
            <div
              className={`w-1 h-1 rounded-full transition-all bg-main ${
                activeLink === "about" ? "inline-block" : "hidden"
              }`}
            ></div>
          </li>
          <li className="flex h-6 gap-1 flex-col items-center">
            <a
              href="#projects"
              onClick={() => handleClick("projects")}
              className={`${
                activeLink === "projects" ? "text-active" : "text-unactive"
              } hover:text-active hover:scale-125 transition-all`}
            >
              <IoIosApps />
            </a>
            <div
              className={`w-1 h-1 rounded-full transition-all bg-main ${
                activeLink === "projects" ? "inline-block" : "hidden"
              }`}
            ></div>
          </li>
          <a href="#" onClick={() => handleClick("home")}>
            <img src={logo} alt="" />
          </a>
          <li className="flex h-6 gap-1 flex-col items-center">
            <a
              href="#skills"
              onClick={() => handleClick("skills")}
              className={`${
                activeLink === "skills" ? "text-active" : "text-unactive"
              } hover:text-active hover:scale-125 transition-all`}
            >
              <GoLightBulb />
            </a>
            <div
              className={`w-1 h-1 rounded-full transition-all bg-main ${
                activeLink === "skills" ? "inline-block" : "hidden"
              }`}
            ></div>
          </li>
          <li className="flex h-6 gap-1 flex-col items-center">
            <a
              href="#certificates"
              onClick={() => handleClick("certificates")}
              className={`${
                activeLink === "certificates" ? "text-active" : "text-unactive"
              } hover:text-active hover:scale-125 transition-all`}
            >
              <PiCertificate />
            </a>
            <div
              className={`w-1 h-1 rounded-full transition-all bg-main ${
                activeLink === "certificates" ? "inline-block" : "hidden"
              }`}
            ></div>
          </li>
          <img width="150px" className="-z-10 absolute opacity-20" src={Ellipse} alt="" />
        </ul>
      </div>
    </>
  );
}
