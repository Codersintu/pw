import React from "react";
import { cities } from "../../data";
import { motion } from "motion/react";
function Card() {
  return (
    <div className="shadow-2xl mt-20 rounded-xl bg-white max-w-full flex justify-center items-center">
      <div className="flex flex-col items-center mt-7">
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-4xl font-semibold">
            Find Vidyapeeth Centre in your city
          </h1>
          <p className="text-2xl text-gray-600 font-semibold">
            Available in <span className="text-blue-600">105</span> cities
          </p>
        </div>

        <div className="grid grid-cols-4 mt-10 gap-5">
          {cities.map((c, idx) => (
            <div
              key={idx}
              className="shadow-2xs cursor-pointer hover:border-gray-300 border border-gray-200 "
            >
              <div className="flex px-15 py-6 items-center gap-4 ">
                <motion.div whileHover={{scale:1.3}} transition={{duration:0.5}} className="max-w-[70px] border border-gray-200 rounded-md">
                  <motion.img whileHover={{scale:1.1}} transition={{duration:0.5}}  className="max-w-[100%] overflow-hidden object-cover" src={c.image} alt="" />
                </motion.div>
                <h1>{c.title}</h1>
              </div>
            </div>
          ))}
        </div>
        <div className="">
          <motion.button
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            // transition={{duration:0.4}}
            className="relative mt-10 py-4 px-20 font-semibold text-white rounded-md cursor-pointer overflow-hidden"
          >
            {/* Animated border using motion.div */}
            <motion.div
              className="absolute inset-0 rounded-md border-2 border-transparent"
              style={{
                background: "linear-gradient(90deg, #3b82f6, #ec4899, #8b5cf6)",
                backgroundSize: "300% 100%",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Button inner */}
            <span className="relative z-10">See More...</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Card;
