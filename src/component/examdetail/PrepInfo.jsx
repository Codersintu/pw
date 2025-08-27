import React from "react";
import img1 from "../../assets/video.png";
import img2 from "../../assets/Y.png";
import img3 from "../../assets/brain.png";
import img4 from "../../assets/cert.png";

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
function PrepInfo() {
  return (
    <div className="w-[1200px] absolute bg-white h-[200px] shadow-2xl flex justify-center items-center -bottom-52 rounded-md">
      <div className="flex justify-around w-[1200px]">
        {detail.map((d, idx) => (
          <>
            <div key={idx} className="flex flex-col items-center gap-2.5">
              <img className="w-[46px]" src={d.img} alt="" />
              <div className="flex flex-col items-center">
                <h1 className="text-xl font-semibold">{d.title}</h1>
                <p className="text-gray-600">{d.d}</p>
              </div>
            </div>
            <span className="border border-gray-300"></span>
          </>
        ))}
      </div>
    </div>
  );
}

export default PrepInfo;
