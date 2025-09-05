import React from 'react'
import Video from './Video'
import Explain from './Explain'
import {motion} from "motion/react"
function Main() {
  return (
    <div className='w-[100vw] lg:relative lg:mt-15 mt-10 flex flex-col justify-center items-center lg:p-0 p-10'>
    <Video  />
    <Explain/>
    </div>
  )
}

export default Main