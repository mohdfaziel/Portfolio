export default function Skill({title,purpose,logo})
{
    return (
        <div className="flex hover:bg-active transition-all text-active hover:text-dark2 justify-start gap-2 border-[1px] rounded-2xl px-2 py-2 border-unactive items-center w-full md:w-48">
            <div className="Logo w-11"><img className="w-[80%] rounded-lg p-1 bg-dark1 h-[80%]" src={logo} alt="" /></div>
            <div className="flex flex-col text-left leading-3">
                <h1 className="title ">{title}</h1>
                <p className="Purpose text-unactive text-sm">{purpose}</p>
            </div>
        </div>
    )
}