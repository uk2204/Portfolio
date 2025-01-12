import React from "react";
import resume from "../../public/resume.pdf";
function Resume() {
  return (
    <div
      name="Resume"
      className="max-w-screen-2*1 mx-auto container px-4 md:px-20 my-16"
    >
      <h1 className="text-3xl mb-5 font-bold">Resume</h1>
      <a href={resume}>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded  my-1">
          View Resume
        </button>
      </a>
    </div>
  );
}

export default Resume;
