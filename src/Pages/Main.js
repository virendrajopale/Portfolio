import React from 'react'


import './Main.css'

import SocialLink from '../components/SocialLink'
import transition from '../components/transition'


const Main = () => {
 
  return (
    <>
    <div name="home"
      className=' h-screen flex justify-center items-center  '>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-screen h-full relative'>

        <div className=" absolute top-0  bg-purple-300 w-[70%] h-[70%] rounded-4xl mix-blend-multiply filter blur-2xl  "> </div>

        <div className=" absolute bottom-0 right-0 bg-pink-500 w-[70%] h-[70%] rounded-4xl mix-blend-multiply filter blur-2xl   "> </div>

        <div className=" absolute top-0 right-0 bg-yellow-300 w-[70%] h-[70%] rounded-4xl mix-blend-multiply filter blur-xl   "> </div>
        <div className=" absolute bottom-0 bg-pink-300 w-[70%] h-[70%] rounded-4xl mix-blend-multiply filter blur-2xl   "> </div>
        <div className=" absolute bottom-0 bg-pink-200 w-[70%] h-[70%] rounded-full mix-blend-multiply filter blur-2xl   "> </div>


        <div className='flex flex-col justify-center items-center max-w-screen-lg mx-auto  w-full h-full text-center   mt-16 px-4 bg-white backdrop-blur-sm bg-white/20 rounded-xl'>
          <div className=' text-center flex flex-col gap-6'>

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
          </div>

          <div>

          </div>
          <div className='mt-5'>
            <SocialLink />
          </div>
        </div>
        <div>
        </div>


      </div>
    </div>
   


    </>
  )
}

export default  transition(Main)
