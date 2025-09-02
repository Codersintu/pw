import React from "react";
import heroimg from "../../assets/hero.webp";
import { motion } from "motion/react";

function Homedetail() {
  return (
    <div className="bg-gradient-to-b from-violet-200 to-pink-200  flex justify-center">
      <div className="flex items-center max-w-[1200px]">
        <div className="flex-1">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-semibold">
              Bharat's{" "}
              <span className="text-blue-600">
                Trusted & <br /> Affordable{" "}
              </span>{" "}
              <br /> Educational Platform
            </h1>
            <p className="text-sm text-gray-700">
              Unlock your potential by signing up with Physics Wallah- <br />{" "}
              The most affordable learning solution
            </p>
          </div>
          <motion.button
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
            <span className="relative z-10">Get Started</span>
          </motion.button>
        </div>
        <div className="flex-1">
          <img src={heroimg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Homedetail;
