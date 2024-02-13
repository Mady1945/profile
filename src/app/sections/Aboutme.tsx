import React from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import profile from '../assets/profile2.jpg'
import Link from 'next/link'


const Aboutme = () => {
  return (
    <main>
      <div className='lg:flex lg:flex-row lg:w-[75%] w-full justify-center items-center m-auto lg:space-x-9 flex flex-col'>
        <div className=' '>
          <Card pic={profile} label=""/>
        </div>
        <div className='text-white space-y-3'>
          <h1 className=' font-palanquin text-4xl font-semibold lg:relative lg:justify-start flex justify-center hover:text-cyan-300 transition cursor-pointer'>About Me</h1>
          <p className=' font-montserrat lg:w-[75%] w-full'>Hello, I'm Ahmad Ibrahim, a dedicated full-stack web developer with expertise in HTML, CSS, and JavaScript. Known for crafting visually appealing and responsive user interfaces, I excel in enhancing user experiences. My skills extend to advanced styling using Tailwind CSS, while the dynamic duo of Node.js and Next.js empowers me to build robust and scalable web applications.Beyond web development, I bring versatility with proficiency in cpp, Java and Python, enriching my capabilities across diverse tech stacks. Mastering version control with Git, embracing agile methodologies, and possessing a profound understanding of RESTful API design, I am well-equipped to handle multifaceted projects. My commitment to staying abreast of the latest technologies, coupled with creativity and precision, fuels my passion for delivering innovative solutions. Let's collaborate and bring your projects to life with a blend of technical prowess and creative flair!</p>
          <div className='flex space-x-4 lg:relative lg:justify-start  justify-center'>

          <Link href="https://www.linkedin.com/in/ahmad-ibrahim-6304132b3/">
            <Button label="Hire Me" backgroundColor="" textColor=""/></Link>

          <a rel="stylesheet" href="https://docs.google.com/presentation/d/1vtbOJa_XZuPh0UTYgE_JI543BowAwXsd5a3QwjcW4PI/edit?usp=sharing" >
          <button id='projects' className='flex justify-center items-center gap-2 px-7 py-4  font-montderrat text-lg leading-none rounded-lg shadow-lg font-bold text-white border hover:bg-gradient-to-r from-cyan-300 to-indigo-800 transition '>
           Resume 
          </button>
          </a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Aboutme