import React from 'react'
import heroimg from "../../assets/hero.webp"

function Homedetail() {
  return (
    <div className='bg-gradient-to-b from-violet-200 to-pink-200  flex justify-center'>
      <div className="flex items-center max-w-[1200px]">
        <div className="flex-1">
            <div className="flex flex-col gap-2">
            <h1 className='text-4xl font-semibold'>Bharat's <span className='text-blue-600'>Trusted & <br /> Affordable </span> <br /> Educational Platform</h1>
            <p className='text-sm text-gray-700'>Unlock your potential by signing up with Physics Wallah- <br /> The most affordable learning solution</p>
             </div>
             <button className='bg-blue-500 mt-10 py-4 px-20 text-white font-semibold rounded-md'>Get Started</button>
        </div>
        <div className="flex-1">
            <img src={heroimg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Homedetail