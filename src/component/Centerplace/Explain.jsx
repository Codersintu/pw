import React from 'react'
import Card from './Card'
import {motion} from "motion/react"
import { cardVariants } from '../examdetail/Card'
function Explain() {

  return (
  
    <motion.div className='w-[1200px] absolute top-2 flex flex-col justify-center'>
     <motion.div initial={{y:100,opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.8}} className="flex flex-col justify-center items-center gap-6">
        <h1 className='text-4xl text-blue-700 font-bold'>Explore Tech-Enabled Offline Vidyapeeth Centres</h1>
       <p className='text-2xl text-pink-700 font-bold'>Creating new benchmarks in learning experiences</p>
     </motion.div>
     <motion.div initial={{y:100,opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.9,ease:"easeInOut"}}><Card/></motion.div>
    </motion.div>

  )
}

export default Explain