import React from 'react'

const About = () => {
  return (
    <div name="about" className=' h-full my-10'>
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full relative" >
        <div className=" absolute top-0 right-0 bg-[#38d0f2] w-[80%] h-[70%] rounded-xl mix-blend- filter blur-xl  "> </div>
        <div className=" absolute bottom-0 align-middle bg-orange-400 w-[80%] h-[40%] rounded-xl mix-blend- filter blur-2xl  "> </div>
        <div className='   px-4 bg-white backdrop-blur-sm bg-white/20 rounded-xl'>
          <div className=''>
            {/* <div className=" absolute top-0  bg-purple-300 w-[70%] h-[70%] rounded-full mix-blend-multiply filter blur-2xl  animation-delay-5000"> </div> */}

            <div className="pt-6 flex justify-center ">
              <p className='text-4xl font-Caveat font-bold inline border-b-4 border-gray-400 hover:text-white duration-300 cursor-pointer'>
                About
              </p>
            </div>
            <p className='text-xl mt-10 text-justify'>I'm <bold className="font-bold">Virendra Jopale</bold> , a passionate 3rd Year <bold className=" font-bold">Information Technology</bold>  Engineer at Government College of Engineering, Karad, Maharashtra, specializing in frontend and backend web development. I am driven by an insatiable curiosity for technology and a relentless pursuit of excellence in software engineering.
            </p>
            <br />
            <p className='text-xl  text-justify'>
              I've cultivated essential soft skills like time management, leadership, and teamwork, shaping me into a collaborative and efficient team player. Proficient in an array of technologies, I wield expertise in <bold className="font-bold">JavaScript (ES6,React Js), Node.js, Express.js, MongoDB, proficiency in Tailwind CSS, and HTML.</bold>  I showcase my practical applications of these skills on my GitHub profile, offering tangible evidence of my capabilities in software development.
            </p>
            <br />
            <p className='text-xl text-justify'>I engage actively on platforms like <bold className="font-bold"> <a href="https://leetcode.com/virendrajopale/">Leetcode</a></bold> to refine my problem-solving acumen, demonstrating my commitment to constant learning and growth. My quick learning ability enables me to swiftly adapt to new challenges and technologies, ensuring efficiency and adaptability in every project I undertake.
              I am currently seeking opportunities as a Backend Developer to leverage my skills and contribute effectively in this dynamic field. My <bold className="font-bold"> <a href="https://www.linkedin.com/in/virendra-jopale-398b09229/">LinkedIn</a></bold> profile is open for professional connections and discussions regarding potential collaborations or opportunities. </p>



          </div>
        </div>
      </div>
    </div>
  )
}

export default About
