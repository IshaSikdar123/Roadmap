import React, { useState } from 'react';
import earth2 from '../assets/earth2.png';
import road2 from '../assets/road2.svg';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, ChakraProvider } from '@chakra-ui/react';

function Brown() {
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
    <div className="relative w-full h-screen sm:h-[180vh]">
      {/* Earth Image */}
      <img src={earth2} alt="Earth" className="w-full h-full object-cover bg-[#ff2f2fc4]" />

      {/* Glowing Ball */}
      <div 
        className="absolute top-[30vw] sm:top-[14vw] left-[70vw] sm:left-[70vw] w-[10vw] sm:w-[4vw] h-[10vh] sm:h-[4vw] rounded-full bg-[#A55001]"
        style={{
          filter: 'brightness(300%) blur(1vw)',
          boxShadow: '0 0 10vw 8vw rgba(153, 0, 0, 1)'
        }}
      />

      {/* Road Button */}
      <button 
        className="absolute w-[60vw] z-[50] sm:w-[30vw] top-[7vw] sm:top-5 left-[38vw] sm:left-[57vw] focus:outline-none transform hover:scale-105 transition-transform duration-300"
      >
        <img src={road2} alt="Road" className="w-full z-[50] filter brightness-100" />
      </button>

      {/* Interactive SVG */}
      <div className="absolute inset-0 w-full h-full">
      <svg width="100%" height="100%" viewBox="0 0 416 374" preserveAspectRatio='none' fill="none" xmlns="http://www.w3.org/2000/svg"  
        // style={{ clipPath: 'inset(18% 0 22% 0)' }} 
        >
        <g filter="url(#filter0_i_894_683)"> <path d="M98.9984 -307C98.9984 -287.231 637.32 -80.5228 258.999 -154C-294.501 -261.5 259.501 -74.9998 322.001 20.0002C360.51 78.5349 -62.8072 196.936 63.2372 214.5C195.995 233 629.29 48.7693 106.998 415C-18.501 503 19.0005 560 250.001 613.5C446.014 658.897 425 810.572 307.999 857C-540 1193.5 952.499 866.5 94.4979 1224.5C-75.3004 1295.35 586.001 1442 323.501 1433C133.02 1426.47 -109 1378.5 301.5 1622C584.5 1748 -338.501 1691 236.5 1826.5C811.502 1962 -379.001 1993 220.5 2150C820.002 2307 -435.5 2218 281 2453.5" stroke="#0B3238" stroke-opacity="0.6" stroke-width="7.05436"/>
         </g>
          <g filter="url(#filter0_i_894_683)">
            <path d="M98.9984 -307C98.9984..." stroke="#0B3238" strokeOpacity="0.6" strokeWidth="7.05436" />
          </g>

          {/* Circle Elements with Click Events */}
          <g filter="url(#filter1_bi_894_683)">
            <circle cx="135.271" cy="144.144" r="12.4953" fill="#B83F21" onClick={handleClick1} />
            <circle cx="135.271" cy="144.144" r="10.4022" stroke="url(#paint0_angular_894_683)" strokeOpacity="0.7" strokeWidth="4.18625" />
          </g>

          <g filter="url(#filter2_bi_894_683)">
            <circle cx="75.2715" cy="210.399" r="12.4953" fill="#B83F21" onClick={handleClick2} />
            <circle cx="75.2715" cy="210.399" r="10.4022" stroke="url(#paint2_angular_894_683)" strokeOpacity="0.7" strokeWidth="4.18625" />
          </g>

          <g filter="url(#filter3_bi_894_683)">
            <circle cx="185.271" cy="199.144" r="12.4953" fill="#B83F21" onClick={handleClick3} />
            <circle cx="185.271" cy="199.144" r="10.4022" stroke="url(#paint4_angular_894_683)" strokeOpacity="0.7" strokeWidth="4.18625" />
          </g>

          <g filter="url(#filter4_bi_894_683)">
            <circle cx="312.006" cy="254.272" r="12.4953" fill="#B83F21" onClick={handleClick4} />
            <circle cx="312.006" cy="254.272" r="10.4022" stroke="url(#paint6_angular_894_683)" strokeOpacity="0.7" strokeWidth="4.18625" />
          </g>

          <g filter="url(#filter5_bi_894_683)">
            <circle cx="287.006" cy="184.399" r="12.4953" fill="#B83F21" onClick={handleClick5} />
            <circle cx="287.006" cy="184.399" r="10.4022" stroke="url(#paint8_angular_894_683)" strokeOpacity="0.7" strokeWidth="4.18625" />
          </g>

          <defs>
<filter id="filter0_i_894_683" x="11.8501" y="-307.879" width="390.313" height="2764.88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.460067" dy="0.153356"/>
<feGaussianBlur stdDeviation="1.04282"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_894_683"/>
</filter>
<filter id="filter1_bi_894_683" x="117.943" y="126.816" width="34.6572" height="34.6571" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="2.41661"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_894_683"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_894_683" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3.42512" operator="erode" in="SourceAlpha" result="effect2_innerShadow_894_683"/>
<feOffset dy="-0.887993"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_894_683"/>
</filter>
<filter id="filter2_bi_894_683" x="57.9429" y="193.071" width="34.6572" height="34.6571" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="2.41661"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_894_683"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_894_683" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3.42512" operator="erode" in="SourceAlpha" result="effect2_innerShadow_894_683"/>
<feOffset dy="-0.887993"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_894_683"/>
</filter>
<filter id="filter3_bi_894_683" x="167.943" y="181.816" width="34.6572" height="34.6571" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="2.41661"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_894_683"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_894_683" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3.42512" operator="erode" in="SourceAlpha" result="effect2_innerShadow_894_683"/>
<feOffset dy="-0.887993"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_894_683"/>
</filter>
<filter id="filter4_bi_894_683" x="294.678" y="236.943" width="34.6572" height="34.6571" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="2.41661"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_894_683"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_894_683" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3.42512" operator="erode" in="SourceAlpha" result="effect2_innerShadow_894_683"/>
<feOffset dy="-0.887993"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_894_683"/>
</filter>
<filter id="filter5_bi_894_683" x="269.678" y="167.071" width="34.6572" height="34.6571" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="2.41661"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_894_683"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_894_683" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3.42512" operator="erode" in="SourceAlpha" result="effect2_innerShadow_894_683"/>
<feOffset dy="-0.887993"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_894_683"/>
</filter>
<radialGradient id="paint0_angular_894_683" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(132.929 144.246) rotate(-130.914) scale(9.86426 9.60325)">
<stop offset="0.34772" stop-color="#4B0300" stop-opacity="0"/>
<stop offset="0.569" stop-color="#FF5F5F"/>
<stop offset="0.600057" stop-color="#FF9489"/>
<stop offset="0.655752" stop-color="#FF5555"/>
<stop offset="0.722092" stop-color="#FF7878"/>
<stop offset="0.864106" stop-color="#F17373" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint1_angular_894_683" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(132.544 144.323) rotate(-130.914) scale(11.2162 10.9194)">
<stop offset="0.34772" stop-color="#4B0300" stop-opacity="0"/>
<stop offset="0.569" stop-color="#FF5F5F"/>
<stop offset="0.600057" stop-color="#FF9489"/>
<stop offset="0.655752" stop-color="#FF5555"/>
<stop offset="0.722092" stop-color="#FF7878"/>
<stop offset="0.864106" stop-color="#F17373" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint2_angular_894_683" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(72.9286 210.501) rotate(-130.914) scale(9.86426 9.60325)">
<stop offset="0.34772" stop-color="#4B0300" stop-opacity="0"/>
<stop offset="0.569" stop-color="#FF5F5F"/>
<stop offset="0.600057" stop-color="#FF9489"/>
<stop offset="0.655752" stop-color="#FF5555"/>
<stop offset="0.722092" stop-color="#FF7878"/>
<stop offset="0.864106" stop-color="#F17373" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint3_angular_894_683" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(72.5439 210.578) rotate(-130.914) scale(11.2162 10.9194)">
<stop offset="0.34772" stop-color="#4B0300" stop-opacity="0"/>
<stop offset="0.569" stop-color="#FF5F5F"/>
<stop offset="0.600057" stop-color="#FF9489"/>
<stop offset="0.655752" stop-color="#FF5555"/>
<stop offset="0.722092" stop-color="#FF7878"/>
<stop offset="0.864106" stop-color="#F17373" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint4_angular_894_683" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(182.929 199.246) rotate(-130.914) scale(9.86426 9.60325)">
<stop offset="0.34772" stop-color="#4B0300" stop-opacity="0"/>
<stop offset="0.569" stop-color="#FF5F5F"/>
<stop offset="0.600057" stop-color="#FF9489"/>
<stop offset="0.655752" stop-color="#FF5555"/>
<stop offset="0.722092" stop-color="#FF7878"/>
<stop offset="0.864106" stop-color="#F17373" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint5_angular_894_683" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(182.544 199.323) rotate(-130.914) scale(11.2162 10.9194)">
<stop offset="0.34772" stop-color="#4B0300" stop-opacity="0"/>
<stop offset="0.569" stop-color="#FF5F5F"/>
<stop offset="0.600057" stop-color="#FF9489"/>
<stop offset="0.655752" stop-color="#FF5555"/>
<stop offset="0.722092" stop-color="#FF7878"/>
<stop offset="0.864106" stop-color="#F17373" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint6_angular_894_683" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(309.663 254.373) rotate(-130.914) scale(9.86426 9.60325)">
<stop offset="0.34772" stop-color="#4B0300" stop-opacity="0"/>
<stop offset="0.569" stop-color="#FF5F5F"/>
<stop offset="0.600057" stop-color="#FF9489"/>
<stop offset="0.655752" stop-color="#FF5555"/>
<stop offset="0.722092" stop-color="#FF7878"/>
<stop offset="0.864106" stop-color="#F17373" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint7_angular_894_683" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(309.279 254.451) rotate(-130.914) scale(11.2162 10.9194)">
<stop offset="0.34772" stop-color="#4B0300" stop-opacity="0"/>
<stop offset="0.569" stop-color="#FF5F5F"/>
<stop offset="0.600057" stop-color="#FF9489"/>
<stop offset="0.655752" stop-color="#FF5555"/>
<stop offset="0.722092" stop-color="#FF7878"/>
<stop offset="0.864106" stop-color="#F17373" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint8_angular_894_683" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(284.663 184.501) rotate(-130.914) scale(9.86426 9.60325)">
<stop offset="0.34772" stop-color="#4B0300" stop-opacity="0"/>
<stop offset="0.569" stop-color="#FF5F5F"/>
<stop offset="0.600057" stop-color="#FF9489"/>
<stop offset="0.655752" stop-color="#FF5555"/>
<stop offset="0.722092" stop-color="#FF7878"/>
<stop offset="0.864106" stop-color="#F17373" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint9_angular_894_683" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(284.279 184.578) rotate(-130.914) scale(11.2162 10.9194)">
<stop offset="0.34772" stop-color="#4B0300" stop-opacity="0"/>
<stop offset="0.569" stop-color="#FF5F5F"/>
<stop offset="0.600057" stop-color="#FF9489"/>
<stop offset="0.655752" stop-color="#FF5555"/>
<stop offset="0.722092" stop-color="#FF7878"/>
<stop offset="0.864106" stop-color="#F17373" stop-opacity="0"/>
</radialGradient>
</defs>
        </svg>
      </div>

      {/* Dynamic Content Box */}
      <div className="absolute w-[45vw] sm:w-[40vw] h-[35vh] sm:h-[60vh] top-[6vw] sm:top-[5vw] left-[54vw] sm:left-[5vw] rounded-lg shadow-lg overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #761110 0% , #DC201E 40%)',
          opacity: '0.8',
          backdropFilter: 'blur(15px)',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
        }}>
        <h1 className="text-white text-[5vw] sm:text-[3vw] font-semibold m-1 sm:m-1 ml-1 sm:ml-5">
          {activeContent.boxTitle}
        </h1>

        <div className="sm:w-[85%] h-[75%] m-[1vw] bg-white bg-opacity-20 rounded-md p-[1vw] overflow-y-auto">
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:block absolute w-[2vw] sm:w-[5.5vw] left-[20vw] sm:left-[26vw] -top-[1.1vw] sm:-top-[1.1vw] mt-[1vw] mr-[1vw] bg-black z-40 text-white p-[0.5vw] rounded-lg hover:bg-[#1f978b] transition"
                >
                  Start
                </a>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <div className='absolute bottom-0 sm:-bottom-[1.5vw] left-0 sm:left-[57vw] '>
<div className="w-92 h-96 relative">
      {/* Base stand */}
     
      
      {/* Flag pole */}
      <div className="absolute left-14 top-[14vw] w-2 h-32 bg-gray-400" />
      
      {/* Triangular flag */}
      <div className="absolute left-16 top-[13.6vw]">
        <svg width="100" height="60" viewBox="0 0 120 60">
          <path 
            d="M 0,0 L 120,30 L 0,60 Z" 
            fill="rgb(184,63,33,1)" 
          />
        </svg>
      </div>
    </div>
</div>
    </div>
  );
}

export default Brown;
