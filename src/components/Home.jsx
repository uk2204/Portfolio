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
import { ReactTyped, Typed } from "react-typed";
import uk from "../../public/uk.jpeg";
function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2*1 mx-auto container px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-2xl">
              <p>I'm a AEM </p>
              {/*<span className="text-red-700 font-bold">Developer</span>*/}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br></br>
            <p className="text-sm md:text-md text-justify">
              As a website developer and author, I possess the expertise to
              create and customize websites and pages according to the specific
              requirements of clients. My specialization lies in utilizing AEM
              (Adobe Experience Manager) features to design and develop
              templates, reusable components, workflows, and DAM (Digital Asset
              Management) systems, all of which are crucial elements for the
              optimal functioning of a website.
            </p>
            <br></br>
            {/*Social Media Icons */}
            <div className="flex justify-between flex-col md:flex-row space-y-6 md:space-y-0 items-center">
              <div className="space-y-2">
                <h1 className="font-bold text-center">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/utkarsh-kondekar"
                      target="_blank"
                    >
                      <ImLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/uk2204" target="_blank">
                      <SiGithub className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://vercel.com/uk2204s-project"
                      target="_blank"
                    >
                      <RiVercelFill className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiAdobe className="text-2xl md:text-3xl hover:scale-110 duration-200 " />
                  <RiReactjsLine className="text-2xl md:text-3xl hover:scale-110 duration-200 " />
                  <BsFiletypeCss className="text-2xl md:text-3xl hover:scale-110 duration-200 " />
                  <IoLogoJavascript className="text-2xl md:text-3xl hover:scale-110 duration-200 " />
                  <BsFiletypeHtml className="text-2xl md:text-3xl hover:scale-110 duration-200 " />
                  <FaJava className="text-2xl md:text-3xl hover:scale-110 duration-200 " />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1 md:order-2">
            <img
              src={uk}
              className="rounded-full md:w-[350px] md:h-[350px]"
            ></img>
          </div>
        </div>
      </div>
      <hr></hr>
    </>
  );
}

export default Home;
