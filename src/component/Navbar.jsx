import React from 'react'
import pwimg from "../assets/pw.png"
import downarr from "../assets/down.png"

function Navbar() {
  return (
    <div className='h-[80px] flex justify-center shadow-2xs border-b border-gray-300'>
        <div className="max-w-[1200px] h-[100%]  flex justify-around items-center gap-10">
            {/* left side */}
            <div className="flex justify-center items-center gap-10">
              <div className="w-[50px] cursor-pointer">
                <img className='w-[100%]' src={pwimg} alt="" />
              </div>
            
            <div className="flex justify-center items-center gap-2.5 py-2.5 px-5 border border-blue-800 cursor-pointer rounded-sm">
                <h1 className='text-xl text-blue-800 font-medium'>All courses</h1>
                <img className='w-[16px]' src={downarr} alt="" />
            
            </div>
            </div>

            {/* center div */}
            <div className="h-[100%]">
                <ul className='h-[100%] flex justify-center items-center gap-10'>
                <li className='font-semibold cursor-pointer hover:bg-blue-100'>Vidyapeeth</li>
                <li className='font-semibold cursor-pointer hover:bg-blue-100'>Upskilling</li>
                <li className='font-semibold cursor-pointer hover:bg-blue-100'>PW Store</li>
                <li className='font-semibold cursor-pointer hover:bg-blue-100'>Real Test</li>
                <li className='font-semibold cursor-pointer hover:bg-blue-100'>Class 1st - 8th</li>
                <li className='font-semibold cursor-pointer hover:bg-blue-100'>Power Batch</li></ul>
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