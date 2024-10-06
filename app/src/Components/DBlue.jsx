import React from 'react'
import earth5 from '../assets/earth5.png';
import pipe2 from '../assets/pipe2.svg';

function DBlue() {
  return (
    <div className='relative max-w-screen-2xl h-[110vh] sm:h-[180vh]'>
     <div className='w-full h-full'>
        <img src={earth5} alt="" className='w-[100vw] z-[50] h-full object-cover' />
        <img 
  src={pipe2} 
  alt="Pipe" 
  className='absolute w-[150vw] h-[250vh] z-[50] -top-[19.8vw] right-[3vw] opacity-100 visible'
  style={{ clipPath: 'inset(17.5% 0 10.5% 0)' }}       
/>
     </div>
    </div>
  )
}

export default DBlue
