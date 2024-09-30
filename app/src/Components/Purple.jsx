import React from 'react'
import earth3 from '../assets/earth3.png'; 

function Purple() {
  return (
    <div className='relative max-w-screen-2xl h-[110vh] sm:h-[180vh]'>
     <div className='w-full h-full'>
        <img src={earth3} alt="" className='w-[100vw] h-full object-cover' />
     </div>
    </div>
  )
}

export default Purple
