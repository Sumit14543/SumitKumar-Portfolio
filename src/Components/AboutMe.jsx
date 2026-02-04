import { motion } from 'framer-motion'
import React from 'react'
import { aboutInfo, assets } from '../assets/assets'
import { div } from 'framer-motion/client'
import { data } from 'react-router-dom'

const AboutMe = () => {
  return (
        <motion.div 
        initial=
        {{opacity:0, y:50}}
        whileInView={{opacity:1 ,y:0}}
         transition ={{duration:1, ease:'easeOut'}}
            viewport={{once:false,amount:0.2}}
        id='home'
        className='py-20 bg-dark-200 '
        >
            <div className='container mx-auto p-6 '>
                <h1 className='text-3xl font-bold mb-5 text-center'>About <span className='text-purple'>Me</span></h1>
                <p className='text-gray-400 mb-16 text-center'>Get to know more about my background and passion</p>

                         {/* Image + Journey content */}
               <div className='flex flex-col md:flex-row items-center gap-12'>
                    {/*Left side Content */}
                 <div className='w-full md:w-1/2 px-3 md:px-5 overflow-hidden'>
                   <motion.img 
                         initial=
                         {{opacity:0, y:50}}
                         whileInView={{opacity:1 ,y:0}}
                         transition ={{duration:0.9, ease:'easeOut'}}
                         viewport={{once:false,amount:0.2}}
                         className='w-full h-auto object-cover object-[center_top] rounded-2xl'
                         src={assets.profileImg2}
                         alt="profileimg">
                   </motion.img>
                 </div>

                  <motion.div 
                        initial=
                        {{opacity:0, y:50}}
                        whileInView={{opacity:1 ,y:0}}
                        transition ={{duration:0.6, ease:'easeOut'}}
                        viewport={{once:false,amount:0.2}}
                        className='md:w-1/2'>
                            <div className='rounded-2xl p-8 '>
                                <h1 className='text-2xl font-bold mb-5'>My Journey</h1>
                                <p className='text-gray-300 md:text-xl pb-10'>I am a motivated full-stack developer with 1 year of hands-on experience in building responsive and user-friendly web applications. My journey began with a strong foundation in HTML, CSS, and JavaScript, and gradually evolved into working with modern frameworks like React and backend technologies. Over the past year, I’ve focused on writing clean code, improving performance, and turning real-world problems into practical digital solutions.</p>
                                <p className='text-gray-300 md:text-xl pb-10'>
                                    When I’m not immersed in code, I’m exploring new ideas, experimenting with modern technologies, and turning curiosity into creativity. I enjoy pushing boundaries, learning something new every day, and crafting digital experiences that feel intuitive, fast, and meaningful.
                                </p>
                                {/*Cards*/}
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                  {
                                    aboutInfo.map((data,index)=>(
                                        <div key={index} className='bg-dark-300 rounded-2xl p-8 transform transition duration-300 hover:translate-y-2 cursor-pointer'>
                                           <div className='text-purple text-4xl mb-4'> <data.icon/>
                                           </div>
                                           <h3 className='text-xl font-semibold'>{data.title}</h3>
                                           <p>{data.description}</p>
                                        </div>
                                    )
                                  )}
                                </div>
                            </div>
                        </motion.div>
                </div>

            </div>
          
        </motion.div>
  )
}

export default AboutMe