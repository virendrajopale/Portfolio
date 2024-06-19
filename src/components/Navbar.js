import React,{useState} from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import {Link } from 'react-router-dom'

import '../Pages/Main.css'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { useTheme } from '../Context/theme-context'
const Navbar = (props) => {
  // const [theme, setTheme] = useState(false)
  // const handlemode=()=>{
  //   let clr=theme?'white':'#0C1844';
  //   let txtclr=theme?'black':'white';
  //   document.body.style.backgroundColor=clr;
  //   document.body.style.color=txtclr;
  //   setTheme(!theme)
  // }
const {theme,toggleTheme}=useTheme()
  const links=[
    {
      id:1,
      link:'/',
      name:"Virendra"

    },
    {
      id:2,
      link:'/portfolio',
      name:"My Projects"

    },
    {
      id:3,
      link:'/skills',
      name:"My Skills"
    },
    {
      id:4,
      link:'/about',
      name:"About Me"
    },
    {
      id:4,
      link:'/contact',
      url:'/contact',
      name:"Get In Touch"
    },
  ]
  const [nav, setNav] = useState(false)

  
  return (
    <>
    <div className='flex justify-center '> 

 
    <div className={`main-border flex bg-slate-900 text-white justify-between items-center  h-15  fixed   w-[97%]  rounded-xl  px-4  border-spacing-3  duration-500 z-20 `}>
    
    <div className="flex justify-between items-center">
                <div className="flex space-x-2 text-red-500">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
               
              </div>
        {/* <h1 className='text-5xl font-sign hover:font-extrabold duration-300 cursor-pointer '>Viru</h1> */}

      <ul className='hidden md:flex '>
        {
          links.map((link)=>(
            <li key={link.id} className={`px-4 cursor-pointer text-xl
             hover:scale-105 hover:font-bold duration-200 capitalize
              p-3 m-2 hover:text-green-400 font-bold`}>
             
              <Link to={link.link} > 
              {link.name}
              </Link>
              </li>
          ))
        }
     
      </ul>
      <div onClick={toggleTheme} className=' duration-300 cursor-pointer'>{
      theme==='light'?<MdLightMode size={30}/>:<MdDarkMode size={30}/>
      }</div>
      
      <div onClick={()=>setNav(!nav)} className={`pr-4  cursor-pointer  md:hidden z-10`} >
        {
          nav?<FaTimes size={30}/>:
          <FaBars size={30}/>
        }

      </div>
      {
        nav && 
      <ul className='flex flex-col  justify-start items-baseline
      absolute top-0 left-0 w-50 h-screen   px-4 bg-white backdrop-blur-sm bg-white/20 rounded-xl '>
          <div className="flex justify-between items-center pt-2">
                <div className="flex space-x-2 text-red-500">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
               
              </div>
       {
        links.map((link)=>(
        <li key={link.id} className='capitalize cursor-pointer px-4 py-6 text-4xl after:w-4 after:bg-slate-500 '> 
        <Link to={link.link}  onClick={()=>setNav(!nav)}> 
        {link.name}
        </Link>
        </li>
        ))
       }
      </ul>
      }
    </div>
    </div>


    </>
  )
}

export default (Navbar)
