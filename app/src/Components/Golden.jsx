// import React from 'react'
// import earth4 from '../assets/earth4.png';
// import pipe2 from '../assets/pipe2.svg';

// function Golden() {
//   return (
//     <div className='relative max-w-screen-2xl h-[110vh] sm:h-[180vh]'>
//      <div className='w-full h-full'>
//         <img src={earth4} alt="" className='w-[100vw] z-[50] h-full object-cover' />
//         {/* <img 
//   src={pipe2} 
//   alt="Pipe" 
//   className='absolute w-[150vw] h-[250vh] z-[50] -top-[19.8vw] right-[2vw] opacity-100 visible'
//   style={{ clipPath: 'inset(17.5% 0 10.5% 0)' }}       
// /> */}
//      </div>
//     </div>
//   )
// }

// export default Golden


import React, { useState } from 'react';
import './Golden.css';
import earth4 from '../assets/earth4.png'; 
import road7 from '../assets/road7.svg'; 
import road8 from '../assets/road8.svg';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box } from '@chakra-ui/react';


function Golden() {


  const difficulty = 'basics'; // Example of difficulty level, could be 'basics', 'medium', or 'hard'
  const buttonLink = 'https://example.com'; // Example button link

  const [boxContent, setBoxContent] = useState("Click an SVG element");
 
   
   const handleClick1 = () => setBoxContent("Clicked on Circle 1");
   const handleClick2 = () => setBoxContent("Clicked on Circle 2");
   const handleClick3 = () => setBoxContent("Clicked on Circle 3");
   const handleClick4 = () => setBoxContent("Clicked on Circle 4");
   const handleClick5 = () => setBoxContent("Clicked on Circle 5");

  return (
    <div className='relative max-w-screen-2xl h-[110vh] sm:h-[180vh]'>
     <div className='w-full h-full'>
        <img src={earth4} alt="" className='w-[100vw] z-[50] h-full object-cover' />
     </div>

      {/* Glowing Ball */}
      <div className="absolute top-[30vw] sm:top-[14vw] left-[25vw] sm:left-[22vw] w-[4vw] h-[4vw] rounded-full bg-[#51bdd0]"
             style={{
               filter: 'brightness(200%) blur(1vw)',
               boxShadow: '0 0 10vw 6vw rgba(81, 189, 208, 1)'
             }}></div>

              {/* Road Button */}
        <button 
          className="absolute w-[60vw] sm:w-[35vw] top-[7vw] sm:top-[5vw] -left-[3vw] sm:left-[9vw] z-[50] focus:outline-none transform hover:scale-105 transition-transform duration-300"
        >
          <img src={road7} alt="Road" className="w-full filter brightness-100 animate-pulse " />
        </button>

        {/*pipe */}

        <div className='absolute -top-[0] left-[13.2vw]'>
       

        <svg width="1248" height="1251" viewBox="0 0 422 408" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_934_947)">
<g filter="url(#filter0_i_934_947)">
<path d="M98.9989 -2403C98.9989 -2383.23 637.32 -2176.52 259 -2250C-294.5 -2357.5 259.501 -2171 322.001 -2076C360.51 -2017.47 -62.8067 -1899.06 63.2377 -1881.5C195.995 -1863 629.291 -2047.23 106.999 -1681C-18.5005 -1593 19.001 -1536 250.001 -1482.5C446.014 -1437.1 425.001 -1285.43 307.999 -1239C-539.999 -902.5 952.499 -1229.5 94.4984 -871.5C-75.3 -800.652 586.001 -654 323.501 -663C133.021 -669.531 -108.999 -717.5 301.501 -474C584.501 -348 -338.5 -405 236.501 -269.5C811.502 -134 -379 -103 220.501 54.0002C820.002 211 -435.499 122 281.001 357.5" stroke="#0B3238" stroke-opacity="0.6" stroke-width="7.05436"/>
</g>
<g filter="url(#filter1_bi_934_947)"onClick={handleClick2}>
<circle cx="170.271" cy="183.145" r="12.4953" fill="url(#paint0_linear_934_947)"/>
<circle cx="170.271" cy="183.145" r="10.4022" stroke="url(#paint1_angular_934_947)" stroke-opacity="0.7" stroke-width="4.18625"/>
</g>
<circle cx="170.208" cy="183.208" r="14.5885" stroke="url(#paint2_angular_934_947)" stroke-opacity="0.7" stroke-width="0.761137"/>
<g filter="url(#filter2_bi_934_947)"  onClick={handleClick1}>
<circle cx="252.271" cy="169.145" r="12.4953" fill="url(#paint3_linear_934_947)"/>
<circle cx="252.271" cy="169.145" r="10.4022" stroke="url(#paint4_angular_934_947)" stroke-opacity="0.7" stroke-width="4.18625"/>
</g>
<circle cx="252.208" cy="169.208" r="14.5885" stroke="url(#paint5_angular_934_947)" stroke-opacity="0.7" stroke-width="0.761137"/>
<g filter="url(#filter3_bi_934_947)"  onClick={handleClick3}>
<circle cx="79.2707" cy="210.145" r="12.4953" fill="url(#paint6_linear_934_947)"/>
<circle cx="79.2707" cy="210.145" r="10.4022" stroke="url(#paint7_angular_934_947)" stroke-opacity="0.7" stroke-width="4.18625"/>
</g>
<circle cx="79.2079" cy="210.208" r="14.5885" stroke="url(#paint8_angular_934_947)" stroke-opacity="0.7" stroke-width="0.761137"/>
<g filter="url(#filter4_bi_934_947)"  onClick={handleClick5}>
<circle cx="169.271" cy="315.145" r="12.4953" fill="url(#paint9_linear_934_947)"/>
<circle cx="169.271" cy="315.145" r="10.4022" stroke="url(#paint10_angular_934_947)" stroke-opacity="0.7" stroke-width="4.18625"/>
</g>
<circle cx="169.208" cy="315.208" r="14.5885" stroke="url(#paint11_angular_934_947)" stroke-opacity="0.7" stroke-width="0.761137"/>
<g filter="url(#filter5_bi_934_947)"  onClick={handleClick4}>
<circle cx="92.2707" cy="278.145" r="12.4953" fill="url(#paint12_linear_934_947)"/>
<circle cx="92.2707" cy="278.145" r="10.4022" stroke="url(#paint13_angular_934_947)" stroke-opacity="0.7" stroke-width="4.18625"/>
</g>
<circle cx="92.2079" cy="278.208" r="14.5885" stroke="url(#paint14_angular_934_947)" stroke-opacity="0.7" stroke-width="0.761137"/>
</g>
<defs>
<filter id="filter0_i_934_947" x="11.8506" y="-2403.88" width="390.314" height="2764.88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.460067" dy="0.153356"/>
<feGaussianBlur stdDeviation="1.04282"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_934_947"/>
</filter>
<filter id="filter1_bi_934_947" x="152.942" y="165.816" width="34.6567" height="34.6572" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="2.41661"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_934_947"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_934_947" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3.42512" operator="erode" in="SourceAlpha" result="effect2_innerShadow_934_947"/>
<feOffset dy="-0.887993"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_934_947"/>
</filter>
<filter id="filter2_bi_934_947" x="234.942" y="151.816" width="34.6567" height="34.6572" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="2.41661"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_934_947"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_934_947" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3.42512" operator="erode" in="SourceAlpha" result="effect2_innerShadow_934_947"/>
<feOffset dy="-0.887993"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_934_947"/>
</filter>
<filter id="filter3_bi_934_947" x="61.9422" y="192.816" width="34.6567" height="34.6572" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="2.41661"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_934_947"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_934_947" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3.42512" operator="erode" in="SourceAlpha" result="effect2_innerShadow_934_947"/>
<feOffset dy="-0.887993"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_934_947"/>
</filter>
<filter id="filter4_bi_934_947" x="151.942" y="297.816" width="34.6567" height="34.6572" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="2.41661"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_934_947"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_934_947" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3.42512" operator="erode" in="SourceAlpha" result="effect2_innerShadow_934_947"/>
<feOffset dy="-0.887993"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_934_947"/>
</filter>
<filter id="filter5_bi_934_947" x="74.9422" y="260.816" width="34.6567" height="34.6572" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="2.41661"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_934_947"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_934_947" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3.42512" operator="erode" in="SourceAlpha" result="effect2_innerShadow_934_947"/>
<feOffset dy="-0.887993"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_934_947"/>
</filter>
<linearGradient id="paint0_linear_934_947" x1="170.271" y1="170.649" x2="170.271" y2="195.64" gradientUnits="userSpaceOnUse">
<stop stop-color="#C1C42E"/>
<stop offset="1" stop-color="#535F0E"/>
</linearGradient>
<radialGradient id="paint1_angular_934_947" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(167.928 183.246) rotate(-130.914) scale(9.86426 9.60325)">
<stop offset="0.34772" stop-color="#424300" stop-opacity="0"/>
<stop offset="0.569" stop-color="#C1C42E"/>
<stop offset="0.600057" stop-color="#FDFF87"/>
<stop offset="0.655752" stop-color="#FCFF51"/>
<stop offset="0.722092" stop-color="#FCFF5B"/>
<stop offset="0.864106" stop-color="#F8FB6C" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint2_angular_934_947" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(167.544 183.323) rotate(-130.914) scale(11.2162 10.9194)">
<stop offset="0.34772" stop-color="#424300" stop-opacity="0"/>
<stop offset="0.569" stop-color="#C1C42E"/>
<stop offset="0.600057" stop-color="#FDFF87"/>
<stop offset="0.655752" stop-color="#FCFF51"/>
<stop offset="0.722092" stop-color="#FCFF5B"/>
<stop offset="0.864106" stop-color="#F8FB6C" stop-opacity="0"/>
</radialGradient>
<linearGradient id="paint3_linear_934_947" x1="252.271" y1="156.649" x2="252.271" y2="181.64" gradientUnits="userSpaceOnUse">
<stop stop-color="#C1C42E"/>
<stop offset="1" stop-color="#535F0E"/>
</linearGradient>
<radialGradient id="paint4_angular_934_947" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(249.928 169.246) rotate(-130.914) scale(9.86426 9.60325)">
<stop offset="0.34772" stop-color="#424300" stop-opacity="0"/>
<stop offset="0.569" stop-color="#C1C42E"/>
<stop offset="0.600057" stop-color="#FDFF87"/>
<stop offset="0.655752" stop-color="#FCFF51"/>
<stop offset="0.722092" stop-color="#FCFF5B"/>
<stop offset="0.864106" stop-color="#F8FB6C" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint5_angular_934_947" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(249.544 169.323) rotate(-130.914) scale(11.2162 10.9194)">
<stop offset="0.34772" stop-color="#424300" stop-opacity="0"/>
<stop offset="0.569" stop-color="#C1C42E"/>
<stop offset="0.600057" stop-color="#FDFF87"/>
<stop offset="0.655752" stop-color="#FCFF51"/>
<stop offset="0.722092" stop-color="#FCFF5B"/>
<stop offset="0.864106" stop-color="#F8FB6C" stop-opacity="0"/>
</radialGradient>
<linearGradient id="paint6_linear_934_947" x1="79.2707" y1="197.649" x2="79.2707" y2="222.64" gradientUnits="userSpaceOnUse">
<stop stop-color="#C1C42E"/>
<stop offset="1" stop-color="#535F0E"/>
</linearGradient>
<radialGradient id="paint7_angular_934_947" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(76.9278 210.246) rotate(-130.914) scale(9.86426 9.60325)">
<stop offset="0.34772" stop-color="#424300" stop-opacity="0"/>
<stop offset="0.569" stop-color="#C1C42E"/>
<stop offset="0.600057" stop-color="#FDFF87"/>
<stop offset="0.655752" stop-color="#FCFF51"/>
<stop offset="0.722092" stop-color="#FCFF5B"/>
<stop offset="0.864106" stop-color="#F8FB6C" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint8_angular_934_947" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(76.5439 210.323) rotate(-130.914) scale(11.2162 10.9194)">
<stop offset="0.34772" stop-color="#424300" stop-opacity="0"/>
<stop offset="0.569" stop-color="#C1C42E"/>
<stop offset="0.600057" stop-color="#FDFF87"/>
<stop offset="0.655752" stop-color="#FCFF51"/>
<stop offset="0.722092" stop-color="#FCFF5B"/>
<stop offset="0.864106" stop-color="#F8FB6C" stop-opacity="0"/>
</radialGradient>
<linearGradient id="paint9_linear_934_947" x1="169.271" y1="302.649" x2="169.271" y2="327.64" gradientUnits="userSpaceOnUse">
<stop stop-color="#C1C42E"/>
<stop offset="1" stop-color="#535F0E"/>
</linearGradient>
<radialGradient id="paint10_angular_934_947" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(166.928 315.246) rotate(-130.914) scale(9.86426 9.60325)">
<stop offset="0.34772" stop-color="#424300" stop-opacity="0"/>
<stop offset="0.569" stop-color="#C1C42E"/>
<stop offset="0.600057" stop-color="#FDFF87"/>
<stop offset="0.655752" stop-color="#FCFF51"/>
<stop offset="0.722092" stop-color="#FCFF5B"/>
<stop offset="0.864106" stop-color="#F8FB6C" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint11_angular_934_947" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(166.544 315.323) rotate(-130.914) scale(11.2162 10.9194)">
<stop offset="0.34772" stop-color="#424300" stop-opacity="0"/>
<stop offset="0.569" stop-color="#C1C42E"/>
<stop offset="0.600057" stop-color="#FDFF87"/>
<stop offset="0.655752" stop-color="#FCFF51"/>
<stop offset="0.722092" stop-color="#FCFF5B"/>
<stop offset="0.864106" stop-color="#F8FB6C" stop-opacity="0"/>
</radialGradient>
<linearGradient id="paint12_linear_934_947" x1="92.2707" y1="265.649" x2="92.2707" y2="290.64" gradientUnits="userSpaceOnUse">
<stop stop-color="#C1C42E"/>
<stop offset="1" stop-color="#535F0E"/>
</linearGradient>
<radialGradient id="paint13_angular_934_947" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(89.9278 278.246) rotate(-130.914) scale(9.86426 9.60325)">
<stop offset="0.34772" stop-color="#424300" stop-opacity="0"/>
<stop offset="0.569" stop-color="#C1C42E"/>
<stop offset="0.600057" stop-color="#FDFF87"/>
<stop offset="0.655752" stop-color="#FCFF51"/>
<stop offset="0.722092" stop-color="#FCFF5B"/>
<stop offset="0.864106" stop-color="#F8FB6C" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint14_angular_934_947" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(89.5439 278.323) rotate(-130.914) scale(11.2162 10.9194)">
<stop offset="0.34772" stop-color="#424300" stop-opacity="0"/>
<stop offset="0.569" stop-color="#C1C42E"/>
<stop offset="0.600057" stop-color="#FDFF87"/>
<stop offset="0.655752" stop-color="#FCFF51"/>
<stop offset="0.722092" stop-color="#FCFF5B"/>
<stop offset="0.864106" stop-color="#F8FB6C" stop-opacity="0"/>
</radialGradient>
<clipPath id="clip0_934_947">
<rect width="427" height="3209" fill="white" transform="translate(0 -2664)"/>
</clipPath>
</defs>
        </svg>


        
        </div>

        <Box position="absolute" top="5" left="5" bg="white" p={4} boxShadow="lg">
          {boxContent}
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

      {/* <button 
          className="absolute w-[60vw] sm:w-[35vw] top-[7vw] sm:top-[60vw] -left-[3vw] sm:left-[55vw] z-[50] focus:outline-none transform hover:scale-105 transition-transform duration-300"
        >
          <img src={road8} alt="Road" className="w-full filter brightness-100" />
        </button> */}

<div className="flex justify-center items-center h-screen bg-blue-100">
      <div className="relative">
        {/* Flag pole */}
        <div className="flagpole bg-gray-800 w-2 h-96"></div>
        
        {/* Flag itself */}
        <div className="flag bg-red-500 w-48 h-32 absolute top-0 left-2 animate-wave">
          {/* Triangle cut effect */}
          <div className="triangle bg-red-600 w-0 h-0 absolute top-0 right-0"
               style={{
                 borderLeft: '24px solid transparent',
                 borderBottom: '32px solid red'
               }}>
          </div>
        </div>
      </div>
    </div>


    </div>
  )
}

export default Golden