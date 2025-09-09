import React, { useState } from "react";
import pwimg from "../../assets/pw.png";
import downarr from "../../assets/down.png";
import hame from "../../assets/hame.png";
import cancel from "../../assets/cancel.png";
import Courses from "./Courses";
import { motion } from "motion/react";
function Navbar() {
  const [open,setOpen]=useState(false)
  return (
    <>
    <div className="h-[80px] w-[100vw] z-[999] top-0 bg-white sticky flex justify-center shadow-2xs border-b border-gray-300">
      <div className="w-[100vw] max-w-[1300px] h-[100%]  flex justify-around items-center sm:gap-10 gap-15">
        {/* left side */}
        <div className="flex justify-center items-center gap-10">
          <div className="w-[50px] cursor-pointer">
            <img className=" object-cover w-[100%]" src={pwimg} alt="" />
          </div>

          <div className="relative group hidden lg:flex">
            <div className="flex justify-center items-center gap-2.5 py-2.5 px-5 border border-blue-800 cursor-pointer rounded-sm">
              <h1 className="text-xl text-blue-800 font-medium">All courses</h1>
              <img
                className="w-[16px] transform transition-transform duration-300 group-hover:rotate-180"
                src={downarr}
                alt=""
              />
            </div>
            {/* Dropdown Content */}
            <Courses />
          </div>
        </div>

        {/* center div */}
        <div className="h-[100%] hidden lg:flex">
          <ul className="flex h-full gap-8">
            <li className="font-semibold h-full flex  items-center cursor-pointer hover:bg-gray-200 px-2">
              Vidyapeeth
            </li>
            <li className="font-semibold h-full flex  items-center cursor-pointer hover:bg-gray-200 px-2">
              Upskilling
            </li>
            <li className="font-semibold h-full flex items-center cursor-pointer hover:bg-gray-200 px-2">
              PW Store(Books)
            </li>
            <li className="font-semibold h-full flex items-center cursor-pointer hover:bg-gray-200 px-2">
              Real Test
            </li>
            <li className="font-semibold h-full flex items-center cursor-pointer hover:bg-gray-200 px-2">
              Class 1st - 8th
            </li>
            <li className="font-semibold h-full flex items-center cursor-pointer hover:bg-gray-200 px-2">
              Power Batch
            </li>
          </ul>
        </div>
        {/* right div */}
        <div className="hidden lg:block">
          <motion.button initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
           className="lg:font-bold font-semibold text-white text-xs  bg-blue-800 sm:px-8 py-4 rounded-sm cursor-pointer hover:bg-blue-600">
            Login/Register
            </motion.button>
        </div> 
        {/* it is navber for mobile hambur menu after click then will open item of navbar */}
        <div className="lg:hidden block" onClick={()=>setOpen(!open)}>
          {open === true ?  <img src={cancel} alt="" /> :  <img src={hame} alt="" />}
         
        </div>
        
       
      </div>
    </div>
      {/* navbar item list for mobile */}
        {open && (
        <div className="w-[100vw] z-10 max-w-[100%] px-10 left-0  lg:hidden block">
          <div className="flex flex-col justify-center gap-10 mb-2 mt-2">
          <ul className="flex flex-col gap-8">
            <li className="font-semibold cursor-pointer flex flex-col gap-4  px-2">
              Vidyapeeth
              <span className="border border-gray-300"></span>
            </li>
             
            <li className="font-semibold  flex flex-col gap-4 px-2">
              Upskilling
              <span className="border border-gray-300"></span>
            </li>
            <li className="font-semibold flex flex-col gap-4  px-2">
              PW Store(Books)
              <span className="border border-gray-300"></span>
            </li>
            <li className="font-semibold flex flex-col gap-4  px-2">
              Real Test
              <span className="border border-gray-300"></span>
            </li>
            <li className="font-semibold flex flex-col gap-4  px-2">
              Class 1st - 8th
              <span className="border border-gray-300"></span>
            </li>
            <li className="font-semibold flex flex-col gap-4  px-2">
              Power Batch
              <span className="border border-gray-300"></span>
            </li>
          </ul>
          <div className="">
          <motion.button initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
           className="font-bold text-white text-xs  bg-blue-800 px-8 py-4 rounded-sm cursor-pointer hover:bg-blue-600">
            Login/Register
            </motion.button>
        </div> 
        </div>
          </div>
          )}
          </>
  
  );
}

export default Navbar;
