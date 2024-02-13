import React from 'react'
import Image from 'next/image'


const ProjectSection = ({ pic, project_no, title, description }) => {
  return (
    <main className='lg:flex  lg:flex-row flex flex-col  lg:w-[80%]  lg:h-[80vh] py-32 m-auto lg:space-x-32 space-y-20'>

      <div className='lg:w-[50%]  w-full  space-y-4 mt-10'>
        <h2 className='text-5xl text-[#00faf6] font-palanquin font-semibold '>{project_no}</h2>
        <h2 className='text-4xl text-white font-montserrat font-semibold'>{title}</h2>
        <p className='text-white font-montserrat'>{description}</p>
      </div>

      <div className=' border-custom border-solid  md:w-[500px] md:h-[400px] w-[400px] h-[350px] border-[#00faf6] rounded-xl'>
        {pic && <Image src={pic} alt="pic"
          className=" md:w-[500px] md:h-[400px] w-[400px] h-[350px] object-center  rounded-xl bottom-12 relative left-6  " />}
      </div>

    </main>
  )
}

export default ProjectSection