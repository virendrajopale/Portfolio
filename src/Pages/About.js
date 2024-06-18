import React from 'react'
import transition from "../components/transition";


function About() {
  return (
    <div name="about" className=' h-full w-full pt-4'>
      <div className="flex flex-col  mx-auto  text-2xl h-full w-[99%] text-white  font-mono   mt-16 p-4 bg-slate-900 backdrop-blur-sm  rounded-xl">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 text-red-500">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <p className="text-sm">about me</p>
        </div>

        <div class="mt-4">
          <p class="text-green-400">$ git status</p>


        </div>

        <div className=''>
          {/* <div className=" absolute top-0  bg-purple-300 w-[70%] h-[70%] rounded-full mix-blend-multiply filter blur-2xl  animation-delay-5000"> </div> */}


          <p className='text-xl mt-10 text-justify'>I'm <bold className="font-bold animate-pulse bg-green-500">Virendra Jopale</bold> , a passionate 3rd Year <bold className=" font-bold animate-pulse bg-green-500">Information Technology</bold>  Engineer at Government College of Engineering, Karad, Maharashtra, specializing in frontend and backend web development. I am driven by an insatiable curiosity for technology and a relentless pursuit of excellence in software engineering.
          </p>
          <br />
          <p className='text-xl  text-justify'>
            I've cultivated essential soft skills like time management, leadership, and teamwork, shaping me into a collaborative and efficient team player. Proficient in an array of technologies, I wield expertise in <bold className="font-bold">JavaScript (ES6,React Js), Node.js, Express.js, MongoDB, proficiency in Tailwind CSS, and HTML.</bold>  I showcase my practical applications of these skills on my GitHub profile, offering tangible evidence of my capabilities in software development.
          </p>
          <br />
          <p className='text-xl text-justify'>I engage actively on platforms like <bold className="font-bold animate-pulse bg-green-500"> <a href="https://leetcode.com/virendrajopale/ ">Leetcode</a></bold> to refine my problem-solving acumen, demonstrating my commitment to constant learning and growth. My quick learning ability enables me to swiftly adapt to new challenges and technologies, ensuring efficiency and adaptability in every project I undertake.
            I am currently seeking opportunities as a Backend Developer to leverage my skills and contribute effectively in this dynamic field. My <bold className="font-bold animate-pulse bg-green-500"> <a href="https://www.linkedin.com/in/virendra-jopale-398b09229/">LinkedIn</a></bold> profile is open for professional connections and discussions regarding potential collaborations or opportunities. </p>




        </div>
      </div>
    </div>
  );
}

export default transition(About)
