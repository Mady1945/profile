import React from 'react'
import Button from '../components/Button'
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className=' w-full h-[90vh] bg-gradient-to-tr from-[#2e2185] to-[#5fb0f1] rounded-t-[10rem] '>

      <div className='flex justify-between'>
        <div className='w-80 h-72 bg-[#2e2185] rounded-full opacity-40 relative bottom-24 right-36'></div>
        <div className='flex flex-row justify-center text-6xl text-white font-montserrat font-semibold pt-10 hover:text-cyan-300 transition cursor-pointer'>Contact
        </div>
        <div className='w-80 h-72 bg-[#2e2185] rounded-full opacity-40 relative bottom-24 left-40 '></div>
      </div>
      <div className='lg:flex relative bottom-32 lg:px-40 p-10 justify-between'>
        <div className='lg:w-[35%] w-full '>
          <h1 className='flex lg:justify-start justify-center md:text-3xl text-2xl text-white font-montserrat font-semibold '>Drop Me a Message</h1>
          <p className='text-white font-montserrat md:text-2xl text-xl '>I welcome your messages in my portfolio! Whether it's for collaboration, inquiries, or just to say hello, I'm excited to connect and explore potential opportunities with you. Let's chat!</p>
        </div>
        <div className=' space-y-3 lg:block flex lg:justify-start justify-center'>
          <div className='flex space-x-3'>
            <button className='flex justify-center  gap-2 px-7 py-4  font-montderrat text-lg  rounded-lg shadow-lg bg-gradient-to-tr from-[#2e2185] to-[#5fb0f1] '>
              <Phone color='white' />
            </button>
            <p className='flex items-center font-bold text-white md:text-xl'>+92 3174557073</p>
          </div>
          <div className='flex space-x-3'>
            <button className='flex justify-center  gap-2 px-7 py-4  font-montderrat text-lg  rounded-lg shadow-lg bg-gradient-to-tr from-[#2e2185] to-[#5fb0f1] '>
              <Mail color="#ffffff" />
            </button>
            <p className='flex items-center font-bold text-white md:text-xl'>mady694u@gmail.com</p>
          </div>


        </div>
      </div>
      <hr className='hr w-[80%] m-auto' />
      <div className='flex flex-col lg:flex lg:flex-row justify-between items-center w-[85%] m-auto h-20' >
        <div className='text-2xl font-serif font-bold text-cyan-300 '>Portfolio</div>
        <div className='text-white font-montserrat'>2024-Ahmad Ibrahim, All rights reserved</div>
        <div className='flex space-x-5 top-5 relative'>
          <button className='flex justify-center  gap-2 px-7 py-4  font-montderrat text-lg  rounded-lg shadow-lg bg-gradient-to-tr from-[#2e2185] to-[#5fb0f1] '>
            <Link href="https://www.linkedin.com/in/ahmad-ibrahim-6304132b3/" ><Linkedin color="white" /></Link>
          </button><button className='flex justify-center  gap-2 px-7 py-4  font-montderrat text-lg  rounded-lg shadow-lg bg-gradient-to-tr from-[#2e2185] to-[#5fb0f1] '>
            <Link href="https://www.facebook.com/profile.php?id=100072803011939"><Facebook color="#ffffff" /></Link>
          </button><button className='flex justify-center  gap-2 px-7 py-4  font-montderrat text-lg  rounded-lg shadow-lg bg-gradient-to-tr from-[#2e2185] to-[#5fb0f1] '>
            <Link href="https://www.instagram.com/rare_uxer_name/"><Instagram color="#ffffff" /></Link>
          </button>
        </div>
      </div>

    </footer>
  )
}

export default Footer