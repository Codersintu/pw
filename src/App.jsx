import { useState } from 'react'
import './App.css'
import Navbar from './component/navbar/Navbar'
import Home from './component/home/Home'
import Exam from './component/examdetail/Exam'
import {motion,useScroll} from "motion/react"
import Main from './component/Centerplace/Main'
import PrepInfo from './component/home/PrepInfo'
function App() {
 const {scrollYProgress}=useScroll()

  return (
    <div>
      <motion.div  style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 80,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    zIndex:999,
                    backgroundColor: "#ff0088",
                }}/>
      <Navbar/>
      <Home/>
      <Exam/>
      {/* <Main/> */}
    </div>
  )
}

export default App
