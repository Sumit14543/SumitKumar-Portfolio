import { motion } from 'framer-motion'
import React from 'react'
import { workData } from '../assets/assets'
import { div } from 'framer-motion/client'

const WorkExprience = () => {
  return (
    <motion.div
            initial={{opacity:0, y:50}}
            whileInView={{opacity:1 ,y:0}}
            transition ={{duration:1, ease:'easeOut'}}
            viewport={{once:false,amount:0.2}}
            id='home'
            className='py-20 bg-dark-200'
        >
            <div className='container mx-auto p-6'>
                <h1 className=' text-4xl font-bold mb-6 text-center'>Work <span className='text-purple'>Experience</span></h1>
                <p className='text-center text-gray-400 mb-6'>My professional journey so far</p>

                <div className='flex justify-center items-center'>
                    <div className='flex flex-col py-8 gap-8'>
                        {workData.map((work,index)=>(
                            <div className='flex gap-9 cursor-pointer transform duration-300 hover:translate-y-2 max-w-3xl mx-auto'>
                                <div className='relative flex flex-col items-center'>
                                {/* dot */}
                                 <div className='h-6 w-6 rounded-full bg-purple z-10'></div>

                                 {/* line */}
                                     <div className='absolute top-6 w-0.5 h-[90%]  bg-purple pb-2'></div>
                            </div>

                                <div key={index} className='bg-dark-300 rounded-2xl w-full px-6 py-6'>
                                    <div className='flex justify-between items-center'><h3 className='font-semibold pb-3 text-xl'>{work.role}</h3>
                                        <button className='px-3 py-1 cursor-pointer bg-purple/20 rounded-2xl text-xs md:text-sm text-purple'>{work.duration}</button>
                                    </div> 
                                    <p className='text-gray-400 pb-3'>{work.company}</p>
                                    <p>{work.description}</p>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                </div>
            </div>

    </motion.div>
  )
}

export default WorkExprience