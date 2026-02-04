import { motion } from 'framer-motion'
import React from 'react'
import { assets, projects } from '../assets/assets'
import { FaArrowRight } from 'react-icons/fa'

const Projects = () => {
  return (
    <motion.div
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1 ,y:0}}
        transition ={{duration:0.6, ease:'easeOut'}}
         viewport={{once:false,amount:0.2}}
        id='home'
        className='py-20 bg-dark-200'
    >
        <div className='container mx-auto p-6'>
            <h3 className='mx-auto text-4xl font-semibold text-center pb-6'>My <span className='text-purple '> Projects</span></h3>
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-10'>A selection of my recent work</p>
         
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-8 auto-rows-fr'>
                {
                    projects.map((proj,index)=>(
                       <div key={index} className='bg-dark-400 rounded-2xl cursor-pointer flex flex-col h-full items-center overflow-hidden mx-auto transform transition duration-300 hover:translate-y-2'>
                            
                            <img className='w-full h-60 mb-4' src={proj.image} alt="" />
                            <div className='p-6'>
                                <h3 className='text-xl font-semibold mb-2'>{proj.title}</h3>
                                <p className='text-gray-400 mx-auto mb-2'>{proj.description}</p>
                            </div>
                            <div className='mb-3 flex flex-wrap gap-2 px-3'>
                                {proj.tech.map((tech)=>(
                                    <span className='bg-dark-300 rounded-2xl px-3 py-1' >{tech}</span>
                                ))}
                            </div>
                       </div> 
                    ))
                } 
            </div>
            <div className='text-center mt-12 '>
                <a href="#" className='inline-flex items-center rounded-xl  border-2 border-purple-800  px-6 py-3  hover:bg-purple/20'>
                    <span className='pr-2'>View More Project</span>
                    <FaArrowRight/>
                </a>
            </div>
        </div>
    </motion.div>
  )
}

export default Projects