import { motion } from 'framer-motion'
import React from 'react'

const Contact = () => {
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

            </div>
        </div>
    </motion.div>
  )
}

export default Contact