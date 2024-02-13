import React from 'react'
import ProjectSection from '../components/ProjectSection'
import project1 from '../assets/projects/project1_img.png'
import project2 from '../assets/projects/project2_img.png'
import project3 from '../assets/projects/project3_img.png'
import ProjectSection2 from '../components/ProjectSection2'
import Link from 'next/link'

const Projects = () => {
    return (
        <main>
            <div className=''>
            <hr className='hr w-[80%] m-auto' />
                <div className='flex flex-row justify-center text-6xl text-white font-montserrat font-semibold hover:text-cyan-300 transition cursor-pointer'>Projects
                </div>
                <hr className='hr w-[80%] m-auto ' />
                <div className=' md:space-y-1 space-y-20'>
                    <Link href="https://nike-zeta-lovat.vercel.app/"><ProjectSection  pic={project1} project_no="Project1" title="Nike clone" 
                    description="
                     The Nike-inspired app mirrors the official Nike experience with its sleek design and seamless functionality. Catering to sports enthusiasts and fashion-forward individuals, it offers a user-friendly platform to explore and shop for premium athletic gear. From the latest sneaker releases to performance wear, the app delivers the renowned Nike experience on mobile devices"/></Link>
                     <Link href="https://ecommerce-gilt-iota.vercel.app/">
                    <ProjectSection2 pic={project2} project_no="Project2" title="Ecommerece Website" description="
                     The inspired e-commerce app replicates the seamless user experience and sleek design of a leading online retail platform. Tailored for diverse shoppers, it offers easy navigation and a wide array of products. From the latest fashion trends to essential gadgets, the app provides a convenient, secure, and personalized shopping experience for users seeking quality products in the digital marketplace."
                    /></Link>
                    <Link href="https://pizza-shop-henna.vercel.app/">
                    <ProjectSection  pic={project3} project_no="Project3" title="pizza store" description="The pizza-inspired app captures the essence of a top-notch pizzeria's online platform, presenting a mouthwatering menu in a user-friendly design. Pizza lovers can effortlessly navigate through a variety of flavors, customize their orders, and enjoy a seamless online ordering experience. With secure transactions and quick delivery options, the app brings the delicious world of pizza directly to users' fingertips."/>
                    </Link>
                    <div id='services'></div>
             
                    
                </div>
                
            </div>
        </main>
    )
}

export default Projects