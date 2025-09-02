import React from 'react'
import Video from './Video'
import Explain from './Explain'

function Main() {
  return (
    <div className='w-[100vw] relative border mt-15 flex flex-col justify-center items-center'>
    <Video/>
    <Explain/>
    </div>
  )
}

export default Main