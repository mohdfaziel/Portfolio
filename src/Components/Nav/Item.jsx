export default function Item({ title, target, activeLink, handleClick }) {
    return (
      <li className="flex h-7 text-unactive flex-col hover:scale-105 hover:text-active transition-all items-center">
        <a
          href={`#${target}`}
          onClick={() => handleClick(target)}
          className={`${
            activeLink === `${target}` ? "text-active" : ""
          } `}
        >
          {title}
        </a>
        <div
          className={`w-1 h-1 rounded-full transition-all bg-main ${
            activeLink === `${target}` ? "inline-block" : "hidden"
          }`}
        ></div>
      </li>
    );
  }