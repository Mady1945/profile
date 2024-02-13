import Image from 'next/image'
import React from 'react'
import html from '../assets/experience/html.png'
import css from '../assets/experience/css.png'
import js from '../assets/experience/js.png'
import nodejs from '../assets/experience/node_js.png'
import nextjs from '../assets/experience/next_js.png'
import tailwind from '../assets/experience/tailwind.png'
import python from '../assets/experience/python.png'
import cpp from '../assets/experience/cpp.png'



const Experience = () => {
  return (
    <main>
      <hr className='hr w-[80%] m-auto' />
        <div className='flex  justify-center text-6xl text-white font-montserrat font-semibold hover:text-cyan-300 transition cursor-pointer'>
                Experience
            </div>
            <hr className='hr w-[80%] m-auto' />
            <div className='flex  w-[80%] m-auto justify-center lg:space-x-44  py-20'>
                <div className=' space-y-6 '>
                <Image src={html} alt='html' className='icon'/>
                <p  className=' flex justify-center  font-palanquin text-2xl font-bold text-gray-400 flex-wrap '>HTML</p>
                </div>
                <div className=' space-y-6 '>
                <Image src={css} alt='css' className='icon'/>
                <p  className=' flex justify-center  font-palanquin text-2xl font-bold text-gray-400 flex-wrap '>CSS</p>
                </div>
                <div className=' space-y-6 '>
                <Image src={js} alt='js' className='icon'/>
                <p  className=' flex justify-center  font-palanquin text-2xl font-bold text-gray-400 flex-wrap '>Java Script</p>
                </div>
                <div className=' space-y-6 '>
                <Image src={nodejs} alt='nodejs' className='icon'/>
                <p  className=' flex justify-center  font-palanquin text-2xl font-bold text-gray-400 flex-wrap '>Node js</p>
                </div>
            </div>
            <div className='flex w-[80%] m-auto justify-center lg:space-x-44 py-20'>
                <div className=' space-y-6 '>
                <Image src={nextjs} alt='nextjs' className='icon'/>
                <p  className=' flex justify-center  font-palanquin text-2xl font-bold text-gray-400 flex-wrap '>Next Js</p>
                </div>
                <div className=' space-y-6 '>
                <Image src={tailwind} alt='tailwind' className='icon'/>
                <p  className=' flex justify-center  font-palanquin text-2xl font-bold text-gray-400 flex-wrap '>Tailwind Css</p>
                </div>
                <div className=' space-y-6 '>
                <Image src={python} alt='python' className='icon'/>
                <p  className=' flex justify-center  font-palanquin text-2xl font-bold text-gray-400 flex-wrap '>Python</p>
                </div>
                <div className=' space-y-6 '>
                <Image src={cpp} alt='cpp' className='icon'/>
                <p  className=' flex justify-center  font-palanquin text-2xl font-bold text-gray-400 flex-wrap '>Cpp</p>
                </div>
            </div>
    </main>
  )
}

export default Experience