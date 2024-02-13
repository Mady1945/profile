import React from 'react'
import git_icon from '../assets/github-icon.png'
import vercel_icon from '../assets/vercel-icon.png'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <main className='h-[50vh] lg:m-10 m-0 '>
      <div className='text-white  space-y-3'>
        <p className=' font-montserrat text-3xl text-gray-400 font-bold '>I'm a</p>
        <h2 className='lg:text-8xl text-5xl font-montserrat font-bold '>Full Stack  </h2>
        <h2 className='lg:text-8xl text-5xl font-montserrat font-bold '>  Web Developer</h2>
      </div>
      <div className='py-4 flex space-x-4 text-white '>
        <Link href="https://github.com/Mady1945?tab=repositories">
        <button className='bg-black  flex px-12      py-2 justify-center items-center space-x-2 rounded-2xl  '>
          <Image alt='git' src={git_icon} className=' object-contain h-5 w-5' />
          <p className='font-bold font-palanquin text-xl'>Github</p>
        </button>
        </Link>

        <Link href="https://vercel.com/mady694u-gmailcom">
        <button className='bg-black   rounded-2xl px-8 ' id='about'>
          <Image alt='git' src={vercel_icon} className=' object-cover h-11 w-32  ' />
        </button>
        </Link>
      </div>
    </main>
  )
}

export default Hero