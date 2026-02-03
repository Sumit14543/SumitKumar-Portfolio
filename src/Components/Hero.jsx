import { motion, easeOut } from 'framer-motion'
import {assets}from '../assets/assets'
const Hero = () => {
   
  return (
      <motion.div initial=
      {{opacity:0, y:50}}
      whileInView={{opacity:1 ,y:0}}
      transition ={{duration:0.6, ease:'easeOut'}}
      viewport={{once:true}}
      id='home'
      className='flex flex-row h-full w-full pt-10 pb-16 items-center bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]'
      >
        <div className='h-screen mx-auto w-full md:mt-0 mt-14 px-6 flex flex-col md:flex-row items-center   justify-center md:justify-between'>
            
            {/*Left Side Content*/}
            <div className='md:w-1/2 mb-15 md:mb-0 md:items-start '>
                <h1 className='md:text-6xl  text-4xl font-bold mb-4'>
                    Hi, I'm <span className='text-purple'>Sumit Kumar</span>
                    
                </h1>
                <h2 className='md:text-4xl text-2xl font-bold mb-6 typewriter'>Full Stack Developer</h2>
                <p className='md:text-2xl text-xl mb-8 text-gray-300 ' >I create stunning web experiences with modern technologies and innovative design.</p>
                <div className='flex  space-x-3'>
                    <a href="#project" className='flex bg-purple  font-medium rounded-xl hover:bg-purple-700 px-6 py-3 transition duration-300'>View Work</a>
                    <a href="#project" className='flex border-purple border-2  font-medium rounded-xl hover:bg-purple/20 px-6 py-3 transition decoration-purple-300'>Contact Me</a>
                </div>
            </div>

            {/* Right Content */}
            <div className='md:w-1/2 flex justify-center'>
                <div className='relative w-64 h-64 md:w-80 md:h-80'>
                    <div className='h-full w-full absolute inset-0 rounded-full bg-gradient-to-r from-purple to-pink'>
                        <motion.img 
                        animate={{y:[0 ,-20,0]}}
                        transition={{
                            duration:4,
                            repeat:Infinity,
                            repeatType:'loop',
                            ease:'easeInOut'
                        }}
                        
                        className='related rounded-full h-64 w-64 md:h-80 md:w-80 object-cover z-10 ' 
                        src={assets.profileImg} alt='Profile-img'>

                        </motion.img>
                    </div>
                </div>
            </div>
        </div>
      </motion.div>
  )
}

export default Hero