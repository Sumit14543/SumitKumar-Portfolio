import { nav } from 'framer-motion/client'
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

const Navbar = () => {
   const [showMenu, setShowMenu] = useState(false)

  return (
   <nav className='fixed w-full z-50 bg-dark-100/90 backdrop:blur-lg px-8 py-4'>
        <div className=' flex justify-between mx-auto items-center '>
            <div>
                <a href="#" className='text-3xl font-bold text-white'>
                    Sumit
                    <span className='text-purple'>Kumar</span>
                    <div className='h-4 w-4 bg-purple rounded-full'></div>
                </a>               
            </div>
            <div className='hidden md:flex space-x-10'>
                <Link to="/" className='relative  text-white transition duration-300 hover:text-purple group '>
                    <span>Home</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </Link>
                <Link to="/about" className='relative  text-white transition duration-300 hover:text-purple group '>
                    <span>About</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </Link>
                <Link to="/skills" className='relative  text-white transition duration-300 hover:text-purple group '>
                    <span>skills</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </Link>
                <Link to="project" className='relative  text-white transition duration-300 hover:text-purple group '>
                    <span>Projects</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </Link>
                <Link to="contact" className='relative  text-white transition duration-300 hover:text-purple group '>
                    <span>Contact</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </Link>
            </div>
            <div className='md:hidden'>
                {
                    showMenu ?
                    <FaXmark onClick={()=>setShowMenu(!showMenu)} className='text-3xl cursor-pointer'/>:
                    <FaBars onClick={()=>setShowMenu(!showMenu)} className='text-3xl cursor-pointer'/>
                                
                }               
                
            </div>
        </div>
       {/* Mobile sub Menue */} 
       {
       showMenu &&
       <div className='md:hidden fixed top-20 left-0 w-full bg-dark-300 border-t border-white/10 p-6 space-y-6'>

    <a href="/"
        onClick={()=>setShowMenu(false)}
        className='block  text-white text-lg hover:text-purple transition'>
        Home
    </a>

    <a href="about"
        onClick={()=>setShowMenu(false)}
        className='block text-white text-lg hover:text-purple transition'>
        About
    </a>

    <a href="skills"
        onClick={()=>setShowMenu(false)}
        className='block text-white text-lg hover:text-purple transition'>
        Skills
    </a>

    <a href="project"
        onClick={()=>setShowMenu(false)}
        className='block text-white text-lg hover:text-purple transition'>
        Projects
    </a>

    <a href="contact"
        onClick={()=>setShowMenu(false)}
        className='block text-white text-lg hover:text-purple transition'>
        Contact
    </a>

</div>

       }
   </nav>
  )
}

export default Navbar