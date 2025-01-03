import { MdOutlineDownloading } from "react-icons/md";
const ResumeButton = () => {
  return (
    <button className="relative mt-3 font-medium text-lg tracking-wide rounded-full cursor-pointer border-none bg-gradient-to-r from-[#FFAF29] to-[#FFD700] text-dark1 overflow-hidden group">
      <span className="relative text-sm md:text-xl z-10 flex items-center justify-center gap-1 px-6 py-2 transition-colors duration-400 group-hover:text-dark1">
        Resume <MdOutlineDownloading />
      </span>
      <div className="absolute inset-0 transform -skew-x-0 bg-active transition-transform duration-400 group-hover:translate-x-full"></div>
    </button>
  );
};

export default ResumeButton;
