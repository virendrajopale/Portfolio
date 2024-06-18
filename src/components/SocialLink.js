import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLink = () => {
  const social = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} className='hover:text-white duration-300' />
        </>
      ),
      href: "www.linkedin.com/in/virendra-jopale-398b09229",

    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} className='hover:text-white duration-300' />
        </>
      ),
      href: "https://github.com/virendrajopale",

    },
    {
      id: 3,
      child: (
        <>
          <HiMail size={30} className='hover:text-white duration-300' />
        </>
      ),
      href: "mailto:virendrajopale@gmail.com",

    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={30} className='hover:text-white duration-300' />
        </>
      ),
      href: "https://drive.google.com/file/d/10p3QW_0YoqQrXxZGq5Zjb5CuCHKX6wUR/view?usp=drivesdk",
      download: true,

    },
  ]
  return (
    <>

   
    <div className=' z-10'>
      <ul className='flex gap-2 group hover:text-white'>
        {
          social.map((links) => (

            <li key={links.id} className={'flex justify-between items-center  h-14 px-4  bg-white backdrop-blur-sm bg-white/20 group '}>
              <a href={links.href} className=' hover:rounded-2xl  flex justify-between items-center text-black ' download={links.download}
                target='_blank'
                rel="noreferrer">
                {links.child}
              </a>
            </li>
          ))
        }
      </ul>
    </div>
    </>
  )
}

export default (SocialLink)
