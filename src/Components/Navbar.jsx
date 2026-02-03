import { nav } from 'framer-motion/client'
import React, { useState } from 'react'
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
                <a href="#home" className='relative  text-white transition duration-300 hover:text-purple group '>
                    <span>Home</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href="#about" className='relative  text-white transition duration-300 hover:text-purple group '>
                    <span>About</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href="#Skills" className='relative  text-white transition duration-300 hover:text-purple group '>
                    <span>Skills</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href="#projects" className='relative  text-white transition duration-300 hover:text-purple group '>
                    <span>Projects</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href="#contact" className='relative  text-white transition duration-300 hover:text-purple group '>
                    <span>Contact</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </a>
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
       <div className='md:hidden mt-4 flex flex-col bg-dark-300 h-screen rounded-lg p-4 space-y-4 items-center justify-center'>
                <a href="#home" onClick={()=>setShowMenu(!showMenu)} className='relative  text-white transition duration-300 hover:text-purple group '>
                    <span>Home</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href="#about" onClick={()=>setShowMenu(!showMenu)} className='relative  text-white transition duration-300 hover:text-purple group '>
                    <span>About</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href="#Skills" onClick={()=>setShowMenu(!showMenu)} className='relative  text-white transition duration-300 hover:text-purple group '>
                    <span>Skills</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href="#projects" onClick={()=>setShowMenu(!showMenu)} className='relative  text-white transition duration-300 hover:text-purple group '>
                    <span>Projects</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href="#contact" onClick={()=>setShowMenu(!showMenu)} className='relative  text-white transition duration-300 hover:text-purple group '>
                    <span>Contact</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </a>
       </div>
       }
   </nav>
  )
}

export default Navbar