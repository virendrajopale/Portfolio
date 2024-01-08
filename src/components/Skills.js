import React from "react";
import html from "../assets/html.png";
import clng from "../assets/clng.png";
import jsimg from "../assets/jsimg.png";
import mdb from "../assets/mdb.svg";
import nodejss from "../assets/nodejss.png";
import cpplang from "../assets/cpplang.svg";
import reactjs from "../assets/reactjs.svg";
import tail from "../assets/tail.svg";
import csslang from "../assets/csslang.svg";
const Skills = () => {
  const Lnaguags = [
    {
      id: 1,
      lang: "C",
      url: clng,
      style: "435B66",
    },
    {
      id: 2,
      lang: "C++",
      url: cpplang,
      style: "4F6F52",
    },
    {
      id: 3,
      lang: "HTML",
      url: html,
      style: "E36414",
    },
    {
      id: 4,
      lang: "CSS",
      url: csslang,
      style: "61A3BA",
    },
    {
      id: 5,
      lang: "Tailwind CSS",
      url: tail,
      style: "5FBDFF",
    },
    {
      id: 6,
      lang: "Javascript",
      url: jsimg,
      style: "EEC759",
    },
    {
      id: 7,
      lang: "React Js",
      url: reactjs,
      style: "C5FFF8",
    },
    {
      id: 8,
      lang: "Node Js ",
      url: nodejss,
      style: "BED754",
    },
    {
      id: 9,
      lang: "Mongo Db",
      url: mdb,
      style: "A6CF98",
    },
  ];
  return (
    <div name="skills" className="w-full text-center mt-28 ">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full relative ">
        <div className=" absolute bottom-0 right-0 bg-sky-500 w-[40%] h-[40%] rounded-full mix-blend-multiply filter blur-2xl "> </div>
        <div className=" absolute top-0  bg-yellow-300 w-[70%] h-[70%] rounded-full mix-blend-multiply filter blur-2xl "> </div>
        <div className="mt-16 px-4 bg-white backdrop-blur-sm bg-white/20 rounded-xl">

          <div className="pt-6">
            <p className=" text-4xl font-bold border-b-4 border-gray-400 p-3 inline hover:text-white duration-300 cursor-pointer">
              My Skills
            </p>
            <p className="py-6">These Are The Technologies I've Worked With.</p>
          </div>
          <div className=" w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 ">
            {Lnaguags.map((lang) => (
            
              <div key={lang.id} className="flex  items-center justify-center gap-2 hover:scale-105 duration-500" >
                <div
                  className={` relative flex items-center justify-center border border-[#{${lang.style}}]   
          h-52 w-80 rounded  before:absolute before:inset-0 before:h-full
          before:w-full before:bg-[#${lang.style}]  before:blur-lg  before:translate-x-3  before:translate-y-1`}>
                  <img src={lang.url} className=" h-28 font-bold text-white z-10" alt="img"/>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;
