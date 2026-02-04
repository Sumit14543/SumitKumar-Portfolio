import { motion } from 'framer-motion'
import React from 'react'
import { skills } from '../assets/assets'
import { data } from 'react-router-dom'
import { div, span, title } from 'framer-motion/client'

const Skills = () => {
  return (
    <motion.div 
            initial=
            {{opacity:0, y:50}}
            whileInView={{opacity:1 ,y:0}}
            transition ={{duration:0.6, ease:"easeOut"}}
             viewport={{once:false,amount:0.2}}
            id='home'
            className='py-20 bg-dark-200'
            >
               <div className='container mx-auto p-6 '>
                    <h1 className='font-bold  text-4xl text-center pb-6'>My <span className='text-purple'>Skills</span></h1>
                    <p className='text-gray-400 text-center  pb-14 '>Technologies I work with to bring ideas to life</p>

                    {/*Skills Card */}
 
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-5xl  auto-rows-fr'>
                       {
                        skills.map((skill,index)=>(
                            <div key={index} className='bg-dark-300 rounded-2xl p-6 cursor-pointer transform transition duration-300 hover:translate-y-2 flex flex-col h-full '>
                               
                                <div className=' mb-4 flex items-center'>
                                     <skill.icon className='text-purple w-12 h-12 mr-6'/>
                                     <h1 className=' text-2xl font-semibold '>{skill.title}</h1>
                                    
                                </div>
                                 <p className='pb-10'>{skill.description}</p>
                                 <div className='flex-wrap flex gap-2'>
                                   {
                                    skill.tags.map((tech,index)=>(
                                        <span key={index} className='bg-dark-400 rounded-full text-sm px-3 py-1'>
                                            {tech}
                                        </span>
                                    ))
                                   }
                                 </div>
                            </div>
                        ))
                       }
                    </div>
               </div>
    </motion.div>
    
  )
}

export default Skills