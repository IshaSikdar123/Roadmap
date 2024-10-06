import React from 'react'
import earth4 from '../assets/earth4.png';
import pipe2 from '../assets/pipe2.svg';

function Golden() {
  return (
    <div className='relative max-w-screen-2xl h-[110vh] sm:h-[180vh]'>
     <div className='w-full h-full'>
        <img src={earth4} alt="" className='w-[100vw] z-[50] h-full object-cover' />
        <img 
  src={pipe2} 
  alt="Pipe" 
  className='absolute w-[150vw] h-[250vh] z-[50] -top-[19.8vw] right-[2vw] opacity-100 visible'
  style={{ clipPath: 'inset(17.5% 0 10.5% 0)' }}       
/>
     </div>
    </div>
  )
}

export default Golden
