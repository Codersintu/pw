import React from 'react'

import Slide from './Slide'
import Homedetail from './Homedetail'

function Home() {
  return (
   <div className="h-[calc(100vh - 80px)] w-[100vw]  z-0">
    <Slide/>
    <Homedetail/>
   </div>
  )
}

export default Home