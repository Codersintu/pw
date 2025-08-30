import React, { useState } from "react";
import arrow from "../../assets/arrow.png";
import reect from "../../assets/react.webp";
import { motion } from "framer-motion";
import bank from "../../assets/bank.webp";
import hand from "../../assets/hand.webp";
import hand2 from "../../assets/hand2.webp";

const cardVariants = {
  hidden: { y: 150, opacity: 0 }, // left side se hidden
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const exams = [
  {
    title: "NEET",
    bg: "bg-pink-100",
    image: reect,
    tags: ["class 11", "class 12", "Dropper"],
  },
  {
    title: "IIT JEE",
    bg: "bg-yellow-100",
    image: bank,
    tags: ["class 11", "class 12", "Dropper"],
  },
  {
    title: "School Preparation",
    bg: "bg-orange-100",
    image: reect,
    tags: ["class 6", "class 7", "class 8", "More"],
  },
  {
    title: "UPSC",
    bg: "bg-blue-100",
    image: hand,
    tags: [],
  },
  {
    title: "Govt Job Exams",
    bg: "bg-purple-100",
    image: hand2,
    tags: ["SSC", "Banking", "Teaching", "Judiciary"],
  },
  {
    title: "Defence",
    bg: "bg-cyan-100",
    image: reect,
    tags: ["NDA", "CDS", "AFCAT", "Agniveer"],
  },
];

function Card() {
  const [activeidx, setActiveidx] = useState(null);
  return (
    <React.Fragment>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        onMouseLeave={() => setActiveidx(null)}
        className="grid grid-cols-3 gap-5"
      >
        {exams.map((e, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setActiveidx(idx)}
            className="w-[400px] hover:border-black items-stretch flex bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="flex-2 p-5">
              <div className="flex flex-col gap-10">
                <h1 className="text-2xl font-bold">{e.title}</h1>
                {e.tags.length > 0 && (
                  <div className="grid grid-cols-2 gap-4">
                    {e.tags.map((tag, i) => (
                      <button
                        key={i}
                        className="border py-2 cursor-pointer rounded-4xl border-gray-400 gap-2"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-10">
                  <h1 className="text-[20px] text-gray-700">
                    Explore Category
                  </h1>
                  <div className="bg-gray-200 rounded-4xl p-1 cursor-pointer">
                    <img className="w-[30px]" src={arrow} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 bg-pink-200 rounded-l-full flex justify-center items-center">
              <div key={idx} className="">
                <motion.img animate={{rotate:360}}  whileHover={{
                scale: 2.1,
                 transition: { duration: 0.2 }
                   }}
                  className={`${
                    activeidx === idx ? "w-[110px]" : "w-[80px]"
                  } transition-all duration-300 `}
                  src={e.image}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </React.Fragment>
  );
}

export default Card;
