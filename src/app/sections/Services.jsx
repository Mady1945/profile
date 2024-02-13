"use client"
import icon1 from '../assets/icon1.png'
import React from 'react'
import ServicesCard from '../components/ServiceCard'

const Services = () => {
    return (
        <main className='lg:p-0 py-20'>
            <hr className='hr w-[80%] m-auto ' />
            <div className='flex justify-center text-6xl text-white font-montserrat font-semibold hover:text-cyan-300 transition cursor-pointer '>
                Services
            </div>
            <hr className='hr w-[80%] m-auto' />
            <div className=' flex  flex-wrap justify-center items-center p-20 m-auto w-[80%]'>
                
                    <ServicesCard icon={icon1} heading="Frontend Development" description=" I showcase services using HTML, CSS, JavaScript, and Tailwind CSS. Clean and responsive. Tailwind's utility classes enhance styling, creating an organized and visually appealing grid. The design prioritizes user-friendly navigation and an engaging experience." />
                    <ServicesCard icon={icon1} heading="Backend Development" description=" I demonstrate expertise in Node.js and TypeScript. Using these technologies. The codebase is structured and optimized for performance, showcasing my proficiency in crafting efficient backend systems. This highlights my commitment to delivering powerful and reliable server-side functionalities." />
                    <ServicesCard icon={icon1} heading="Web Applications" description="I harness the power of Next.js to build dynamic and efficient user interfaces. Leveraging React, Node.js, and TypeScript, I create seamless, server-rendered web applications. The use of Next.js enables a smooth development experience, offering enhanced performance and scalability." />
                    <ServicesCard icon={icon1} heading="Programming Languages" description=" I showcase proficiency in C++, Java, and Python.I demonstrate versatility in tackling varied programming challenges. From efficient algorithms in C++ to robust applications in Java and versatile scripting with Python." />
                    
            </div>
            
        </main>
    )
}

export default Services