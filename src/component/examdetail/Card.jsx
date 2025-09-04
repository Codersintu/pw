import React, { useState } from "react";
import arrow from "../../assets/arrow.png";
import { motion } from "framer-motion";
import { exams } from "../../data";

export const cardVariants = {
  initial: { y: 100 }, // left side se hidden
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};



function Card() {
  const [activeidx, setActiveidx] = useState(null);
 const [showAll, setShowAll] = useState(false);
 const visibleExams = showAll ? exams : exams.slice(0, 6);

  return (
    <React.Fragment>
      <div className="flex flex-col items-center">
      <motion.div
        variants={cardVariants}
        initial="initial"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        onMouseLeave={() => setActiveidx(null)}
        className="grid grid-cols-3 gap-5 "
      >
        {visibleExams.map((e, idx) => (
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
                  <div className="bg-gray-200 hover:bg-blue-600 rounded-4xl p-1 cursor-pointer">
                    <img className="w-[30px]" src={arrow} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 bg-pink-200 rounded-l-full flex justify-center items-center">
              <div key={idx} className="">
                <motion.img  whileHover={{
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
      <div className="mt-10">
        {!showAll ? (
           <button onClick={()=>setShowAll(true)} className="text-blue-600  cursor-pointer text-2xl font-semibold border-b border-dotted border-purple-600 hover:text-purple-800">View All Categories({exams.length})</button>
        ):(
           <button onClick={()=>setShowAll(false)} className="text-blue-600  cursor-pointer text-2xl font-semibold border-b border-dotted border-purple-600 hover:text-purple-800">Show less...</button>
        )}
         
          </div>
      </div>
    </React.Fragment>
  );
}

export default Card;
