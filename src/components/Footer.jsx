import React from "react";
import { BsInstagram } from "react-icons/bs";
import { RiFacebookCircleFill } from "react-icons/ri";
import { ImLinkedin } from "react-icons/im";

function Footer() {
  return (
    <div className="flex justify-center items-center">
      <a href="https://www.instagram.com/utkarsh.kondekar/" target="_blank">
        <BsInstagram className="w-[25px] h-[50px] mx-2 cursor-pointer hover:scale-105" />
      </a>
      <a href="https://www.linkedin.com/in/utkarsh-kondekar" target="_blank">
        <ImLinkedin className="w-[25px] h-[50px] mx-2 cursor-pointer hover:scale-105" />
      </a>{" "}
    </div>
  );
}

export default Footer;
