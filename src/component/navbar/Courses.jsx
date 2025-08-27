import React, { useState } from "react";
import rightarr from "../../assets/rightarr.png";
import { courses } from "../../data";

function Courses() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div
      onMouseLeave={() => setActiveIndex(null)}
      className="z-10 absolute left-0 top-full hidden w-[1100px] bg-white shadow-lg border border-gray-200 group-hover:block"
    >
      <div className="flex w-[1100px] ">
        {/* left side */}
        <div className="flex-2 flex flex-col shadow-2xs mx-3">
          {courses.map((c, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              className="py-4 flex justify-between items-center hover:bg-gray-100"
            >
              <div className="flex flex-col">
                <h1 className="text-xl font-semibold">{c.title}</h1>
                <p className="text-gray-400 text-xs">{c.desc}</p>
              </div>
              <img className="w-4 h-4" src={rightarr} alt="" />
            </div>
          ))}
        </div>
        {/* right side */}
        <div className="flex-4 p-6 grid grid-cols-2 gap-4 cursor-pointer">
          {activeIndex !== null &&
            courses[activeIndex].items.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 border rounded-lg shadow-2xl bg-white hover:shadow-md transition"
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.name}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
