import Image from 'next/image'
import React from 'react'

const Card = ({pic, label}) => {
  return (
    <main>
        <div className=' border-8 border-solid  w-96 h-96 border-[#00faf6] rounded-xl'>
          
          {label}
          {pic && <Image src={pic} alt="pic" 
        className=" w-96 h-96 object-cover  rounded-xl bottom-10 relative right-6" />}
        

        </div>
    </main>
  )
}

export default Card

