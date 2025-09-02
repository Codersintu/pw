import React from 'react'
import video from "../assets/video.mp4"
function Video() {
  return (
    <div >
        <video className='w-[100vw] z-0 bg-black' src={video}
         muted         // disables audio
        controls={false} // disables ALL default controls (timeline, volume, fullscreen, etc.)
        autoPlay// optional
        playsInline
        loop  
        auto        // optional if you want looping
        ></video>
    </div>
  )
}

export default Video