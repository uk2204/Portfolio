import React from "react";
import { ImLinkedin } from "react-icons/im";
import { SiGithub } from "react-icons/si";
import { RiVercelFill } from "react-icons/ri";
import { SiAdobe } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { BsFiletypeCss } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io5";
import { BsFiletypeHtml } from "react-icons/bs";
import { FaJava } from "react-icons/fa6";
function Experience() {
  return (
    <div
      name="Experience"
      className="max-w-screen-2*1 mx-auto container px-4 md:px-20 my-16"
    >
      <h1 className="text-3xl mb-5 font-bold">Experience</h1>
      <div className="grid grid-cols-2 md:grid-cols-4">
        <div className="mb-10 flex flex-col justify-center items-center md:w-[150px] md:h-[150px] border-[2px] rounded-full shadow-lg p-1 cursor-pointer hover:scale-110 duration-300">
          <SiAdobe className="  w-[100px] h-[100px] p-1 hover:scale-110" />
        </div>
        <div className="mb-10 flex flex-col justify-center items-center md:w-[150px] md:h-[150px] border-[2px] rounded-full shadow-lg p-1 cursor-pointer hover:scale-110 duration-300">
          <RiReactjsLine className="w-[100px] h-[100px] p-1 hover:scale-110 " />
        </div>
        <div className="mb-10 flex flex-col justify-center items-center md:w-[150px] md:h-[150px] border-[2px] rounded-full shadow-lg p-1 cursor-pointer hover:scale-110 duration-300">
          <IoLogoJavascript className="w-[100px] h-[100px] p-1 hover:scale-110 " />
        </div>
        <div className="mb-10 flex flex-col justify-center items-center md:w-[150px] md:h-[150px] border-[2px] rounded-full shadow-lg p-1 cursor-pointer hover:scale-110 duration-300">
          <BsFiletypeCss className="w-[100px] h-[100px] p-1 hover:scale-110 " />
        </div>
        <div className="mb-10 flex flex-col justify-center items-center md:w-[150px] md:h-[150px] border-[2px] rounded-full shadow-lg p-1 cursor-pointer hover:scale-110 duration-300">
          <BsFiletypeHtml className="w-[100px] h-[100px] p-1 hover:scale-110 v" />
        </div>
      </div>
    </div>
  );
}

export default Experience;
