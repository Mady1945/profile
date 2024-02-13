import Image from 'next/image'
import React from 'react'


const ServicesCard = ({icon, heading , description}) => {
   

    return (
        <main className='p-10'>
            
            <div className='border-custom   md:w-[450px] md:h-[400px] w-[350px] h-[300px]  rounded shadow-2xl'>
                <div>
                    <div className='flex items-center pl-5 md:py-5 space-x-3'>
                    {icon && <Image  src={icon} alt="icon"   className='bg-white w-14 h-14 p-2 rounded-full' /> }
                    
                        <h2 className='md:text-4xl text-xl text-white font-palanquin font-semibold '>{heading}</h2>
                    </div>
                     <div className=''>
                        <p className='text-white p-5 md:text-xl'>{description}</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ServicesCard