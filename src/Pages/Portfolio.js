import React from 'react'

import { MdArrowForwardIos,MdArrowBackIos } from "react-icons/md";
import transition from '../components/transition'





const Portfolio = () => {

  const port = [
    {
      id: 1,
      name: "Ecommerce Website",
      src: 'https://res.cloudinary.com/dbetaaewo/image/upload/f_auto,q_auto/v1/portfolio/pl3grhkx0sineh1qaxft',
      code: "https://github.com/virendrajopale/ecommerce-web",
      demo:"https://e-commerce-57a2.onrender.com/"
    },
    {
      id: 3,
      name: "Connect2Campus",
      src: 'https://res.cloudinary.com/dbetaaewo/image/upload/f_auto,q_auto/v1/portfolio/zotqgepgmi3dnr9sqb4l',
      code: "https://github.com/virendrajopale/Campus2Campus.git",
      demo:"https://main--connect2campuus.netlify.app/user/login"
    },
    {
      id: 4,
      name: "Ecommerce Filters React",
      src: 'https://res.cloudinary.com/dbetaaewo/image/upload/f_auto,q_auto/v1/portfolio/qkz3flfoxjtibwc4iadi',
      code: "https://github.com/virendrajopale/Ecommerce-Filters.git",
      demo:"https://ecommerce-filters-two.vercel.app/"
    },
    {
      id: 2,
      name: "To Do MERN App",
      src: 'https://res.cloudinary.com/dbetaaewo/image/upload/f_auto,q_auto/v1/portfolio/zyqxlppz4eitkkmvvyvf',
      code: "https://github.com/virendrajopale/todo-web-app",
      demo:"https://todo-web-app-mern.onrender.com/"
    },
    
    {
      id: 5,
      name: "Kanban To-Do",
      src: 'https://res.cloudinary.com/dbetaaewo/image/upload/f_auto,q_auto/v1/portfolio/lwjafoa4bb65ihnjcpuk',
      code: "https://github.com/virendrajopale/drag-drop-todo-kanban.git",
      demo:"https://drag-drop-todo-kanban.vercel.app/"
    },
    {
      id: 6,
      name: "Personal Bookshelf",
      src: 'https://res.cloudinary.com/dbetaaewo/image/upload/f_auto,q_auto/v1/portfolio/hq04hrnchkrpgrwmmdxi',
      code: "https://github.com/virendrajopale/personal-bookshelf.git",
      demo:"https://personal-bookshelf-9vf7vncpj-virus-projects-c0405544.vercel.app/"
    },
    {
      id: 7,
      name: "News Website",
      src: 'https://res.cloudinary.com/dbetaaewo/image/upload/f_auto,q_auto/v1/portfolio/vuwuwzmlbszxtd135fqd',
      code: "https://github.com/virendrajopale/news-web-react.git",
      demo:"https://github.com/virendrajopale/news-web-react.git"
    },
   
  ]
  
  return (
<>


    <div name="portfolio" className=' w-full h-full pt-4'>
      
    <div className="flex flex-col  mx-auto  text-2xl h-full w-[99%] text-white  font-mono   mt-16 p-4 bg-slate-900 backdrop-blur-sm  rounded-xl  ">
    <div className="flex justify-between items-center">
                <div className="flex space-x-2 text-red-500">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <p className="text-sm">projects</p>
              </div>
        
          <div class="mt-4">
    <p class="text-green-400">$ npm install Portfolio</p>
    <p class="text-white">Check Out My Work Right Here</p>

  </div>
          <div className='grid sm:grid-cols-2 md:grid-cols-2  sm:p-0 gap-8'>
            {

              port.map((prt) => (
                <div className='relative'>

                {/* <div className="flex flex-col  mx-auto   g-black text-2xl h-full w-[99%] text-white  font-mono   mt-16 p-4 bg-black backdrop-blur-sm  rounded-xl"> */}
                    {/* <div class="h-56 w-72"> */}
                    <div className="flex justify-between items-center">
                <div className="flex space-x-2 text-red-500">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <p className="text-sm">projects</p>
              </div>
                      <img class=" transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                       src={`${prt.src}`} alt="" />
                    {/* </div> */}
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div class="absolute inset-0 flex translate-y-[30%] flex-col gap-3 items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                      <h1 class="  text-3xl font-bold text-white">{prt.name}</h1>
                      <div className='flex gap-4'>
                  
                      <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                      <a href={prt.code} target='_blank' rel="noreferrer" className='flex justify-center items-center'>
                        <MdArrowBackIos className='font-bold'/>
                        Code
                        <MdArrowForwardIos className='pl-1' size={20} />
                      </a>
                        </button>
                        <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                      <a href={prt.demo} target='_blank' rel="noreferrer" className='flex justify-center items-center'>
                        <MdArrowBackIos className='font-bold'/>
                        Live
                        <MdArrowForwardIos className='pl-1' size={20} />
                      </a>
                        </button>
                      </div>
                    </div>
                  {/* </div> */}
                </div>
              ))
            }
          </div>

        </div>
      </div>
    {/* </div> */}
    </>
  )
}

export default transition(Portfolio)