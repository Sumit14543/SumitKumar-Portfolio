import { motion } from 'framer-motion'
import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";


const Contact = () => {
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
            <h3 className='text-center text-4xl font-bold mb-6'>Get In <span className='text-purple'>Touch</span> </h3>
            <p className='text-gray-400 text-center pb-8'>Have a project in mind or want to collaborate? Let's talk!</p>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
              <form action="#" className='space-y-6'>
                <div>
                  <label htmlFor="name" className='block text-gray-300 mb-2'>Your Name</label>
                  <input type="text" className='w-full bg-dark-300 border-dark-400 rounded-lg px-4 py-3 outline-none' id="name" />
                </div>
                <div>
                  <label htmlFor="email" className='block text-gray-300 mb-2'>Your Email</label>
                  <input type="email" className='w-full bg-dark-300 border-dark-400 rounded-lg px-4 py-3 outline-none' name="" id="email" />
                </div>
                 <div>
                  <label htmlFor="message" className='block text-gray-300 mb-2'>Message</label>
                  <textarea className='w-full h-40 bg-dark-300 border-dark-400 rounded-lg px-4 py-3 outline-none' name="" id="message" />
                </div>
                 <div>
                 <button className='bg-purple px-4 py-3 cursor-pointer transform duration-300 hover:bg-purple-700  w-full rounded-lg' type="submit">Send Message</button>
                </div>

              </form>
              <div className='space-y-8 pt-4'>
                <div className='flex items-start'>
                  <div className='text-purple text-2xl mr-4'>
                    <FaLocationDot/>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold mb-3'>Location</h3>
                    <p className='text-gray-400'>Som Bazar, Khora Colony, Noida, Uttar Pradesh</p>
                  </div>          
                </div>
                <div className='flex items-start'>
                  <div className='text-purple text-2xl mr-4'>
                    <MdEmail/>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold mb-3'>Email</h3>
                    <p className='text-gray-400'>sumitlodhi9401@gmail.com</p>
                  </div>          
                </div>
                <div className='flex items-start'>
                  <div className='text-purple text-2xl mr-4'>
                    <FaPhoneAlt/>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold mb-3'>Phone</h3>
                    <p className='text-gray-400'>(+91)  9761811212</p>
                  </div>          
                </div>
                <div className='flex items-start'>
                <div className='pt-4'>
                  <h3 className='font-semibold text-xl pb-4'>Follow <span className='text-purple'>me</span></h3>
                   <div className='flex space-x-4'>
                    <a href="#" className='h-12 w-12 bg-dark-400 hover:bg-purple rounded-full flex text-xl  cursor-pointer items-center justify-center'><FaGithub/></a>
                    <a href="#" className='h-12 w-12 bg-dark-400 hover:bg-blue rounded-full flex text-xl  cursor-pointer items-center justify-center'><FaLinkedin/></a>
                    <a href="#" className='h-12 w-12 bg-dark-400 hover:bg-blue rounded-full flex text-xl  cursor-pointer items-center justify-center'><FaXTwitter/></a>
                    <a href="#" className='h-12 w-12 bg-dark-400 hover:bg-[#E4405F] rounded-full flex text-xl  cursor-pointer items-center justify-center'><FaInstagram/></a>
                     <a href="#" className='h-12 w-12 bg-dark-400 hover:bg-pink rounded-full flex text-xl  cursor-pointer items-center justify-center'><FaGlobe/></a>
                </div>
                </div>
                </div>
              </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Contact