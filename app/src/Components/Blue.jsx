// import React, { useState } from 'react';
// import earth from '../assets/earth.png'; 
// import ring from '../assets/ring.png';
// import pipe from '../assets/pipe.svg';
// import road from '../assets/road.svg'; 
// import btn from '../assets/btn.svg';
// import icon from '../assets/icon.png';
// import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, ChakraProvider } from '@chakra-ui/react'; // Import Chakra UI components

// function Blue() {
//   const [difficulty, setDifficulty] = useState('basics'); // State to manage difficulty level
//   const [buttonLink, setButtonLink] = useState('#'); // State to manage button link


//   const buttonPositions = [
//     { top: '10%', left: '20%' },  // 1st button (left)
//     { top: '30%', left: '70%' },  // 2nd button (right)
//     { top: '50%', left: '20%' },  // 3rd button (left)
//     { top: '70%', left: '70%' },  // 4th button (right)
//     { top: '90%', left: '20%' },  // 5th button (left)
//   ];


//   // Function to update difficulty level and button link
//   const handleDifficultyChange = (level, link) => {
//     setDifficulty(level);
//     setButtonLink(link);
//   };

//   return (
//     <ChakraProvider>
//       <div className="relative w-full h-[110vh] sm:h-[180vh]">
//         <img src={earth} alt="Earth" className="w-full h-full object-cover" />
//         <img 
//   src={pipe} 
//   alt="Pipe" 
//   className='absolute  w-[150vw] h-[250vh] z-[50] top-[21vw] left-0 opacity-100 visible'
//   style={{ clipPath: 'inset(0 0 46.5% 0)' }} 
// />

//         {/* Glowing Ball */}
//         <div className="absolute top-[30vw] sm:top-[14vw] left-[25vw] sm:left-[22vw] w-[4vw] h-[4vw] rounded-full bg-[#08d2f6]"
//              style={{
//                filter: 'brightness(200%) blur(1vw)',
//                boxShadow: '0 0 10vw 6vw rgba(8,210,246,0.5)'
//              }}></div>

//         {/* Ring Image */}
//         <img
//           src={ring}
//           alt="Ring"
//           className="absolute w-[38vw] sm:w-[17vw] top-[5vw] sm:top-[3vw] left-[9vw] sm:left-[15vw]"
//         />

//         {/* Road Button */}
//         <button 
//           className="absolute w-[60vw] sm:w-[30vw] top-[7vw] sm:top-[4vw] -left-[3vw] sm:left-[9vw] z-[50] focus:outline-none transform hover:scale-105 transition-transform duration-300"
//         >
//           <img src={road} alt="Road" className="w-full filter brightness-100" />
//         </button>

//         {/* Glassmorphism Button with Shiny Effect */}
//         <div className="absolute w-[45vw] sm:w-[40vw] h-[35vh] sm:h-[60vh] top-[6vw] sm:top-[2vw] left-[54vw] sm:left-[46vw] rounded-lg shadow-lg overflow-hidden"
//              style={{
//                background: 'linear-gradient(200deg, #34ACAE 0%, #164748 100%)',
//                opacity: '0.8',
//                backdropFilter: 'blur(15px)',
//                backgroundColor: 'rgba(255, 255, 255, 0.1)',
//                border: '1px solid rgba(255, 255, 255, 0.18)',
//              }}>
//           <h1 className="text-white text-[5vw] sm:text-[3vw] font-semibold m-1 sm:m-1 ml-1 sm:ml-5">EXCEL</h1>

//           <div className="sm:w-[85%] h-[75%] m-[1vw] bg-black bg-opacity-20 rounded-md p-[1vw] overflow-y-auto">
//             <h2 className="text-white font-medium text-[3vw] sm:text-[1.5vw] mb-[1vw]">This Course includes</h2>

//             <Accordion allowToggle>
//               {Array.from({ length: 10 }).map((_, index) => (
//                 <AccordionItem
//                   key={index} 
//                   className="relative z-[50] w-[35vw] sm:w-[25vw] top-1 mb-[1vw] rounded-lg bg-gray-900 border border-gray-700"
//                 >
//                   <h3>
//                     <AccordionButton className="p-[0.5vw] bg-gray-800 rounded-t-lg">
//                       <Box flex="1" textAlign="left" className="font-medium text-white text-[2.5vw] sm:text-[1vw]">
//                         Level-{index + 1} {difficulty}
//                       </Box>
//                       <AccordionIcon color="white" />
//                     </AccordionButton>
//                   </h3>
//                   <AccordionPanel className="p-[0.5vw] text-white text-[1vw] sm:text-[1vw] z-[50]">
//                     {/* Change content dynamically based on difficulty */}
//                     {difficulty === 'basics' ? (
//                       `This is the basic level content for Level ${index + 1}.`
//                     ) : difficulty === 'medium' ? (
//                       `This is the medium level content for Level ${index + 1}.`
//                     ) : (
//                       `This is the hard level content for Level ${index + 1}.`
//                     )}
//                   </AccordionPanel>

//                   {/* "Start" Button for Each Accordion Item */}
//                   <a 
//                     href={buttonLink} 
//                     target="_blank" // Opens in a new tab
//                     rel="noopener noreferrer" // Prevents security vulnerabilities
//                     className="hidden sm:block absolute w-[2vw] sm:w-[5.5vw] left-[20vw] sm:left-[26vw] -top-[1.1vw] sm:-top-[1.1vw] mt-[1vw] mr-[1vw] bg-black z-40 text-white p-[0.5vw] rounded-lg hover:bg-[#1f978b] transition"
//                   >
//                     Start
//                   </a>
//                 </AccordionItem>
//               ))}
//             </Accordion>
//           </div>
//         </div>

//         {/* Icon Button with Glassmorphism Effect */}
//         <button
//           className="absolute z-[50] w-[9vw] sm:w-[5vw] h-[5vh] sm:h-[5vw] top-[4vw] sm:top-2 left-[91vw] sm:left-[83vw] rounded-full flex justify-center items-center focus:outline-none transform hover:scale-105 transition-transform duration-300"
//           style={{ 
//             background: 'linear-gradient(180deg, #34ACAE 0%, #164748 100%)',
//             backdropFilter: 'blur(15px)',
//             border: '1px solid rgba(255, 255, 255, 0.18)',
//           }} 
//         >
//           <img src={icon} alt="icon" className="w-[80%] h-[80%] z-[50]" />
//         </button>
        

//         {/* {buttonPositions.map((position, index) => (
//           <button 
//             key={index}
//             className="absolute w-[12vw] sm:w-[7vw] h-[10vw] sm:h-[6vw] z-[50] focus:outline-none transform hover:scale-105 transition-transform duration-300"
//             style={{ top: position.top, left: position.left }} // Positioned in "S" shape
//           >
//             <img src={btn} alt={`Button ${index + 1}`} className="w-full" />
//           </button>
//         ))} */}

//         {/* Buttons to Change Difficulty */}
//         <div className='relative z-[50]'>
//           <button 
//             onClick={() => handleDifficultyChange('medium', 'https://github.com/')}
//             className='absolute w-[18vw] bottom-[45vw]'
//           >
//             <img src={btn} alt="Medium" />
//           </button>

//           <button 
//             onClick={() => handleDifficultyChange('hard', 'https://www.scaler.com/')}
//             className='absolute w-[18vw] bottom-[45vw] left-[10vw]'
//           >
//             <img src={btn} alt="Hard" />
//           </button>

          
//         </div>
//       </div>   
//     </ChakraProvider>
//   );
// }

// export default Blue;



import React, { useState } from 'react';
import earth from '../assets/earth.png'; 
import ring from '../assets/ring.png';
import road from '../assets/road.svg'; 

import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, ChakraProvider } from '@chakra-ui/react';

function Blue() {


  const difficulty = 'basics'; // Example of difficulty level, could be 'basics', 'medium', or 'hard'
  const buttonLink = 'https://example.com'; // Example button link

  const [boxContent, setBoxContent] = useState("Click an SVG element");

  // Click handlers for SVG elements
  const handleClick1 = () => setBoxContent("Clicked on Circle 1");
  const handleClick2 = () => setBoxContent("Clicked on Circle 2");
  const handleClick3 = () => setBoxContent("Clicked on Circle 3");
  const handleClick4 = () => setBoxContent("Clicked on Circle 4");
  const handleClick5 = () => setBoxContent("Clicked on Circle 5");
  
  return (
    
      <div className="max-w-screen-2xl h-screen relative sm:h-[180vh]">
        <img src={earth} alt="Earth" className="w-full h-full object-cover" />                            

        {/* Glowing Ball */}
        <div className="absolute top-[30vw] sm:top-[14vw] left-[25vw] sm:left-[22vw] w-[4vw] h-[4vw] rounded-full bg-[#08d2f6]"
             style={{
               filter: 'brightness(200%) blur(1vw)',
               boxShadow: '0 0 10vw 6vw rgba(8,210,246,0.5)'
             }}></div>

       
        {/* <img
          src={ring}
          alt="Ring"
          className="absolute w-[38vw] sm:w-[17vw] top-[5vw] sm:top-[3vw] left-[9vw] sm:left-[15vw]"
        /> */}

        {/* Road Button */}
        <button 
          className="absolute w-[60vw] sm:w-[30vw] top-[7vw] sm:top-[10vw] -left-[3vw] sm:left-[9vw] z-[50] focus:outline-none transform hover:scale-105 transition-transform duration-300"
        >
          <img src={road} alt="Road" className="w-full h-full " />
        </button>

        {/* SVG elements for interaction */}
        <div className='absolute -top-[52vw] sm:top-[25vw] sm:-left-[8vw] '>
        <svg width="416" height="287" viewBox="0 0 416 287" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-[100vw] sm:w-[100vw] h-screen sm:h-[100vh] ' > 
<g filter="url(#filter0_i_880_558)">
<path d="M98.9984 14.0002C98.9984 33.7686 637.32 240.477 258.999 167C-294.501 59.5002 259.501 246 322.001 341C360.51 399.535 -62.8072 517.936 63.2372 535.5C195.995 554 629.29 369.769 106.998 736C-18.501 824 19.0005 881 250.001 934.5C446.014 979.897 425 1131.57 307.999 1178C-540 1514.5 952.499 1187.5 94.4979 1545.5C-75.3004 1616.35 586.001 1763 323.501 1754C133.02 1747.47 -109 1699.5 301.5 1943C584.5 2069 -338.501 2012 236.5 2147.5C811.502 2283 -379.001 2314 220.5 2471C820.002 2628 -435.5 2539 281 2774.5" stroke="#0B3238" stroke-opacity="0.6" stroke-width="7.05436"/>
</g>
<g filter="url(#filter1_bi_880_558)">
<circle cx="340.27" cy="139.145" r="12.4953" fill="#00FFF0" fill-opacity="0.5" onClick={handleClick1}/>
<circle cx="340.27" cy="139.145" r="10.4022" stroke="url(#paint0_angular_880_558)" stroke-opacity="0.7" stroke-width="4.18625"/>
</g>
<circle cx="340.207" cy="139.208" r="14.5885" stroke="url(#paint1_angular_880_558)" stroke-opacity="0.7" stroke-width="0.761137"/>
<g filter="url(#filter2_bi_880_558)">
<circle cx="54.2702" cy="173.111" r="12.4953" fill="#00FFF0" fill-opacity="0.5" onClick={handleClick2}/>
<circle cx="54.2702" cy="173.111" r="10.4022" stroke="url(#paint2_angular_880_558)" stroke-opacity="0.7" stroke-width="4.18625"/>
</g>
<circle cx="54.2069" cy="173.175" r="14.5885" stroke="url(#paint3_angular_880_558)" stroke-opacity="0.7" stroke-width="0.761137"/>
<g filter="url(#filter3_bi_880_558)">
<circle cx="261.61" cy="169.144" r="12.4953" fill="#00FFF0" fill-opacity="0.5" onClick={handleClick3}/>
<circle cx="261.61" cy="169.144" r="10.4022" stroke="url(#paint4_angular_880_558)" stroke-opacity="0.7" stroke-width="4.18625"/>
</g>
<circle cx="261.547" cy="169.208" r="14.5885" stroke="url(#paint5_angular_880_558)" stroke-opacity="0.7" stroke-width="0.761137"/>
<g filter="url(#filter4_bi_880_558)">
<circle cx="252.311" cy="92.4953" r="12.4953" fill="#00FFF0" fill-opacity="0.5" onClick={handleClick4}/>
<circle cx="252.311" cy="92.4953" r="10.4022" stroke="url(#paint6_angular_880_558)" stroke-opacity="0.7" stroke-width="4.18625"/>
</g>
<circle cx="252.207" cy="92.2078" r="14.5885" stroke="url(#paint7_angular_880_558)" stroke-opacity="0.7" stroke-width="0.761137"/>
<g filter="url(#filter5_bi_880_558)">
<circle cx="158.272" cy="149.144" r="12.4953" fill="#00FFF0" fill-opacity="0.5" onClick={handleClick5}/>
<circle cx="158.272" cy="149.144" r="10.4022" stroke="url(#paint8_angular_880_558)" stroke-opacity="0.7" stroke-width="4.18625"/>
</g>
<circle cx="158.209" cy="149.208" r="14.5885" stroke="url(#paint9_angular_880_558)" stroke-opacity="0.7" stroke-width="0.761137"/>


<defs>
<filter id="filter0_i_880_558" x="11.8501" y="13.1215" width="390.313" height="2764.88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.460067" dy="0.153356"/>
<feGaussianBlur stdDeviation="1.04282"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_880_558"/>
</filter>
<filter id="filter1_bi_880_558" x="322.941" y="121.816" width="34.6572" height="34.6571" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="2.41661"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_880_558"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_880_558" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3.42512" operator="erode" in="SourceAlpha" result="effect2_innerShadow_880_558"/>
<feOffset dy="-0.887993"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_880_558"/>
</filter>
<filter id="filter2_bi_880_558" x="36.9417" y="155.783" width="34.6572" height="34.6571" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="2.41661"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_880_558"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_880_558" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3.42512" operator="erode" in="SourceAlpha" result="effect2_innerShadow_880_558"/>
<feOffset dy="-0.887993"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_880_558"/>
</filter>
<filter id="filter3_bi_880_558" x="244.282" y="151.816" width="34.6572" height="34.6571" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="2.41661"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_880_558"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_880_558" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3.42512" operator="erode" in="SourceAlpha" result="effect2_innerShadow_880_558"/>
<feOffset dy="-0.887993"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_880_558"/>
</filter>
<filter id="filter4_bi_880_558" x="234.982" y="75.1667" width="34.6572" height="34.6571" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="2.41661"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_880_558"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_880_558" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3.42512" operator="erode" in="SourceAlpha" result="effect2_innerShadow_880_558"/>
<feOffset dy="-0.887993"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_880_558"/>
</filter>
<filter id="filter5_bi_880_558" x="140.944" y="131.816" width="34.6572" height="34.6571" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="2.41661"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_880_558"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_880_558" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3.42512" operator="erode" in="SourceAlpha" result="effect2_innerShadow_880_558"/>
<feOffset dy="-0.887993"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_880_558"/>
</filter>


<defs>
  {Array.from({ length: 10 }, (_, index) => {
    const translateX = index % 2 === 0 ? 337.927 : 51.9274;
    const translateY = index < 4 ? 139.246 : 173.212;
    const scale = index % 2 === 0 ? 9.86426 : 11.2162;
    return (
      <radialGradient
        key={`paint${index}_angular_880_558`}
        id={`paint${index}_angular_880_558`}
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform={`translate(${translateX} ${translateY}) rotate(-130.914) scale(${scale} 10.9194)`}
      >
        <stop offset="0.34772" stopColor="#004B42" stopOpacity="0" />
        <stop offset="0.569" stopColor="#5FFFF5" />
        <stop offset="0.600057" stopColor="#89FFF8" />
        <stop offset="0.655752" stopColor="#55EBFF" />
        <stop offset="0.722092" stopColor="#78FFFF" />
        <stop offset="0.864106" stopColor="#73F1DA" stopOpacity="0" />
      </radialGradient>
    );
  })}
</defs>

</defs>
</svg>

          {/* <svg width="1100" height="1120" viewBox="0 0 416 313" fill="none" xmlns="http://www.w3.org/2000/svg">
          
            <g filter="url(#filter0)">
              <path d="M98.9984 14.0002C98.9984 33.7686 637.32 240.477 258.999 167C-294.501 59.5002 259.501 246 322.001 341C360.51 399.535 -62.8072 517.936 63.2372 535.5C195.995 554 629.29 369.769 106.998 736C-18.501 824 19.0005 881 250.001 934.5C446.014 979.897 425 1131.57 307.999 1178C-540 1514.5 952.499 1187.5 94.4979 1545.5C-75.3004 1616.35 586.001 1763 323.501 1754C133.02 1747.47 -109 1699.5 301.5 1943C584.5 2069 -338.501 2012 236.5 2147.5C811.502 2283 -379.001 2314 220.5 2471C820.002 2628 -435.5 2539 281 2774.5" 
                    stroke="#0B3238" strokeOpacity="1" strokeWidth="15.2359"/>
            </g>
          
            <circle cx="340.27" cy="139.145" r="12.4953" fill="#00FFF0" fillOpacity="0.5" onClick={handleClick1}/>
            <circle cx="54.2702" cy="173.111" r="12.4953" fill="#00FFF0" fillOpacity="0.5" onClick={handleClick2}/>
            <circle cx="261.61" cy="169.144" r="12.4953" fill="#00FFF0" fillOpacity="0.5" onClick={handleClick3}/>
            <circle cx="252.311" cy="92.4953" r="12.4953" fill="#00FFF0" fillOpacity="0.5" onClick={handleClick4}/>
            <circle cx="158.272" cy="149.144" r="12.4953" fill="#00FFF0" fillOpacity="0.5" onClick={handleClick5}/>
         
          </svg> */}

          

 {/* <div className="absolute w-[45vw] sm:w-[40vw] h-[35vh] sm:h-[60vh] top-[6vw] sm:top-[2vw] left-[54vw] sm:left-[46vw] rounded-lg shadow-lg overflow-hidden"
style={{
  background: 'linear-gradient(200deg, #34ACAE 0%, #164748 100%)',
  opacity: '0.8',
  backdropFilter: 'blur(15px)',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
}}>
<h1 className="text-white text-[5vw] sm:text-[3vw] font-semibold m-1 sm:m-1 ml-1 sm:ml-5">EXCEL</h1>

<div className="sm:w-[85%] h-[75%] m-[1vw] bg-black bg-opacity-20 rounded-md p-[1vw] overflow-y-auto">
<h2 className="text-white font-medium text-[3vw] sm:text-[1.5vw] mb-[1vw]">This Course includes</h2>

<Accordion allowToggle>
 {Array.from({ length: 10 }).map((_, index) => (
   <AccordionItem
     key={index} 
     className="relative z-[50] w-[35vw] sm:w-[25vw] top-1 mb-[1vw] rounded-lg bg-gray-900 border border-gray-700"
   >
     <h3>
       <AccordionButton className="p-[0.5vw] bg-gray-800 rounded-t-lg">
         <Box flex="1" textAlign="left" className="font-medium text-white text-[2.5vw] sm:text-[1vw]">
           Level-{index + 1} {difficulty}
         </Box>
         <AccordionIcon color="white" />
       </AccordionButton>
     </h3>
     <AccordionPanel className="p-[0.5vw] text-white text-[1vw] sm:text-[1vw] z-[50]">
  
      {difficulty === 'basics' ? (
         `This is the basic level content for Level ${index + 1}.`
       ) : difficulty === 'medium' ? (
         `This is the medium level content for Level ${index + 1}.`
       ) : (
         `This is the hard level content for Level ${index + 1}.`
       )}
     </AccordionPanel>

     <a 
       href={buttonLink} 
       target="_blank" // Opens in a new tab
       rel="noopener noreferrer" // Prevents security vulnerabilities
       className="hidden sm:block absolute w-[2vw] sm:w-[5.5vw] left-[20vw] sm:left-[26vw] -top-[1.1vw] sm:-top-[1.1vw] mt-[1vw] mr-[1vw] bg-black z-40 text-white p-[0.5vw] rounded-lg hover:bg-[#1f978b] transition"
     >
       Start
     </a>
   </AccordionItem>
 ))}
</Accordion>
</div>
</div> */}

        </div>

        {/* Content Box for displaying clicked circle information */}
        <Box className='hidden sm:block'
          position="absolute" 
          bottom="10%" 
          left="12%" 
          transform="translateX(-50%)" 
          padding="20px" 
          backgroundColor="rgba(255, 255, 255, 0.8)" 
          borderRadius="12px" 
          boxShadow="0 4px 20px rgba(0, 0, 0, 0.2)"
          width="80%"
          maxWidth="400px"
          textAlign="center"
        >
          <h2 className=" hidden sm:block text-lg font-bold mb-2">SVG Click Info</h2>
          <p>{boxContent}</p>
        </Box>

        <div className="absolute w-[45vw] sm:w-[40vw] h-[35vh] sm:h-[60vh] top-[6vw] sm:top-[2vw] left-[54vw] sm:left-[46vw] rounded-lg shadow-lg overflow-hidden"
        style={{
          background: 'linear-gradient(200deg, #34ACAE 0%, #164748 100%)',
          opacity: '0.8',
          backdropFilter: 'blur(15px)',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
        }}>
        <h1 className="text-white text-[5vw] sm:text-[3vw] font-semibold m-1 sm:m-1 ml-1 sm:ml-5">EXCEL</h1>

        <div className="sm:w-[85%] h-[75%] m-[1vw] bg-black bg-opacity-20 rounded-md p-[1vw] overflow-y-auto">
          <h2 className="text-white font-medium text-[3vw] sm:text-[1.5vw] mb-[1vw]">This Course includes</h2>

          <Accordion allowToggle>
            {Array.from({ length: 10 }).map((_, index) => (
              <AccordionItem
                key={index} 
                className="relative z-[50] w-[35vw] sm:w-[25vw] top-1 mb-[1vw] rounded-lg bg-gray-900 border border-gray-700"
              >
                <h3>
                  <AccordionButton className="p-[0.5vw] bg-gray-800 rounded-t-lg">
                    <Box flex="1" textAlign="left" className="font-medium text-white text-[2.5vw] sm:text-[1vw]">
                      Level-{index + 1} {difficulty}
                    </Box>
                    <AccordionIcon color="white" />
                  </AccordionButton>
                </h3>
                <AccordionPanel className="p-[0.5vw] text-white text-[1vw] sm:text-[1vw] z-[50]">
                  {difficulty === 'basics' ? (
                    `This is the basic level content for Level ${index + 1}.`
                  ) : difficulty === 'medium' ? (
                    `This is the medium level content for Level ${index + 1}.`
                  ) : (
                    `This is the hard level content for Level ${index + 1}.`
                  )}
                </AccordionPanel>

                <a 
                  href={buttonLink} 
                  target="_blank" // Opens in a new tab
                  rel="noopener noreferrer" // Prevents security vulnerabilities
                  className="hidden sm:block absolute w-[2vw] sm:w-[5.5vw] left-[20vw] sm:left-[26vw] -top-[1.1vw] sm:-top-[1.1vw] mt-[1vw] mr-[1vw] bg-black z-40 text-white p-[0.5vw] rounded-lg hover:bg-[#1f978b] transition"
                >
                  Start
                </a>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      </div>
      
   
  );
}

export default Blue;


















//  <div className="absolute w-[45vw] sm:w-[40vw] h-[35vh] sm:h-[60vh] top-[6vw] sm:top-[2vw] left-[54vw] sm:left-[46vw] rounded-lg shadow-lg overflow-hidden"
// style={{
//   background: 'linear-gradient(200deg, #34ACAE 0%, #164748 100%)',
//   opacity: '0.8',
//   backdropFilter: 'blur(15px)',
//   backgroundColor: 'rgba(255, 255, 255, 0.1)',
//   border: '1px solid rgba(255, 255, 255, 0.18)',
// }}>
// <h1 className="text-white text-[5vw] sm:text-[3vw] font-semibold m-1 sm:m-1 ml-1 sm:ml-5">EXCEL</h1>

// <div className="sm:w-[85%] h-[75%] m-[1vw] bg-black bg-opacity-20 rounded-md p-[1vw] overflow-y-auto">
// <h2 className="text-white font-medium text-[3vw] sm:text-[1.5vw] mb-[1vw]">This Course includes</h2>

// <Accordion allowToggle>
//  {Array.from({ length: 10 }).map((_, index) => (
//    <AccordionItem
//      key={index} 
//      className="relative z-[50] w-[35vw] sm:w-[25vw] top-1 mb-[1vw] rounded-lg bg-gray-900 border border-gray-700"
//    >
//      <h3>
//        <AccordionButton className="p-[0.5vw] bg-gray-800 rounded-t-lg">
//          <Box flex="1" textAlign="left" className="font-medium text-white text-[2.5vw] sm:text-[1vw]">
//            Level-{index + 1} {difficulty}
//          </Box>
//          <AccordionIcon color="white" />
//        </AccordionButton>
//      </h3>
//      <AccordionPanel className="p-[0.5vw] text-white text-[1vw] sm:text-[1vw] z-[50]">
  
//       {difficulty === 'basics' ? (
//          `This is the basic level content for Level ${index + 1}.`
//        ) : difficulty === 'medium' ? (
//          `This is the medium level content for Level ${index + 1}.`
//        ) : (
//          `This is the hard level content for Level ${index + 1}.`
//        )}
//      </AccordionPanel>

//      <a 
//        href={buttonLink} 
//        target="_blank" // Opens in a new tab
//        rel="noopener noreferrer" // Prevents security vulnerabilities
//        className="hidden sm:block absolute w-[2vw] sm:w-[5.5vw] left-[20vw] sm:left-[26vw] -top-[1.1vw] sm:-top-[1.1vw] mt-[1vw] mr-[1vw] bg-black z-40 text-white p-[0.5vw] rounded-lg hover:bg-[#1f978b] transition"
//      >
//        Start
//      </a>
//    </AccordionItem>
//  ))}
// </Accordion>
// </div>
// </div>









// import React, { useState } from 'react';
// import earth from '../assets/earth.png'; 
// import ring from '../assets/ring.png';
// import pipelong from '../assets/pipelong.svg';
// import road from '../assets/road.svg'; 
// import icon from '../assets/icon.png';
// import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, ChakraProvider } from '@chakra-ui/react'; // Import Chakra UI components

// function Blue() {
//   const [difficulty, setDifficulty] = useState('basics'); // State to manage difficulty level
//   const [buttonLink, setButtonLink] = useState('#'); // State to manage button link

//   const buttonLabels = ["Basic", "Medium", "Hard", "Quiz", "Resources"];
//   const buttonLinks = {
//     Basic: [
//       "https://www.wikipedia.org/", 
//       "https://www.khanacademy.org/", 
//       "https://www.britannica.com/", 
//       "https://www.howstuffworks.com/", 
//       "https://www.sparknotes.com/"
//     ],
//     Medium: [
//       "https://www.github.com/", 
//       "https://www.freecodecamp.org/", 
//       "https://www.hackerrank.com/", 
//       "https://www.coursera.org/", 
//       "https://www.udemy.com/"
//     ],
//     Hard: [
//       "https://www.leetcode.com/", 
//       "https://www.topcoder.com/", 
//       "https://www.codewars.com/", 
//       "https://projecteuler.net/", 
//       "https://www.codeforces.com/"
//     ],
//     Quiz: [
//       "https://www.quizlet.com/", 
//       "https://www.sporcle.com/", 
//       "https://www.kahoot.com/", 
//       "https://www.trivia.com/", 
//       "https://www.funtrivia.com/"
//     ],
//     Resources: [
//       "https://www.stackoverflow.com/", 
//       "https://www.medium.com/", 
//       "https://www.codecademy.com/", 
//       "https://www.reddit.com/r/learnprogramming/", 
//       "https://developer.mozilla.org/"
//     ]
//   };

//   // Function to update difficulty level and button link
//   const handleDifficultyChange = (index) => {
//     const label = buttonLabels[index];  // Get the selected difficulty
//     const link = buttonLinks[label][index];  // Get the appropriate link based on difficulty
//     setDifficulty(label.toLowerCase());
//     setButtonLink(link);
//   };
  
//   return (
//     <ChakraProvider>
//       <div className="relative w-full h-[59vh] sm:h-[180vh]">
//         <img src={earth} alt="Earth" className="w-full h-full object-cover" />                            

//         {/* Glowing Ball */}
//         <div className="absolute top-[30vw] sm:top-[14vw] left-[25vw] sm:left-[22vw] w-[4vw] h-[4vw] rounded-full bg-[#08d2f6]"
//              style={{
//                filter: 'brightness(200%) blur(1vw)',
//                boxShadow: '0 0 10vw 6vw rgba(8,210,246,0.5)'
//              }}></div>

//         {/* Ring Image */}
//         <img
//           src={ring}
//           alt="Ring"
//           className="absolute w-[38vw] sm:w-[17vw] top-[5vw] sm:top-[3vw] left-[9vw] sm:left-[15vw]"
//         />

//         {/* Road Button */}
//         <button 
//           className="absolute w-[60vw] sm:w-[30vw] top-[7vw] sm:top-[4vw] -left-[3vw] sm:left-[9vw] z-[50] focus:outline-none transform hover:scale-105 transition-transform duration-300"
//         >
//           <img src={road} alt="Road" className="w-full filter brightness-100" />
//         </button>

//         {/* Pipe buttons dynamically positioned in "S" shape */}
//         <div className='absolute top-[8.5vw] left-[8vw] '>
//           <svg width="1100" height="1120" viewBox="0 0 416 313" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <g filter="url(#filter0)" >
//               <path d="M98.9984 14.0002C98.9984 33.7686 637.32 240.477 258.999 167C-294.501 59.5002 259.501 246 322.001 341C360.51 399.535 -62.8072 517.936 63.2372 535.5C195.995 554 629.29 369.769 106.998 736C-18.501 824 19.0005 881 250.001 934.5C446.014 979.897 425 1131.57 307.999 1178C-540 1514.5 952.499 1187.5 94.4979 1545.5C-75.3004 1616.35 586.001 1763 323.501 1754C133.02 1747.47 -109 1699.5 301.5 1943C584.5 2069 -338.501 2012 236.5 2147.5C811.502 2283 -379.001 2314 220.5 2471C820.002 2628 -435.5 2539 281 2774.5" 
//                 stroke="#0B3238" strokeOpacity="1" strokeWidth="15.2359"/>
//             </g>
//             <g filter="url(#filter1)">
//               <circle cx="340.27" cy="139.145" r="12.4953" fill="#00FFF0" fillOpacity="0.5"/>
//               <circle cx="340.27" cy="139.145" r="10.4022" stroke="url(#paint0)" strokeOpacity="0.7" strokeWidth="4.18625"/>
//             </g>
//             <circle cx="500.259" cy="139.208" r="14.5885" stroke="url(#paint1)" strokeOpacity="0.7" strokeWidth="0.761137"/>
//             <g filter="url(#filter2)">
//               <circle cx="54.2702" cy="173.111" r="12.4953" fill="#00FFF0" fillOpacity="0.5"/>
//               <circle cx="54.2702" cy="173.111" r="10.4022" stroke="url(#paint2)" strokeOpacity="0.7" strokeWidth="4.18625"/>
//             </g>
//             <circle cx="54.2069" cy="173.175" r="14.5885" stroke="url(#paint3)" strokeOpacity="0.7" strokeWidth="0.761137"/>
//             <g filter="url(#filter3)">
//               <circle cx="261.61" cy="169.144" r="12.4953" fill="#00FFF0" fillOpacity="0.5"/>
//               <circle cx="261.61" cy="169.144" r="10.4022" stroke="url(#paint4)" strokeOpacity="0.7" strokeWidth="4.18625"/>
//             </g>
//             <circle cx="261.547" cy="169.208" r="14.5885" stroke="url(#paint5)" strokeOpacity="0.7" strokeWidth="0.761137"/>
//             <g filter="url(#filter4)">
//               <circle cx="252.311" cy="92.4953" r="12.4953" fill="#00FFF0" fillOpacity="0.5"/>
//               <circle cx="252.311" cy="92.4953" r="10.4022" stroke="url(#paint6)" strokeOpacity="0.7" strokeWidth="4.18625"/>
//             </g>
//             <circle cx="252.207" cy="92.2078" r="14.5885" stroke="url(#paint7)" strokeOpacity="0.7" strokeWidth="0.761137"/>
//             <g filter="url(#filter5)">
//               <circle cx="158.272" cy="149.144" r="12.4953" fill="#00FFF0" fillOpacity="0.5"/>
//               <circle cx="158.272" cy="149.144" r="10.4022" stroke="url(#paint8)" strokeOpacity="0.7" strokeWidth="4.18625"/>
//             </g>
//             <circle cx="158.209" cy="149.208" r="14.5885" stroke="url(#paint9)" strokeOpacity="0.7" strokeWidth="0.761137"/>
//           </svg>
//         </div> 
        
//         {/* Glassmorphism Button with Shiny Effect */}
//         <div className="absolute w-[45vw] sm:w-[40vw] h-[35vh] sm:h-[60vh] top-[6vw] sm:top-[2vw] left-[54vw] sm:left-[46vw] rounded-lg shadow-lg overflow-hidden"
// style={{
//   background: 'linear-gradient(200deg, #34ACAE 0%, #164748 100%)',
//   opacity: '0.8',
//   backdropFilter: 'blur(15px)',
//   backgroundColor: 'rgba(255, 255, 255, 0.1)',
//   border: '1px solid rgba(255, 255, 255, 0.18)',
// }}>
// <h1 className="text-white text-[5vw] sm:text-[3vw] font-semibold m-1 sm:m-1 ml-1 sm:ml-5">EXCEL</h1>

// <div className="sm:w-[85%] h-[75%] m-[1vw] bg-black bg-opacity-20 rounded-md p-[1vw] overflow-y-auto">
// <h2 className="text-white font-medium text-[3vw] sm:text-[1.5vw] mb-[1vw]">This Course includes</h2>

// <Accordion allowToggle>
//  {Array.from({ length: 10 }).map((_, index) => (
//    <AccordionItem
//      key={index} 
//      className="relative z-[50] w-[35vw] sm:w-[25vw] top-1 mb-[1vw] rounded-lg bg-gray-900 border border-gray-700"
//    >
//      <h3>
//        <AccordionButton className="p-[0.5vw] bg-gray-800 rounded-t-lg">
//          <Box flex="1" textAlign="left" className="font-medium text-white text-[2.5vw] sm:text-[1vw]">
//            Level-{index + 1} {difficulty}
//          </Box>
//          <AccordionIcon color="white" />
//        </AccordionButton>
//      </h3>
//      <AccordionPanel className="p-[0.5vw] text-white text-[1vw] sm:text-[1vw] z-[50]">
  
//       {difficulty === 'basics' ? (
//          `This is the basic level content for Level ${index + 1}.`
//        ) : difficulty === 'medium' ? (
//          `This is the medium level content for Level ${index + 1}.`
//        ) : (
//          `This is the hard level content for Level ${index + 1}.`
//        )}
//      </AccordionPanel>

//      <a 
//        href={buttonLink} 
//        target="_blank" // Opens in a new tab
//        rel="noopener noreferrer" // Prevents security vulnerabilities
//        className="hidden sm:block absolute w-[2vw] sm:w-[5.5vw] left-[20vw] sm:left-[26vw] -top-[1.1vw] sm:-top-[1.1vw] mt-[1vw] mr-[1vw] bg-black z-40 text-white p-[0.5vw] rounded-lg hover:bg-[#1f978b] transition"
//      >
//        Start
//      </a>
//    </AccordionItem>
//  ))}
// </Accordion>
// </div>
// </div>
//       </div>
//    
//   );
// }

// export default Blue;

















//  <div className="absolute w-[45vw] sm:w-[40vw] h-[35vh] sm:h-[60vh] top-[6vw] sm:top-[2vw] left-[54vw] sm:left-[46vw] rounded-lg shadow-lg overflow-hidden"
// style={{
//   background: 'linear-gradient(200deg, #34ACAE 0%, #164748 100%)',
//   opacity: '0.8',
//   backdropFilter: 'blur(15px)',
//   backgroundColor: 'rgba(255, 255, 255, 0.1)',
//   border: '1px solid rgba(255, 255, 255, 0.18)',
// }}>
// <h1 className="text-white text-[5vw] sm:text-[3vw] font-semibold m-1 sm:m-1 ml-1 sm:ml-5">EXCEL</h1>

// <div className="sm:w-[85%] h-[75%] m-[1vw] bg-black bg-opacity-20 rounded-md p-[1vw] overflow-y-auto">
// <h2 className="text-white font-medium text-[3vw] sm:text-[1.5vw] mb-[1vw]">This Course includes</h2>

// <Accordion allowToggle>
//  {Array.from({ length: 10 }).map((_, index) => (
//    <AccordionItem
//      key={index} 
//      className="relative z-[50] w-[35vw] sm:w-[25vw] top-1 mb-[1vw] rounded-lg bg-gray-900 border border-gray-700"
//    >
//      <h3>
//        <AccordionButton className="p-[0.5vw] bg-gray-800 rounded-t-lg">
//          <Box flex="1" textAlign="left" className="font-medium text-white text-[2.5vw] sm:text-[1vw]">
//            Level-{index + 1} {difficulty}
//          </Box>
//          <AccordionIcon color="white" />
//        </AccordionButton>
//      </h3>
//      <AccordionPanel className="p-[0.5vw] text-white text-[1vw] sm:text-[1vw] z-[50]">
  
//       {difficulty === 'basics' ? (
//          `This is the basic level content for Level ${index + 1}.`
//        ) : difficulty === 'medium' ? (
//          `This is the medium level content for Level ${index + 1}.`
//        ) : (
//          `This is the hard level content for Level ${index + 1}.`
//        )}
//      </AccordionPanel>

//      <a 
//        href={buttonLink} 
//        target="_blank" // Opens in a new tab
//        rel="noopener noreferrer" // Prevents security vulnerabilities
//        className="hidden sm:block absolute w-[2vw] sm:w-[5.5vw] left-[20vw] sm:left-[26vw] -top-[1.1vw] sm:-top-[1.1vw] mt-[1vw] mr-[1vw] bg-black z-40 text-white p-[0.5vw] rounded-lg hover:bg-[#1f978b] transition"
//      >
//        Start
//      </a>
//    </AccordionItem>
//  ))}
// </Accordion>
// </div>
// </div>















//  <div className="absolute w-[45vw] sm:w-[40vw] h-[35vh] sm:h-[60vh] top-[6vw] sm:top-[2vw] left-[54vw] sm:left-[46vw] rounded-lg shadow-lg overflow-hidden"
// style={{
//   background: 'linear-gradient(200deg, #34ACAE 0%, #164748 100%)',
//   opacity: '0.8',
//   backdropFilter: 'blur(15px)',
//   backgroundColor: 'rgba(255, 255, 255, 0.1)',
//   border: '1px solid rgba(255, 255, 255, 0.18)',
// }}>
// <h1 className="text-white text-[5vw] sm:text-[3vw] font-semibold m-1 sm:m-1 ml-1 sm:ml-5">EXCEL</h1>

// <div className="sm:w-[85%] h-[75%] m-[1vw] bg-black bg-opacity-20 rounded-md p-[1vw] overflow-y-auto">
// <h2 className="text-white font-medium text-[3vw] sm:text-[1.5vw] mb-[1vw]">This Course includes</h2>

// <Accordion allowToggle>
//  {Array.from({ length: 10 }).map((_, index) => (
//    <AccordionItem
//      key={index} 
//      className="relative z-[50] w-[35vw] sm:w-[25vw] top-1 mb-[1vw] rounded-lg bg-gray-900 border border-gray-700"
//    >
//      <h3>
//        <AccordionButton className="p-[0.5vw] bg-gray-800 rounded-t-lg">
//          <Box flex="1" textAlign="left" className="font-medium text-white text-[2.5vw] sm:text-[1vw]">
//            Level-{index + 1} {difficulty}
//          </Box>
//          <AccordionIcon color="white" />
//        </AccordionButton>
//      </h3>
//      <AccordionPanel className="p-[0.5vw] text-white text-[1vw] sm:text-[1vw] z-[50]">
  
//       {difficulty === 'basics' ? (
//          `This is the basic level content for Level ${index + 1}.`
//        ) : difficulty === 'medium' ? (
//          `This is the medium level content for Level ${index + 1}.`
//        ) : (
//          `This is the hard level content for Level ${index + 1}.`
//        )}
//      </AccordionPanel>

//      <a 
//        href={buttonLink} 
//        target="_blank" // Opens in a new tab
//        rel="noopener noreferrer" // Prevents security vulnerabilities
//        className="hidden sm:block absolute w-[2vw] sm:w-[5.5vw] left-[20vw] sm:left-[26vw] -top-[1.1vw] sm:-top-[1.1vw] mt-[1vw] mr-[1vw] bg-black z-40 text-white p-[0.5vw] rounded-lg hover:bg-[#1f978b] transition"
//      >
//        Start
//      </a>
//    </AccordionItem>
//  ))}
// </Accordion>
// </div>
// </div>
