import React, { useEffect, useState } from "react";
import leftarr from "../../assets/leftarr.png";
import rightarr from "../../assets/rightarr.png";
import img1 from "../../assets/1st.webp";
import img2 from "../../assets/2nd.jpg";
import img3 from "../../assets/3rd.webp";
import img4 from "../../assets/4th.jpg";
import img5 from "../../assets/5th.jpg";
import img6 from "../../assets/6th.jpg";
import img7 from "../../assets/7th.webp";
import img8 from "../../assets/8th.png";
function Slide() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  const [currentidx, setcurrentidx] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setcurrentidx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      onMouseLeave={() => setActiveIndex(null)}
      className="relative overflow-x-hidden flex justify-center items-center cursor-pointer"
    >
      <div
        onClick={() =>
          setcurrentidx((prev) => (prev === 0 ? images.length - 1 : prev - 1))
        }
        className={`absolute left-0  z-10 cursor-pointer ${
          activeIndex !== null ? "block" : "hidden"
        } ${activeIndex !== null ? "bg-gray-400" : "hidden"}`}
      >
        <img src={leftarr} alt="" />
      </div>
      <div
        className="flex relative z-0 transition-transform duration-1000"
        style={{
          transform: `translateX(-${currentidx * 100}%)`,
        }}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            onMouseEnter={() => setActiveIndex(idx)}
            src={img}
            alt=""
          />
        ))}
      </div>

      <div
        onClick={() =>
          setcurrentidx((prev) => (prev === images.length - 1 ? 0 : prev + 1))
        }
        className={`absolute right-0 z-10 cursor-pointer ${
          activeIndex !== null ? "block" : "hidden"
        } ${activeIndex !== null ? "bg-gray-400" : "hidden"}`}
      >
        <img src={rightarr} alt="" />
      </div>

      {/* circle dot */}

      <div className="absolute w-full flex justify-center items-center bottom-3 gap-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setcurrentidx(idx)}
            className={`w-3 h-3 cursor-pointer rounded-full ${
              currentidx === idx ? "bg-blue-700" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Slide;
