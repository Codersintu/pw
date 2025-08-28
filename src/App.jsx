import { useState } from 'react'
import './App.css'
import Navbar from './component/navbar/Navbar'
import Home from './component/home/Home'
import Exam from './component/examdetail/Exam'
import ExamInfo from './component/examdetail/ExamInfo'

function App() {
 

  return (
    <>
      <Navbar/>
      <Home/>
      <Exam/>
    </>
  )
}

export default App
