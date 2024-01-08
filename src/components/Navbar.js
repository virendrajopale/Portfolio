import React,{useState} from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import {Link } from 'react-scroll'

import './Main.css'
const Navbar = (props) => {
  const links=[
    {
      id:1,
      link:'home',

    },
    {
      id:2,
      link:'about',

    },
    {
      id:3,
      link:'skills'
    },
    {
      id:4,
      link:'portfolio'
    },
    {
      id:4,
      link:'contact',
      url:'/contact'
    },
  ]
  const [nav, setNav] = useState(false)

  
  return (
    <div className='flex justify-center '> 

 
    <div className={`flex justify-center items-center  h-20 fixed w-[99%]  m-auto   px-4  border-spacing-3 rounded-md  duration-500 z-20 `}>
    

        {/* <h1 className='text-5xl font-sign hover:font-extrabold duration-300 cursor-pointer '>Viru</h1> */}

      <ul className='hidden md:flex '>
        {
          links.map((link)=>(
            <li key={link.id} className={`px-4 cursor-pointer font-medium
             hover:scale-105 hover:font-bold duration-200 capitalize
              p-3 m-2 hover:text-white`}>
             
              <Link to={link.link} smooth duration={500}> 
              {link.link}
              </Link>
              </li>
          ))
        }
         
      </ul>
        
      <div onClick={()=>setNav(!nav)} className={`pr-4  cursor-pointer  md:hidden z-10`} >
        {
          nav?<FaTimes size={30}/>:
          <FaBars size={30}/>
        }

      </div>
      {
        nav && 
      <ul className='flex flex-col  justify-center items-center
      absolute top-0 left-0 w-50 h-screen   px-4 bg-white backdrop-blur-sm bg-white/20 rounded-xl '>
       {
        links.map(({link,id})=>(
        <li key={id} className='capitalize cursor-pointer px-4 py-6 text-4xl after:w-4 after:bg-slate-500 '> 
        <Link to={link} smooth duration={700} onClick={()=>setNav(!nav)}> 
        {link}
        </Link>
        </li>
        ))
       }
      </ul>
      }
    </div>
    </div>
  )
}

export default Navbar