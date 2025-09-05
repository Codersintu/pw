import React from 'react'
import video from "../../assets/video.mp4"
import {motion} from "motion/react"
function Video() {
  return (
    <motion.div initial={{y:100,opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.3,ease:"easeInOut"}} >
          
        <video className='w-[100vw] z-0 bg-black' src={video}
         muted         // disables audio
        controls={false} // disables ALL default controls (timeline, volume, fullscreen, etc.)
        autoPlay// optional
        playsInline
        loop  
        auto        // optional if you want looping
        ></video>
    </motion.div>
  )
}

export default Video