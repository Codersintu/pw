import React from "react";
import img1 from "../../assets/video.png";
import img2 from "../../assets/Y.png";
import img3 from "../../assets/brain.png";
import img4 from "../../assets/cert.png";
import { motion } from "framer-motion"
const detail = [
  {
    img: img1,
    title: "Daily Live",
    d: "Interactive classes",
  },
  {
    img: img2,
    title: "10 Million+",
    d: "Tests,sample papers & notes",
  },
  {
    img: img3,
    title: "24 * 7",
    d: "Doubt solving session",
  },
  {
    img: img4,
    title: "100 +",
    d: "Offline centeres",
  },
];

// Parent variants (stagger control)
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // ek ek karke 0.2s delay
    },
  },
};

// Child variants (slide from bottom)
const awardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function PrepInfo() {
  return (
    <div className="w-full max-w-[1200px] absolute bg-white p-10 shadow-2xl flex justify-center items-center -bottom-48  rounded-md">
      <div className="flex flex-col justify-around lg:flex-row lg:justify-around w-full max-w-[1200px]">
        {detail.map((d, idx) => (
          <React.Fragment key={idx}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"   // 👈 animation triggers on scroll
              viewport={{ once: true, amount: 0.3 }} // 30% visible, run once
              className="flex flex-col items-center gap-2.5"
            >
              <motion.img
                variants={awardVariants}
                className="w-[46px]"
                src={d.img}
                alt=""
              />
              <div className="flex flex-col items-center">
                <motion.h1
                  variants={awardVariants}
                  className="text-xl font-semibold"
                >
                  {d.title}
                </motion.h1>
                <motion.p
                  variants={awardVariants}
                  className="text-gray-500"
                >
                  {d.d}
                </motion.p>
              </div>
            </motion.div>
            <span className="border border-gray-300"></span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}


export default PrepInfo;
