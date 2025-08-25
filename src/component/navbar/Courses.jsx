import React, { useState } from 'react'
import rightarr from "../../assets/rightarr.png"

function Courses() {
  const [activeIndex,setActiveIndex]=useState(null)
  const courses = [
   {
    title: "Competitive Exams",
    desc: "IIT JEE, NEET, ESE, GATE, AE/JE, Olympiad",
    items: [ { name: "IIT JAM", icon: "⚛️" },
      { name: "CSIR NET", icon: "🔬" },
      { name: "LAW", icon: "📜" },
      { name: "CUET", icon: "🎓" },
      { name: "UGC NET", icon: "🏛️" },
      { name: "GMAT", icon: "📘" },],
  },
  {
    title: "Only IAS",
    desc: "UPSC, State PSC",
    items: [ { name: "IIT JAM", icon: "⚛️" },
      { name: "CSIR NET", icon: "🔬" },
      { name: "LAW", icon: "📜" },
      { name: "CUET", icon: "🎓" },
      { name: "UGC NET", icon: "🏛️" },
      { name: "GMAT", icon: "📘" },], 
  },
  {
    title: "School Preparation",
    desc: "Foundation (Class 6-10), Commerce, Arts, CuriousJr, Science, International Boards",
    items: [ { name: "IIT JAM", icon: "⚛️" },
      { name: "CSIR NET", icon: "🔬" },
      { name: "LAW", icon: "📜" },
      { name: "CUET", icon: "🎓" },
      { name: "UGC NET", icon: "🏛️" },
      { name: "GMAT", icon: "📘" },],
  },
  {
    title: "Govt Exam",
    desc: "SSC, Banking, Judiciary, Teaching, Railway, UP Exams, Defence, etc.",
    items: [ { name: "IIT JAM", icon: "⚛️" },
      { name: "CSIR NET", icon: "🔬" },
      { name: "LAW", icon: "📜" },
      { name: "CUET", icon: "🎓" },
      { name: "UGC NET", icon: "🏛️" },
      { name: "GMAT", icon: "📘" },],
  },
  {
    title: "UG & PG Entrance Exams",
    desc: "MBA, IPMAT, IIT JAM, CSIR NET, LAW, CUET, UGC NET, GMAT, Design & Architecture, CUET PG, NEET PG, Pharma",
    items: [
      { name: "MBA", icon: "📚" },
      { name: "IPMAT", icon: "🎓" },
      { name: "IIT JAM", icon: "⚛️" },
      { name: "CSIR NET", icon: "🔬" },
      { name: "LAW", icon: "📜" },
      { name: "CUET", icon: "🎓" },
      { name: "UGC NET", icon: "🏛️" },
      { name: "GMAT", icon: "📘" },
      { name: "Design & Architecture", icon: "📐" },
      { name: "CUET PG", icon: "✅" },
      { name: "NEET PG", icon: "🧬" },
      { name: "Pharma", icon: "💊" },
    ],
  },
  {
    title: "Finance",
    desc: "CA, CS, ACCA",
    items: [ { name: "IIT JAM", icon: "⚛️" },
      { name: "CSIR NET", icon: "🔬" },
      { name: "LAW", icon: "📜" },
      { name: "CUET", icon: "🎓" },
      { name: "UGC NET", icon: "🏛️" },
      { name: "GMAT", icon: "📘" },],
  },
  {
    title: "Others",
    desc: "Online Degrees, Financial Certification, Private Banking",
    items: [ { name: "IIT JAM", icon: "⚛️" },
      { name: "CSIR NET", icon: "🔬" },
      { name: "LAW", icon: "📜" },
      { name: "CUET", icon: "🎓" },
      { name: "UGC NET", icon: "🏛️" },
      { name: "GMAT", icon: "📘" },],
  },
 
];

  return (
    <div onMouseLeave={() => setActiveIndex(null)}  className="absolute left-0 top-full hidden w-[1100px] bg-white shadow-lg border border-gray-200 group-hover:block">
         <div className="flex w-[1100px] ">
          {/* left side */}
            <div className="flex-2 flex flex-col shadow-2xs mx-3">
              {courses.map((c,index)=>(
               <div key={index} onMouseEnter={() => setActiveIndex(index)}
             className="py-4 flex justify-between items-center hover:bg-gray-100">
                <div className="flex flex-col">
                    <h1 className='text-xl font-semibold'>{c.title}</h1>
                    <p className='text-gray-400 text-xs'>{c.desc}</p>
                </div>
                <img className='w-4 h-4' src={rightarr} alt="" />
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
  )
}

export default Courses