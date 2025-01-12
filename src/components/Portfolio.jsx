import React from "react";
import { RiReactjsLine } from "react-icons/ri";

function Portfolio() {
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2*1 mx-auto container px-4 md:px-20 my-16"
    >
      <h1 className="text-3xl mb-5 font-bold">Portfolio</h1>
      <p className="underline font-semibold">Featured Projects</p>
      {/*Card*/}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
        <div className="px-2 py-1 md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300">
          <div>
            <RiReactjsLine className="w-[100px] h-[100px] p-1 rounded-full" />
          </div>
          <div>
            <p className="text-xl font-bold mb-2">Weather Forecast</p>
            <p className="px-2 text-gray-700">
              Type the name of the city to get the weather forecast of that
              location.
            </p>
          </div>
          <a
            href="https://vercel.com/uk2204s-projects/weather-app-using-react-api-ytet"
            target="_blank"
          >
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded mx-2 my-1">
              Source
            </button>
          </a>
        </div>
        <div className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg px-2 py-1 cursor-pointer hover:scale-110 duration-300">
          <div>
            <RiReactjsLine className="w-[100px] h-[100px] p-1 rounded-full" />
          </div>
          <div>
            <p className="text-xl font-bold mb-2">Notes Management</p>
            <p className="px-2 text-gray-700">
              You can manage your notes here. You can add and delete the notes.
            </p>
          </div>
          <a href="https://vercel.com/uk2204s-projects/notes-management-0m81">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded mx-2 my-1">
              Source
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
