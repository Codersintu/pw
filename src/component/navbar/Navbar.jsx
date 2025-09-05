import React from "react";
import pwimg from "../../assets/pw.png";
import downarr from "../../assets/down.png";
import Courses from "./Courses";
import { motion } from "motion/react";
function Navbar() {
  return (
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
        <div className="">
          <motion.button initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
           className="font-bold text-white bg-blue-800 py-3 sm:px-8 px-5  rounded-sm cursor-pointer hover:bg-blue-600">
            Login/Register
            </motion.button>
        </div>
      </div>
    </div>
  
  );
}

export default Navbar;
