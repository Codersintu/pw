import React, { useState } from "react";
import arrow from "../../assets/arrow.png";
import reect from "../../assets/react.webp";

function Card() {
  const [activeidx, setActiveidx] = useState(false);
  return (
    <div
      onMouseEnter={() => setActiveidx(true)}
      onMouseLeave={() => setActiveidx(false)}
      className={`${activeidx == true ? "border" : null}`}
    >
      <div class="w-[400px] items-stretch flex bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="flex-2 p-5">
          <div className="flex flex-col gap-10">
            <h1 className="text-2xl font-bold">NEET</h1>
            <div className="grid grid-cols-2 gap-4">
              <button className="border py-2 cursor-pointer rounded-4xl border-gray-400 gap-2">
                class 11
              </button>
              <button className="border py-2 cursor-pointer rounded-4xl border-gray-400">
                class 12
              </button>
              <button className="border py-2 cursor-pointer rounded-4xl border-gray-400">
                Dropper
              </button>
            </div>
            <div className="flex items-center gap-10">
              <h1 className="text-[20px] text-gray-700">Explore Category</h1>
              <div className="bg-gray-200 rounded-4xl p-1 cursor-pointer">
                <img className="w-[30px]" src={arrow} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-pink-200 rounded-l-full flex justify-center items-center">
          <div className="">
            <img
              className={`${
                activeidx === true ? "w-[120px]" : "w-[80px]"
              } transition-all duration-300`}
              src={reect}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
