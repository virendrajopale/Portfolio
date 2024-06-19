import React from "react";
import transition from "../components/transition";


const Contact = () => {
  return (
    <>


    <div name='contact' className="w-full h-full pt-4">
    <div className="main-border flex flex-col  mx-auto  text-2xl h-full w-[97%] text-white  font-mono   mt-16 p-4 bg-slate-900 backdrop-blur-sm  rounded-xl  ">
    <div className="flex justify-between items-center">
                <div className="flex space-x-2 text-red-500">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <p className="text-sm">contact me</p>
              </div>
        
          <div class="mt-4">
    <p class="text-green-400">$ git commit -m 'Get Connected'</p>


  </div>       
        
        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/fdbd91f2-7997-4043-b1ef-91ce2de42e8c" method="POST" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              id=""
              placeholder="Enter Your Name"
              className=" p-2 bg-transparent border-2 rounded-md  focus:outline-none"
            />
            <input
              type="email"
              name="email"
              id=""
              placeholder="Enter Your Email"
              className="my-3 p-2 bg-transparent border-2 rounded-md  focus:outline-none"
            />

            <textarea name="message" placeholder="Enter Your Message" rows="10" className="p-2 bg-transparent border-2 rounded-md  focus:outline-none"></textarea>
            <button className=" bg-green-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Let's talk</button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default transition(Contact);
