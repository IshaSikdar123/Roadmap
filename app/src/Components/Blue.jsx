import React, { useState } from 'react';
import earth from '../assets/earth.png'; 
import road8 from '../assets/road8.svg';
import road from '../assets/road.svg'; 
import './Blue.css';

import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, ChakraProvider } from '@chakra-ui/react';

function Blue() {

  // State for tracking active content
  const [activeContent, setActiveContent] = useState({
    boxTitle: "EXCEL",
    difficulty: 'basics',
    buttonLink: 'https://example.com',
    contentDescription: "Click a circle to view content"
  });

  // Define content for each circle
  const circleContent = { 
    circle1: {
      boxTitle: "EXCEL BASICS",
      difficulty: 'basics',
      links: [
        "https://www.wikipedia.org/",
        "https://www.khanacademy.org/",
        "https://www.britannica.com/",
        "https://www.howstuffworks.com/",
        "https://www.sparknotes.com/"
      ],
      description: "Learn Excel fundamentals and basic operations"
    },
    circle2: {
      boxTitle: "EXCEL INTERMEDIATE",
      difficulty: 'medium',
      links: [
        "https://www.github.com/",
        "https://www.freecodecamp.org/",
        "https://www.hackerrank.com/",
        "https://www.coursera.org/",
        "https://www.udemy.com/"
      ],
      description: "Explore advanced Excel features and formulas"
    },
    circle3: {
      boxTitle: "EXCEL ADVANCED",
      difficulty: 'hard',
      links: [
        "https://www.leetcode.com/",
        "https://www.topcoder.com/",
        "https://www.codewars.com/",
        "https://projecteuler.net/",
        "https://www.codeforces.com/"
      ],
      description: "Master complex Excel functions and macros"
    },
    circle4: {
      boxTitle: "EXCEL QUIZ",
      difficulty: 'quiz',
      links: [
        "https://www.quizlet.com/",
        "https://www.sporcle.com/",
        "https://www.kahoot.com/",
        "https://www.trivia.com/",
        "https://www.funtrivia.com/"
      ],
      description: "Test your Excel knowledge"
    },
    circle5: {
      boxTitle: "EXCEL RESOURCES",
      difficulty: 'resources',
      links: [
        "https://www.stackoverflow.com/",
        "https://www.medium.com/",
        "https://www.codecademy.com/",
        "https://www.reddit.com/r/learnprogramming/",
        "https://developer.mozilla.org/"
      ],
      description: "Additional Excel learning resources"
    }
  };

  // Click handlers for SVG elements
  const handleClick1 = () => setActiveContent({
    ...circleContent.circle1,
    buttonLink: circleContent.circle1.links[0]
  });
  const handleClick2 = () => setActiveContent({
    ...circleContent.circle2,
    buttonLink: circleContent.circle2.links[0]
  });
  const handleClick3 = () => setActiveContent({
    ...circleContent.circle3,
    buttonLink: circleContent.circle3.links[0]
  });
  const handleClick4 = () => setActiveContent({
    ...circleContent.circle4,
    buttonLink: circleContent.circle4.links[0]
  });
  const handleClick5 = () => setActiveContent({
    ...circleContent.circle5,
    buttonLink: circleContent.circle5.links[0]
  });
  
  return (
    
      <div className="min-w-screen-2xl h-screen relative sm:h-[180vh] md:h-[160vh] lg:h-[140vh] xl:h-[120vh] 2xl:h-[180vh]">
        <img src={earth} alt="Earth" className="w-full h-full object-cover" />                            

        {/* Glowing Ball */}
        <div className="absolute top-[30vw] sm:top-[14vw] left-[25vw] sm:left-[22vw] w-[4vw] h-[4vw] rounded-full bg-[#08d2f6]"
             style={{
               filter: 'brightness(200%) blur(1vw)',
               boxShadow: '0 0 10vw 6vw rgba(8,210,246,0.5)'
             }}></div>

       
        

        {/* Road Button */}
        <button 
          className="absolute w-[60vw] sm:w-[30vw] top-[10vw] sm:top-[10vw] -left-[3vw] sm:left-[9vw] z-[50] focus:outline-none transform hover:scale-105 transition-transform duration-300"
        >
          <img src={road} alt="Road" className="w-full h-full " />
        </button>

        {/* SVG elements for interaction */}
        <div  className="absolute inset-0 w-full h-full"
        // style={{
        //   clipPath: 'inset(0 0 8% 0)',
        // }}
      
>
  <svg width="100%" height="100%" viewBox="0 -66 416 387" fill="none" preserveAspectRatio='none' xmlns="http://www.w3.org/2000/svg" 
        >

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
        </div>

        
        <div className="absolute w-[45vw] sm:w-[40vw] h-[25vh] sm:h-[60vh] top-[6vw] sm:top-[2vw] left-[54vw] sm:left-[46vw] rounded-lg shadow-lg overflow-hidden"
        style={{
          background: 'linear-gradient(200deg, #34ACAE 0%, #164748 100%)',
          opacity: '0.8',
          backdropFilter: 'blur(15px)',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
        }}>
       <h1 className="text-white text-[5vw] sm:text-[3vw] font-semibold m-1 sm:m-1 ml-1 sm:ml-5">
          {activeContent.boxTitle}
        </h1>

        <div className="sm:w-[85%] h-[75%] m-[1vw] bg-black bg-opacity-20 rounded-md p-[1vw] overflow-y-auto">
          <h2 className="text-white font-medium text-[3vw] sm:text-[1.5vw] mb-[1vw]">
            {activeContent.contentDescription}
          </h2>

          <Accordion allowToggle>
            {Array.from({ length: 10 }).map((_, index) => (
              <AccordionItem
                key={index} 
                className="relative z-[50] w-[35vw] sm:w-[25vw] top-1 mb-[1vw] rounded-lg bg-gray-900 border border-gray-700"
              >
                <h3>
                  <AccordionButton className="p-[0.5vw] bg-gray-800 rounded-t-lg">
                    <Box flex="1" textAlign="left" className="font-medium text-white text-[2.5vw] sm:text-[1vw]">
                    Level-{index + 1} {activeContent.difficulty}
                    </Box>
                    <AccordionIcon color="white" />
                  </AccordionButton>
                </h3>
                <AccordionPanel className="p-[0.5vw] text-white text-[1vw] sm:text-[1vw] z-[50]">
                  {`This is the ${activeContent.difficulty} level content for Level ${index + 1}.`}
                </AccordionPanel>

                <a 
                  href={activeContent.buttonLink} 
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


 {/* Flag*/}
 {/* <div className='absolute 
  -bottom-[29vw] left-[48vw] 
  m-sm:bottom-[1vw] m-sm:left-[43vw] '
   
  >
<div className="w-92 h-96 relative">

      <div className="absolute left-14 top-[14vw] w-2 h-28 bg-gray-400" />
      
     
      <div className="absolute left-16 top-[12.5vw]">
        <svg width="100" height="60" viewBox="0 0 120 60">
          <path 
            d="M 0,0 L 120,30 L 0,60 Z" 
            fill="rgb(3, 128, 124,2)" 
          />
        </svg>
      </div>
    </div>
</div> */}


{/* <div className="absolute bg-red-900 
  bottom-0 left-0 
  m-sm:bottom-[80vw] m-sm:left-[4vw]
  m-md:bottom-[0.75vw] m-md:left-[42vw]
  m-lg:bottom-[1vw] m-lg:left-[43vw]
  md:bottom-[1.5vw] md:left-[44vw]
  lg:bottom-[2vw] lg:left-[45vw]
  2xl:bottom-[2.5vw] 2xl:left-[46vw]
  3xl:bottom-[3vw] 3xl:left-[47vw]
  
  w-full h-full
  m-sm:w-[10vw] m-sm:h-[10vw]
  m-md:w-[85vw] m-md:h-[45vw]
  m-lg:w-[80vw] m-lg:h-[50vw]
  md:w-[75vw] md:h-[55vw]
  lg:w-[70vw] lg:h-[60vw]
  2xl:w-[65vw] 2xl:h-[65vw]
  3xl:w-[60vw] 3xl:h-[70vw]"
>
  <div className="relative 
    w-72 h-80
    m-sm:w-80 m-sm:h-84
    m-md:w-84 m-md:h-88
    m-lg:w-88 m-lg:h-92
    md:w-92 md:h-96
    lg:w-96 lg:h-96
    2xl:w-96 2xl:h-96
    3xl:w-96 3xl:h-96"
  >
    
    <div className="absolute 
      left-12 w-2 
      m-sm:left-13 
      m-md:left-14 
      m-lg:left-14
      md:left-14 
      lg:left-14
      2xl:left-14
      3xl:left-14
      
      top-[18vw]
      m-sm:top-[16vw]
      m-md:top-[15vw]
      m-lg:top-[14vw]
      md:top-[13vw]
      lg:top-[12vw]
      2xl:top-[11vw]
      3xl:top-[10vw]
      
      h-24
      m-sm:h-26
      m-md:h-28
      m-lg:h-30
      md:h-32
      lg:h-32
      2xl:h-32
      3xl:h-32
      
      bg-gray-400" 
    />
    
   
    <div className="absolute 
      left-14
      m-sm:left-15
      m-md:left-16
      m-lg:left-16
      md:left-16
      lg:left-16
      2xl:left-16
      3xl:left-16
      
      top-[17.6vw]
      m-sm:top-[15.6vw]
      m-md:top-[14.6vw]
      m-lg:top-[13.6vw]
      md:top-[12.6vw]
      lg:top-[11.6vw]
      2xl:top-[10.6vw]
      3xl:top-[9.6vw]"
    >
      <svg 
        width="100" 
        height="60" 
        viewBox="0 0 120 60"
        className="
          w-20 h-12
          m-sm:w-24 m-sm:h-14
          m-md:w-28 m-md:h-16
          m-lg:w-32 m-lg:h-18
          md:w-36 md:h-20
          lg:w-40 lg:h-22
          2xl:w-44 2xl:h-24
          3xl:w-48 3xl:h-26
        "
      >
        <path 
          d="M 0,0 L 120,30 L 0,60 Z" 
          fill="rgb(3, 128, 124,2)" 
        />
      </svg>
    </div>
  </div>
</div> */}

 
      </div>
      
   
  );
}

export default Blue;




{/* SVG Container - Responsive positioning */}
      {/* <div className="absolute 
                      -top-[52vw] 
                      sm:top-[18vw] sm:-left-[10vw]
                      md:top-[16vw] md:-left-[8vw]
                      lg:top-[14vw] lg:-left-[6vw]
                      xl:top-[12vw] xl:-left-[4vw]
                      2xl:top-[10vw] 2xl:-left-[2vw]"
           style={{ clipPath: 'inset(13% 0 1% 0)' }}>
        
        <svg width="416" height="287" viewBox="0 0 416 287" fill="none" 
             xmlns="http://www.w3.org/2000/svg" 
             className="w-[100vw] h-screen 
                      sm:w-[100vw] sm:h-[120vh]
                      md:w-[90vw] md:h-[110vh]
                      lg:w-[80vw] lg:h-[100vh]
                      xl:w-[70vw] xl:h-[90vh]
                      2xl:w-[60vw] 2xl:h-[80vh]">
          
        </svg>
      </div> */}




      // import React, { useState } from 'react';
      // import earth from '../assets/earth.png'; 
      // import road8 from '../assets/road8.svg';
      // import road from '../assets/road.svg'; 
      // import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, ChakraProvider } from '@chakra-ui/react';
      
      // function Blue() {
      //   // State and content definitions remain the same
      //   const [activeContent, setActiveContent] = useState({
      //     boxTitle: "EXCEL",
      //     difficulty: 'basics',
      //     buttonLink: 'https://example.com',
      //     contentDescription: "Click a circle to view content"
      //   });
      
      //   // Circle content definitions remain the same
      //   const circleContent = {
      //     // ... existing circle content
      //   };
      
      //   // Click handlers remain the same
      //   const handleClick1 = () => setActiveContent({
      //     ...circleContent.circle1,
      //     buttonLink: circleContent.circle1.links[0]
      //   });
      //   // ... other click handlers
      
      //   return (
      //     <div className="max-w-screen-2xl relative min-h-screen
      //                     sm:h-[180vh] md:h-[160vh] lg:h-[140vh] xl:h-[120vh] 2xl:h-[100vh]">
      //       {/* Background Image */}
      //       <img src={earth} alt="Earth" className="w-full h-full object-cover" />
      
      //       {/* Glowing Ball - Responsive positioning */}
      //       <div className="absolute 
      //                       top-[30vw] left-[25vw] w-[4vw] h-[4vw]
      //                       sm:top-[14vw] sm:left-[22vw] 
      //                       md:top-[12vw] md:left-[20vw]
      //                       lg:top-[10vw] lg:left-[18vw]
      //                       xl:top-[8vw] xl:left-[16vw]
      //                       2xl:top-[6vw] 2xl:left-[14vw]
      //                       rounded-full bg-[#08d2f6]"
      //            style={{
      //              filter: 'brightness(200%) blur(1vw)',
      //              boxShadow: '0 0 10vw 6vw rgba(8,210,246,0.5)'
      //            }}></div>
      
      //       {/* Road Button - Responsive sizing and positioning */}
      //       <button className="absolute 
      //                          w-[60vw] top-[7vw] -left-[3vw]
      //                          sm:w-[30vw] sm:top-[10vw] sm:left-[9vw]
      //                          md:w-[28vw] md:top-[8vw] md:left-[8vw]
      //                          lg:w-[26vw] lg:top-[6vw] lg:left-[7vw]
      //                          xl:w-[24vw] xl:top-[4vw] xl:left-[6vw]
      //                          2xl:w-[22vw] 2xl:top-[2vw] 2xl:left-[5vw]
      //                          z-[50] focus:outline-none transform hover:scale-105 transition-transform duration-300">
      //         <img src={road} alt="Road" className="w-full h-full" />
      //       </button>
      
      //       {/* SVG Container - Responsive positioning */}
      //       <div className='absolute -top-[25vw] sm:top-[18vw] sm:-left-[10vw] '
      //   style={{ clipPath: 'inset(13% 0 1% 0)' }} 
      //   >
           

      //   </div>
      
      //       {/* Content Box - Responsive sizing and positioning */}
      //       <div className="absolute 
      //                       w-[45vw] h-[35vh] top-[6vw] left-[54vw]
      //                       sm:w-[40vw] sm:h-[60vh] sm:top-[2vw] sm:left-[46vw]
      //                       md:w-[38vw] md:h-[55vh] md:top-[3vw] md:left-[48vw]
      //                       lg:w-[36vw] lg:h-[50vh] lg:top-[4vw] lg:left-[50vw]
      //                       xl:w-[34vw] xl:h-[45vh] xl:top-[5vw] xl:left-[52vw]
      //                       2xl:w-[32vw] 2xl:h-[40vh] 2xl:top-[6vw] 2xl:left-[54vw]
      //                       rounded-lg shadow-lg overflow-hidden"
      //            style={{
      //              background: 'linear-gradient(200deg, #34ACAE 0%, #164748 100%)',
      //              opacity: '0.8',
      //              backdropFilter: 'blur(15px)',
      //              backgroundColor: 'rgba(255, 255, 255, 0.1)',
      //              border: '1px solid rgba(255, 255, 255, 0.18)'
      //            }}>
      //         {/* Title - Responsive text sizing */}
      //         <h1 className="text-white font-semibold m-1 ml-1
      //                        text-[5vw] 
      //                        sm:text-[3vw] sm:m-1 sm:ml-5
      //                        md:text-[2.8vw]
      //                        lg:text-[2.6vw]
      //                        xl:text-[2.4vw]
      //                        2xl:text-[2.2vw]">
      //           {activeContent.boxTitle}
      //         </h1>
      
      //         {/* Content Container - Responsive sizing */}
      //         <div className="m-[1vw] bg-black bg-opacity-20 rounded-md p-[1vw] overflow-y-auto
      //                         h-[75%]
      //                         sm:w-[85%]
      //                         md:w-[87%]
      //                         lg:w-[89%]
      //                         xl:w-[91%]
      //                         2xl:w-[93%]">
      //           {/* Description - Responsive text sizing */}
      //           <h2 className="text-white font-medium mb-[1vw]
      //                          text-[3vw]
      //                          sm:text-[1.5vw]
      //                          md:text-[1.4vw]
      //                          lg:text-[1.3vw]
      //                          xl:text-[1.2vw]
      //                          2xl:text-[1.1vw]">
      //             {activeContent.contentDescription}
      //           </h2>
      
      //           {/* Accordion - Responsive sizing */}
      //           <Accordion allowToggle>
      //             {Array.from({ length: 10 }).map((_, index) => (
      //               <AccordionItem
      //                 key={index}
      //                 className="relative z-[50] mb-[1vw] rounded-lg bg-gray-900 border border-gray-700
      //                            w-[35vw]
      //                            sm:w-[25vw]
      //                            md:w-[24vw]
      //                            lg:w-[23vw]
      //                            xl:w-[22vw]
      //                            2xl:w-[21vw]">
      //                 {/* Accordion content structure remains the same with responsive text */}
      //                 <h3>
      //                   <AccordionButton className="p-[0.5vw] bg-gray-800 rounded-t-lg">
      //                     <Box flex="1" textAlign="left" className="font-medium text-white
      //                                                             text-[2.5vw]
      //                                                             sm:text-[1vw]
      //                                                             md:text-[0.9vw]
      //                                                             lg:text-[0.8vw]
      //                                                             xl:text-[0.7vw]
      //                                                             2xl:text-[0.6vw]">
      //                       Level-{index + 1} {activeContent.difficulty}
      //                     </Box>
      //                     <AccordionIcon color="white" />
      //                   </AccordionButton>
      //                 </h3>
      //                 {/* Rest of accordion content remains the same */}
      //               </AccordionItem>
      //             ))}
      //           </Accordion>
      //         </div>
      //       </div>
      
      //       {/* Flag - Responsive positioning */}
      //       <div className="absolute 
      //                       bottom-0 left-0
      //                       sm:bottom-[1vw] sm:left-[43vw]
      //                       md:bottom-[2vw] md:left-[44vw]
      //                       lg:bottom-[3vw] lg:left-[45vw]
      //                       xl:bottom-[4vw] xl:left-[46vw]
      //                       2xl:bottom-[5vw] 2xl:left-[47vw]">
      //         <div className="w-92 h-96 relative">
      //           {/* Flag pole */}
      //           <div className="absolute left-14 top-[14vw] w-2 h-32 bg-gray-400" />
                
      //           {/* Triangular flag */}
      //           <div className="absolute left-16 top-[13.6vw]">
      //             <svg width="100" height="60" viewBox="0 0 120 60">
      //               <path d="M 0,0 L 120,30 L 0,60 Z" fill="rgb(3, 128, 124,2)" />
      //             </svg>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   );
      // }
      
      // export default Blue;      