"use client"
import React,{ useState } from 'react'
import Button from '../components/Button'
import { Menu } from 'lucide-react'
import Link from 'next/link'

const Navbar = () => {

  const [ismenuvisible, setmenuvisible] = useState(false);

  const menu = () =>{
    setmenuvisible (!ismenuvisible);
    
  };
  return (
    <nav className=' sticky shadow-2xl top-0 z-20 bg-blue'>
        <div className='text-white flex justify-between w-[90%] h-20 items-center m-auto'>
            <div className='text-2xl font-serif font-bold text-cyan-300 '>Portfolio</div>
            <div className='font-bold font-serif space-x-10 text-xl md:block hidden'>
                <a href="#home" id='navlinks'>Home</a>
                <a href="#about" id='navlinks'>About Me</a>
                <a href="#projects" id='navlinks'>Projects</a>
                <a href="#services" id='navlinks'>Services</a>
                <a href="#experience" id='navlinks'>Experience</a>
            </div>
            <div className='md:block hidden'>
                <Link href="https://www.linkedin.com/in/ahmad-ibrahim-6304132b3/"><Button label="Contact"  textColor="" backgroundColor="" /></Link>
            </div>
            <button className='block md:hidden'>
              <Menu onClick={menu}/>
            </button>
        </div >
        <div className={`  ${ismenuvisible ? 'block' : 'hidden'}`}>

            <div className='flex md:hidden flex-col space-y-10 text-white justify-center items-center text-2xl py-5 font-palanquin font-bold transition-all ease-in duration-800 '>
                <a href="/" >Home</a>
                <a href="" >About Me</a>
                <a href="" >Projects</a>
                <a href="" >Services</a>
                <a href="" >Experience</a>
                <Button label="Contact"  textColor="" backgroundColor="" />
            </div>
        </div>
    </nav>
  )
}

export default Navbar
