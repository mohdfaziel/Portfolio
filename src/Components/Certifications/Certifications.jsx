import Certificate from "./Certificate";
import { ms,ibm,ln } from "./Icons/icons";
import intern from "./intern.pdf";
import webD from "./webdev basis.pdf";
export default function Certifications()
{
    let certificates = [
        {
            logos : [ms,ln],
            title : "MicroSoft and Linkdln",
            desc : "Career Essential in Software Development by Microsoft and LinkedIn",
            proof : "https://www.linkedin.com/learning/certificates/2cd7389e3a491029e558f5619b7c73ffd2171d928a2065a4b47d07c5acda0ba1"

        },
        {
            logos : [ibm],
            title : "FrontEnd Intern",
            desc : "IBM SkillsBuild Summer Internship Program",
            proof : intern
        },
        {
            logos : [ibm],
            title : "WebDev Basics",
            desc : "IBM certificate in basic web development skills.",
            proof : webD
        },
    ]
    return (
        <div id="certificates" className="About w-full px-[2rem] md:px-[10rem] py-[4rem] md:py-[5rem] text-active bg-dark1 min-h-screen flex justify-center items-center">
            <div className="container flex flex-col gap-6 justify-center items-start">
                <div className="title text-4xl"><span className="border-t-4 border-main">C</span>ertifications</div>
               <div className="certificates w-full justify-start gap-6 flex-wrap items-center flex">
               {
                    certificates.map((certificate,idx)=> <Certificate key={idx} logos={certificate.logos} title={certificate.title} desc={certificate.desc} proof={certificate.proof}/>)
                }
               </div>
            </div>
        </div>
    )
}