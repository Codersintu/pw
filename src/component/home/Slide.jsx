import React, { useEffect, useState } from 'react'
import leftarr from "../../assets/leftarr.png"
import rightarr from "../../assets/rightarr.png"
import img1 from "../../assets/1st.webp"
import img2 from "../../assets/2nd.jpg"
import img3 from "../../assets/3rd.webp"
import img4 from "../../assets/4th.jpg"
import img5 from "../../assets/5th.jpg"

function Slide() {
    const images=[img1,img2,img3,img4,img5];
    const [currentidx,setcurrentidx]=useState(0)
    useEffect(()=>{
     const interval=setInterval(()=>{
      setcurrentidx((prev)=>prev === images.length ? 0 : prev +1)
     },4000)
     return ()=>clearInterval(interval)
    },[images.length])

  return (
     <div className="relative flex justify-center items-center cursor-pointer">
        
         <div onClick={()=>setcurrentidx((prev)=> prev === 0 ? images.length - 1:prev -1)} className="absolute left-0  z-10 cursor-pointer">
            <img src={leftarr} alt="" />
         </div>
         <div  className="flex relative z-0 transition-transform duration-1000" style={{
          transform: `translateX(-${currentidx * 100}%)`,
        }}>
         {images.map((img,idx)=>(  
            <img key={idx} src={img} alt="" />
         ))}
        </div>

         
         <div onClick={()=>setcurrentidx((prev)=> prev === images.length ? 0:prev + 1)} className="absolute right-0 z-10 cursor-pointer">
            <img src={rightarr} alt="" />
         </div>
         
     </div>
  )
}

export default Slide