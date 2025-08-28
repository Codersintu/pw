import React from 'react'
import PrepInfo from './PrepInfo'
import ExamInfo from './ExamInfo'
function Exam() {
  return (
    <div className='w-[100vw] flex justify-center'>
    <PrepInfo/>
    <ExamInfo/>
    </div>
  )
}

export default Exam