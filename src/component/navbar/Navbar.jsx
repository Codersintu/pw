import React from 'react'
import pwimg from "../../assets/pw.png"
import downarr from "../../assets/down.png"
import Courses from './Courses'

function Navbar() {
  return (
    <div className='h-[80px] flex justify-center shadow-2xs border-b border-gray-300'>
        <div className="max-w-[1300px] h-[100%]  flex justify-around items-center gap-10">
            {/* left side */}
            <div className="flex justify-center items-center gap-10">
              <div className="w-[50px] cursor-pointer">
                <img className='w-[100%] ' src={pwimg} alt="" />
              </div>

          <div className="relative group">
             <div className="flex justify-center items-center gap-2.5 py-2.5 px-5 border border-blue-800 cursor-pointer rounded-sm">
                <h1 className='text-xl text-blue-800 font-medium'>All courses</h1>
                <img className='w-[16px] transform transition-transform duration-300 group-hover:rotate-180' src={downarr} alt="" />
            </div>
             {/* Dropdown Content */}
           <Courses/>
         </div>
       </div>

            {/* center div */}
            <div className="h-[100%]">
                <ul className='flex h-full gap-8'>
                <li className='font-semibold h-full flex  items-center cursor-pointer hover:bg-gray-200 px-2'>Vidyapeeth</li>
                <li className='font-semibold h-full flex  items-center cursor-pointer hover:bg-gray-200 px-2'>Upskilling</li>
                <li className='font-semibold h-full flex items-center cursor-pointer hover:bg-gray-200 px-2'>PW Store(Books)</li>
                <li className='font-semibold h-full flex items-center cursor-pointer hover:bg-gray-200 px-2'>Real Test</li>
                <li className='font-semibold h-full flex items-center cursor-pointer hover:bg-gray-200 px-2'>Class 1st - 8th</li>
                <li className='font-semibold h-full flex items-center cursor-pointer hover:bg-gray-200 px-2'>Power Batch</li></ul>
            </div>
            {/* right div */}
            <div className="bg-blue-800 py-3 px-8 rounded-sm cursor-pointer hover:bg-blue-600">
                <button className='font-bold text-white'>Login/Register</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar