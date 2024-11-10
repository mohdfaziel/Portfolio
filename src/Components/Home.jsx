import Image from "../assets/Image.jpg";
import Logo from "../assets/logo.svg";
import { MdOutlineDownloading } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import resume from "../assets/resume.pdf";
export default function Home() {
  return (
    <div className="MainHome w-full px-[2rem] md:px-[10rem] text-active py-[1rem] md:py-[5rem] bg-dark1 min-h-screen flex justify-center   items-center">
      <div className="Container max-w-[85rem] gap-20 md:gap-0 h-full md:h-full w-full flex flex-col-reverse md:flex-row justify-center md:justify-between items-center">
        <div className="left w-full md:w-[50%] h-full flex justify-center items-center">
          <div className="w-[70%] md:w-[60%] relative">
            <img width="100%" className="rounded-xl" src={Image} alt="" />
            <div className="absolute -top-9 -left-10">
              <img width="40px" className="" src={Logo} alt="" />
              <div className="name text-5xl md:text-6xl ">
                Mohd <br />{" "}
                <span className="border-b-4 rounded-sm border-main">Faz</span>
                iel
              </div>
            </div>
          </div>
        </div>
        <div className="Right w-full md:w-[50%]  h-full flex justify-center items-center gap-3">
          <div className="Info flex flex-col gap-2 justify-center items-start">
            <div className="text-6xl">I'm</div>
            <div className="text-3xl">
              Web <span className=" text-main">Designer</span> and{" "}
              <span className=" text-main">Developer</span>, based in Dehli
            </div>
            <div className="text-sm text-unactive">
              I'm a web developer with experience in digital concept arts and
              front-end web design.
            </div>
            <a href={resume} target="_blank">
              <button className="flex justify-center hover:scale-105 items-center gap-1 text-dark1 transition-all  bg-main px-3 py-1 rounded-2xl mt-3">
                Resume <MdOutlineDownloading />
              </button>
            </a>
          </div>
          <div className="SocialMedia flex flex-col justify-center items-center gap-5">
            <a href="https://www.linkedin.com/in/mohdfaziel/" target="_blank">
              <FaLinkedinIn className="transition-all hover:scale-150" />
            </a>
            <a href="mailto:mohdfazel969@gmail.com" target="_blank">
              <HiOutlineMail className="transition-all hover:scale-150" />
            </a>
            <a href="https://github.com/mohdfaziel" target="_blank">
              <ImGithub className="transition-all hover:scale-150" />
            </a>
            <a href="https://leetcode.com/u/mohdfaziel/" target="_blank">
              <SiLeetcode className="transition-all hover:scale-150" />
            </a>
            <a
              href="https://www.instagram.com/heyy.faziel?igsh=MWQxdW1yNDJ5ZGVicA=="
              target="_blank"
            >
              <FaInstagram className="transition-all hover:scale-150" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="h-full flex flex-col justify-between items-center">
          <div><BiWinkSmile className='text-main text-6xl'/></div>
          <div className=' text-5xl font-extrabold tracking-wide'>Mohd<br/> <span className='border-b-4 border-main'>F</span>aziel</div>
          <div>Social Media Icons</div>
        </div>
        <div className="h-full flex flex-col justify-between items-center">
            <div className='rounded-full overflow-hidden shadow-md shadow-dark2 w-[150px] h-[150px]'>
                <img width="100%" height="100%" src={Image} alt="" />
            </div>
          <div>
            <p>-Introduction</p>
            <div className="w-52">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, impedit!
            </div>
          </div>
          <div>Resume</div>
        </div> */
}
