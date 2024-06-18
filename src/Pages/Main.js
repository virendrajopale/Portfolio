import React, { useEffect, useRef } from "react";

import "./Main.css";

import SocialLink from "../components/SocialLink";
import transition from "../components/transition";


const Main = () => {
  return (
    <>
      <div name="" className=" h-full  pt-4   ">
         

          <div className="flex flex-col  mx-auto  l g-black text-2xl h-full w-[99%] text-white  font-mono   mt-16 p-4 bg-slate-900 backdrop-blur-sm  rounded-xl">
            {/* <div className=' text-center flex flex-col gap-6'>

            <p className=' text-4xl'>Hey There,I'm</p>
            <h1 className='text-4xl sm:text-7xl font-bold  stroke-2 stroke-[#243c5a] text-white cls'  >
              VIRENDRA JOPALE
            </h1>


            <ul className='text-2xl flex flex-col gap4 cursor-pointer '>
              <li className=' hover:scale-105 duration-200 hover:text-white'>
                A Web Developer
              </li>
              <li className=' hover:scale-105 duration-200 hover:text-white'>
                A Coder
              </li>
              <li className=' hover:scale-105 duration-200 hover:text-white'>
                A Learner
              </li>
            </ul>
          </div> */}
            {/* <div className="b"> */}
              <div className="flex justify-between items-center">
                <div className="flex space-x-2 text-red-500">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <p className="text-sm">viru</p>
              </div>
              <div className="flex items-start justify-start">
                {/* <p className
                ="text-green-400">$ npm install next</p>
    <p className
    ="text-white">+ next@10.2.3</p>
    <p className
    ="text-white">added 1 package, and audited 2 packages in 3s</p>
    <p className
    ="text-green-400">$</p> */}
                <div className="mt-5 space-y-1.5 px-5 pb-10 text-3xl">
                  <p className="mt-4 font-mono  font-normal tracking-wide text-violet-400 ">
                    <span className="text-slate-500">&lt;</span>
                    <span className="text-pink-400">Info</span>
                    <span className="text-slate-500">&gt;</span>
                  </p>
                  <p className="ml-3 font-mono  font-normal tracking-wide text-violet-400">
                    <span className="text-slate-500">&lt;</span>
                    <span className="text-pink-400">Name</span>
                    <span className="text-slate-500">&gt;</span>
                    <span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                      <span className="relative text-blue-400">
                        Virendra Jopale
                      </span>
                    </span>
                    <span className="text-slate-500">&lt;/</span>
                    <span className="text-pink-400">Name</span>
                    <span className="text-slate-500">&gt;</span>
                  </p>
                  <p className="ml-3 font-mono  font-normal tracking-wide text-violet-400">
                    <span className="text-slate-500">&lt;</span>
                    <span className="text-pink-400">Graduate</span>
                    <span className="text-slate-500">&gt;</span>
                    <span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                      <span className="relative text-blue-400">
                       Information Technology
                      </span>
                    </span>
                    <span className="text-slate-500">&lt;/</span>
                    <span className="text-pink-400">Graduate</span>
                    <span className="text-slate-500">&gt;</span>
                  </p>
                  <p className="ml-3 font-mono  font-normal tracking-wide text-violet-400">
                    <span className="text-slate-500">&lt;</span>
                    <span className="text-pink-400">Flex</span>
                    <span className="ml-2 text-violet-400">
                      className<span className="text-slate-500">=</span>
                      <span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                        <span className="relative text-blue-400">"mt-3"</span>
                      </span>
                    </span>
                    <span className="text-slate-500">&gt;</span>
                  </p>
                  <p className="ml-6 font-mono  font-normal tracking-wide text-violet-400">
                    <span className="text-slate-500">&lt;</span>
                    <span className="text-pink-400">Text</span>
                    <span className="text-slate-500">&gt;</span>
                    <span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                      <span className="relative text-blue-400">
                        A Web Developer
                      </span>
                    </span>
                    <span className="text-slate-500">&lt;/</span>
                    <span className="text-pink-400">Text</span>
                    <span className="text-slate-500">&gt;</span>
                  </p>

                  <p className="ml-6 font-mono  font-normal tracking-wide text-violet-400">
                    <span className="text-slate-500">&lt;</span>
                    <span className="text-pink-400">Text</span>
                    <span className="text-slate-500">&gt;</span>
                    <span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                      <span className="relative text-blue-400">A Learner</span>
                    </span>
                    <span className="text-slate-500">&lt;/</span>
                    <span className="text-pink-400">Text</span>
                    <span className="text-slate-500">&gt;</span>
                  </p>
                  <p className="ml-3 font-mono  font-normal tracking-wide text-violet-400">
                    <span className="text-slate-500">&lt;/</span>
                    <span className="text-pink-400">Flex</span>
                    <span className="text-slate-500">&gt;</span>
                  </p>
                  <p className="ml-3 font-mono  font-normal tracking-wide text-violet-400">
                    <span className="text-slate-500">&lt;</span>
                    <span className="text-pink-400">Links</span>
                    <span className="ml-2 text-violet-400">
                      className<span className="text-slate-500">=</span>
                      <span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                        <span className="relative text-blue-400">
                          "flex flex-col gap-3"
                        </span>
                      </span>
                    </span>
                    <span className="text-slate-500">&gt;</span>
                  </p>
                  <p className="ml-6 font-mono  font-normal tracking-wide text-violet-400">
                    <span className="text-slate-500">&lt;</span>
                    <span className="text-pink-400">a</span>
                    <span className="text-slate-500">&gt;</span>
                    <a className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                      <a
                        href="www.linkedin.com/in/virendra-jopale-398b09229"
                        target="_blank"
                        rel="noreferrer"
                        className="relative text-blue-400 hover:text-blue-700"
                      >
                        LinkedIn
                      </a>
                    </a>
                    <span className="text-slate-500">&lt;/</span>
                    <span className="text-pink-400">a</span>
                    <span className="text-slate-500">&gt;</span>
                  </p>
                  <p className="ml-6 font-mono  font-normal tracking-wide text-violet-400">
                    <span className="text-slate-500">&lt;</span>
                    <span className="text-pink-400">a</span>
                    <span className="text-slate-500">&gt;</span>
                    <span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                      <a
                        href="https://github.com/virendrajopale"
                        target="_blank"
                        rel="noreferrer"
                        className="relative text-blue-400 hover:text-blue-700"
                      >
                        GitHub
                      </a>
                    </span>
                    <span className="text-slate-500">&lt;/</span>
                    <span className="text-pink-400">a</span>
                    <span className="text-slate-500">&gt;</span>
                  </p>
                  <p className="ml-6 font-mono  font-normal tracking-wide text-violet-400">
                    <span className="text-slate-500">&lt;</span>
                    <span className="text-pink-400">a</span>
                    <span className="text-slate-500">&gt;</span>
                    <span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                      <a
                        href="https://drive.google.com/file/d/10p3QW_0YoqQrXxZGq5Zjb5CuCHKX6wUR/view?usp=drivesdk"
                        target="_blank"
                        rel="noreferrer"
                        className="relative text-blue-400 hover:text-blue-700"
                      >
                        Resume
                      </a>
                    </span>
                    <span className="text-slate-500">&lt;/</span>
                    <span className="text-pink-400">a</span>
                    <span className="text-slate-500">&gt;</span>
                  </p>
                  <p className="ml-3 font-mono  font-normal tracking-wide text-violet-400">
                    <span className="text-slate-500">&lt;/</span>
                    <span className="text-pink-400">Links</span>
                    <span className="text-slate-500">&gt;</span>
                  </p>
                  <p className="font-mono  font-normal tracking-wide text-violet-400">
                    <span className="text-slate-500">&lt;/</span>
                    <span className="text-pink-400">Info</span>
                    <span className="text-slate-500">&gt;</span>
                  </p>
                </div>
              </div>
      
          </div>
    
      </div>
    </>
  );
};

export default transition(Main);
