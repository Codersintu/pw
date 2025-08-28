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

const awardVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

function PrepInfo() {
  return (
    <div className="w-[1200px] absolute bg-white h-[200px] shadow-2xl flex justify-center items-center -bottom-48  rounded-md">
      <div className="flex justify-around w-[1200px]">
        {detail.map((d, idx) => (
          <React.Fragment key={idx}>
            <motion.div
              variants={awardVariants}
              initial="initial"
              whileInView="animate"   // 👈 animation triggers on scroll
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
