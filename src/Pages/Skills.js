import React from "react";

import transition from "../components/transition";

const Skills = () => {
  const Lnaguags = [
    {
      id: 1,
      lang: "C",
      url: 'https://res.cloudinary.com/dbetaaewo/image/upload/f_auto,q_auto/v1/portfolio/h5sdmbzwo6mjzfnuycv8',
      style: "4F6F55",
    },
    {
      id: 2,
      lang: "C++",
      url: 'https://res.cloudinary.com/dbetaaewo/image/upload/f_auto,q_auto/v1/portfolio/oue8kiizxcergajo8rvk',
      style: "4F6F52",
    },
    {
      id: 12,
      lang: "MySQL",
      url: 'https://res.cloudinary.com/dbetaaewo/image/upload/f_auto,q_auto/v1/portfolio/xc4micnr1rmnoknqyv3n',
      style: "4D6F52",
    },
    {
      id: 13,
      lang: "DSA",
      url: 'https://miro.medium.com/v2/resize:fit:1400/0*7AHKqhGVaDWZJ1L_.png',
      style: "4D6F52",
    },
    {
      id: 14,
      lang: "OOP",
      url: 'https://t4.ftcdn.net/jpg/03/81/49/21/360_F_381492166_7VjcukTYqp0unQfIEbH3rZkqOKwore0o.jpg',
      style: "4D6F52",
    },
    {
      id: 16,
      lang: "GitHub",
      url: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/github-512.png',
      style: "4D6F52",
    },
    {
      id: 3,
      lang: "HTML",
      url: 'https://res.cloudinary.com/dbetaaewo/image/upload/f_auto,q_auto/v1/portfolio/akctvbjox1mwbvo7uet2',
      style: "EE4E4E",
    },
    {
      id: 4,
      lang: "CSS",
      url: 'https://res.cloudinary.com/dbetaaewo/image/upload/f_auto,q_auto/v1/portfolio/cdodztgwhsraotrpgrzf',
      style: "61A3BA",
    },
    {
      id: 5,
      lang: "Tailwind CSS",
      url: 'https://res.cloudinary.com/dbetaaewo/image/upload/f_auto,q_auto/v1/portfolio/tnz8rpov2oufcr2ptqzl',
      style: "5FBDFF",
    },
    {
      id: 6,
      lang: "Javascript",
      url: 'https://res.cloudinary.com/dbetaaewo/image/upload/f_auto,q_auto/v1/portfolio/he7p7kb3lwsxxkfnbtyq',
      style: "EEC759",
    },
    {
      id: 7,
      lang: "React Js",
      url: 'https://res.cloudinary.com/dbetaaewo/image/upload/f_auto,q_auto/v1/portfolio/rqvp6k5on7czbq2jpc1d',
      style: "C5FFF8",
    },
    {
      id: 8,
      lang: "Node Js ",
      url: 'https://res.cloudinary.com/dbetaaewo/image/upload/f_auto,q_auto/v1/portfolio/qpzz2l7vkluywqzfguyt',
      style: "9BEC00",
    },
    {
      id: 9,
      lang: "Mongo Db",
      url: 'https://res.cloudinary.com/dbetaaewo/image/upload/f_auto,q_auto/v1/portfolio/rkl4lwaby41xjqyhdjed',
      style: "A6CF98",
    },
    {
      id: 10,
      lang: "Redux",
      url: 'https://res.cloudinary.com/dbetaaewo/image/upload/f_auto,q_auto/v1/portfolio/eajbylhqynoek6fldek2',
      style: "A6CF98",
    },
  ];
  return (
    <>


    <div name="skills" className="w-full  h-full pt-4 ">
     
  
    <div className="flex flex-col  mx-auto  l g-black text-2xl h-full w-[99%] text-white  font-mono   mt-16 p-4 bg-slate-900 backdrop-blur-sm  rounded-xl">
    <div className="flex justify-between items-center">
                <div className="flex space-x-2 text-red-500">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <p className="text-sm">skills</p>
              </div>
        
          <div class="mt-4">
    <p class="text-green-400">$ npm install Skills</p>
    <p class="text-white">These Are The Technologies I've Worked With.</p>

  </div>

          
          <div className=" w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py- px-4 sm:px-0 ">
            {Lnaguags.map((lang) =>{
              const borderClr="#"+lang.style
              console.log( borderClr)
              return (
            
              <div key={lang.id} className="flex  items-center justify-center gap-2 hover:scale-105 duration-500" >
              
                <div 
                  className={`  relative flex flex-col items-center justify-center border border-[#${lang.style}]   
          h-52 w-80 rounded  before:absolute before:inset-0 before:h-full before:w-full before:bg-[#${lang.style}]  before:blur-lg  before:translate-x-3  before:translate-y-1`}>
                  <img src={lang.url} className=" h-28 font-bold text-white z-10" alt="img"/>
                  <p className="hover:scale-105 duration-300">{lang.lang}</p>
                </div>
              </div>
            )})}
          </div>
        </div>

      </div>
   
    </>
  );
};

export default transition(Skills);
