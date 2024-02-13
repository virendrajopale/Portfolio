import React from 'react'
import news from '../assets/news.png'

import ecom from '../assets/ecom.png'
import weather from '../assets/weather.png'
import todo from '../assets/todo.png'
import { MdArrowForwardIos,MdArrowBackIos } from "react-icons/md";
const Portfolio = () => {
  const port = [
    {
      id: 1,
      name: "Ecommerce Website",
      src: ecom,
      code: "https://github.com/virendrajopale/ecommerce-web",
      demo:"https://e-commerce-57a2.onrender.com/"
    },
    {
      id: 2,
      name: "To Do MERN App",
      src: todo,
      code: "https://github.com/virendrajopale/todo-web-app",
      demo:"https://todo-web-app-mern.onrender.com/"
    },
    {
      id: 3,
      name: "Weather Website",
      src: weather,
      code: "https://github.com/virendrajopale/weather-web-app-react.git",
      demo:"https://github.com/virendrajopale/weather-web-app-react.git"
    },
    {
      id: 4,
      name: "News Website",
      src: news,
      code: "https://github.com/virendrajopale/news-web-react.git",
      demo:"https://github.com/virendrajopale/news-web-react.git"
    },
    
   
  ]

  return (

    <div name="portfolio" className='w-full h-full'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full relative'>
        <div className=" absolute top-20 right-0 bg-[#44ce46] w-[70%] h-[70%] rounded-full mix-blend-multiply filter blur-xl "> </div>
      <div className=" absolute top-0  bg-purple-300 w-[70%] h-[70%] rounded-full  filter blur-2xl  "> </div>
      <div className=" absolute bottom-0 align-middle bg-red-500 w-[70%] h-[70%] rounded-full  filter blur-2xl  "> </div>
       
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-center   mt-16 px-4 bg-white backdrop-blur-sm bg-white/20 rounded-xl'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-400 hover:text-white duration-300 cursor-pointer'>Portfolio</p>
            <p className='py-6'>Check Out My Work Right Here</p>
          </div>
          <div className='grid sm:grid-cols-2 md:grid-cols-2 px-12 sm:p-0 gap-8'>
            {

              port.map((prt) => (
                <div className='relative'>

                  <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-md">
                    {/* <div class="h-56 w-72"> */}
                      <img class=" transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                       src={`${prt.src}`} alt="" />
                    {/* </div> */}
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div class="absolute inset-0 flex translate-y-[30%] flex-col gap-3 items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                      <h1 class="font-dmserif text-3xl font-bold text-white">{prt.name}</h1>
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
                        Demo
                        <MdArrowForwardIos className='pl-1' size={20} />
                      </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>

        </div>
      </div>
    </div>
  )
}

export default Portfolio