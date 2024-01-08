import React from "react";

const Contact = () => {
  return (
    <div name='contact' className="w-full h-full ">
      <div className="flex flex-col p-4 justify-center mx-auto h-full">
        <div className=" pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400  cursor-pointer">Contact Me</p>
          <p className="Capitalize py-6">Want to work together? I thought you'd never ask! </p>
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
            <button className=" bg-cyan-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Let's talk</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
