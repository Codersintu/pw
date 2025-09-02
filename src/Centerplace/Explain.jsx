import React from 'react'
import Card from './Card'

function Explain() {
  return (
    <div className='w-[1200px] z-[999] absolute top-2 flex flex-col justify-center'>
     <div className="flex flex-col justify-center items-center gap-6">
        <h1 className='text-4xl text-blue-700 font-bold'>Explore Tech-Enabled Offline Vidyapeeth Centres</h1>
       <p className='text-2xl text-pink-700 font-bold'>Creating new benchmarks in learning experiences</p>
     </div>
     <div className=""><Card/></div>
    </div>
  )
}

export default Explain