import React , { useState } from 'react'
import earth7 from '../assets/earth7.png';
import road6 from '../assets/road6.svg';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box } from '@chakra-ui/react';



function Pink() {

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
    <div className='relative max-w-screen-2xl h-[110vh] sm:h-[180vh]'>
    <div className='w-full h-full'>
       <img src={earth7} alt="" className='w-[100vw] z-[50] h-full object-cover' />
    </div>

    <div 
          className="absolute top-[30vw] sm:top-[15vw] left-[25vw] sm:left-[70vw] w-[4vw] h-[4vw] rounded-full bg-[#e70dff]"
          style={{
            filter: 'brightness(300%) blur(1vw)',
            boxShadow: '0 0 10vw 8vw rgba(231, 13, 255, 0.5)'
          }}
        >
        </div>

        {/* Road Button */}
        <button 
          className="absolute w-[55vw] z-[50] sm:w-[35vw] top-[7vw] sm:top-[6.5vw] -left-[3vw] sm:left-[57vw] focus:outline-none transform hover:scale-105 transition-transform duration-300"
        >
          <img src={road6} alt="Road" className="w-full z-[50] filter brightness-100" />
        </button>

<div className='absolute -top-[0] left-[10vw]'>
<svg width="1200" height="1351" viewBox="0 0 419 402" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_934_1202)">
    
<g filter="url(#filter0_i_934_1202)" >
<path d="M90.9983 -1940C90.9983 -1920.23 629.32 -1713.52 250.999 -1787C-302.501 -1894.5 251.501 -1708 314 -1613C352.51 -1554.47 -70.8073 -1436.06 55.2371 -1418.5C187.995 -1400 621.29 -1584.23 98.9982 -1218C-26.501 -1130 11.0004 -1073 242 -1019.5C438.013 -974.103 417 -822.428 299.998 -776C-548 -439.5 944.499 -766.5 86.4978 -408.5C-83.3005 -337.652 578 -191 315.5 -200C125.02 -206.531 -229.5 -252.5 181 -9C464 117 -340.001 53.5 235 189C810.001 324.5 -358.002 355.5 241.499 512.5C841.001 669.5 -443.5 585 273 820.5" stroke="#0B3238" stroke-opacity="0.6" stroke-width="7.05436"/>
</g>
<g filter="url(#filter1_bi_934_1202)" onClick={handleClick5} >
<circle cx="278.271" cy="326.145" r="12.4953" fill="url(#paint0_linear_934_1202)"/>
<circle cx="278.271" cy="326.145" r="10.4022" stroke="url(#paint1_angular_934_1202)" stroke-opacity="0.7" stroke-width="4.18625"/>
</g>
<circle cx="278.208" cy="326.208" r="14.5885" stroke="url(#paint2_angular_934_1202)" stroke-opacity="0.7" stroke-width="0.761137"/>
<g filter="url(#filter2_bi_934_1202)" onClick={handleClick1}>
<circle cx="131.271" cy="160.145" r="12.4953" fill="url(#paint3_linear_934_1202)"/>
<circle cx="131.271" cy="160.145" r="10.4022" stroke="url(#paint4_angular_934_1202)" stroke-opacity="0.7" stroke-width="4.18625"/>
</g>
<circle cx="131.208" cy="160.208" r="14.5885" stroke="url(#paint5_angular_934_1202)" stroke-opacity="0.7" stroke-width="0.761137"/>
<g filter="url(#filter3_bi_934_1202)" onClick={handleClick2} >
<circle cx="229.271" cy="186.145" r="12.4953" fill="url(#paint6_linear_934_1202)"/>
<circle cx="229.271" cy="186.145" r="10.4022" stroke="url(#paint7_angular_934_1202)" stroke-opacity="0.7" stroke-width="4.18625"/>
</g>
<circle cx="229.208" cy="186.208" r="14.5885" stroke="url(#paint8_angular_934_1202)" stroke-opacity="0.7" stroke-width="0.761137"/>
<g filter="url(#filter4_bi_934_1202)" onClick={handleClick3}>
<circle cx="339.271" cy="217.145" r="12.4953" fill="url(#paint9_linear_934_1202)"/>
<circle cx="339.271" cy="217.145" r="10.4022" stroke="url(#paint10_angular_934_1202)" stroke-opacity="0.7" stroke-width="4.18625"/>
</g>
<circle cx="339.208" cy="217.208" r="14.5885" stroke="url(#paint11_angular_934_1202)" stroke-opacity="0.7" stroke-width="0.761137"/>
<g filter="url(#filter5_bi_934_1202)"onClick={handleClick4} >
<circle cx="376.271" cy="285.145" r="12.4953" fill="url(#paint12_linear_934_1202)"/>
<circle cx="376.271" cy="285.145" r="10.4022" stroke="url(#paint13_angular_934_1202)" stroke-opacity="0.7" stroke-width="4.18625"/>
</g>
<circle cx="376.208" cy="285.208" r="14.5885" stroke="url(#paint14_angular_934_1202)" stroke-opacity="0.7" stroke-width="0.761137"/>
</g>
<defs>
<filter id="filter0_i_934_1202" x="-12.46" y="-1940.88" width="422.649" height="2764.88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.460067" dy="0.153356"/>
<feGaussianBlur stdDeviation="1.04282"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_934_1202"/>
</filter>
<filter id="filter1_bi_934_1202" x="260.942" y="308.816" width="34.6567" height="34.6572" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="2.41661"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_934_1202"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_934_1202" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3.42512" operator="erode" in="SourceAlpha" result="effect2_innerShadow_934_1202"/>
<feOffset dy="-0.887993"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_934_1202"/>
</filter>
<filter id="filter2_bi_934_1202" x="113.942" y="142.816" width="34.6567" height="34.6572" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="2.41661"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_934_1202"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_934_1202" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3.42512" operator="erode" in="SourceAlpha" result="effect2_innerShadow_934_1202"/>
<feOffset dy="-0.887993"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_934_1202"/>
</filter>
<filter id="filter3_bi_934_1202" x="211.942" y="168.816" width="34.6567" height="34.6572" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="2.41661"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_934_1202"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_934_1202" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3.42512" operator="erode" in="SourceAlpha" result="effect2_innerShadow_934_1202"/>
<feOffset dy="-0.887993"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_934_1202"/>
</filter>
<filter id="filter4_bi_934_1202" x="321.942" y="199.816" width="34.6567" height="34.6572" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="2.41661"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_934_1202"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_934_1202" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3.42512" operator="erode" in="SourceAlpha" result="effect2_innerShadow_934_1202"/>
<feOffset dy="-0.887993"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_934_1202"/>
</filter>
<filter id="filter5_bi_934_1202" x="358.942" y="267.816" width="34.6567" height="34.6572" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="2.41661"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_934_1202"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_934_1202" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3.42512" operator="erode" in="SourceAlpha" result="effect2_innerShadow_934_1202"/>
<feOffset dy="-0.887993"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_934_1202"/>
</filter>
<linearGradient id="paint0_linear_934_1202" x1="278.271" y1="313.649" x2="278.271" y2="338.64" gradientUnits="userSpaceOnUse">
<stop stop-color="#F24EC4"/>
<stop offset="1" stop-color="#4B0738"/>
</linearGradient>
<radialGradient id="paint1_angular_934_1202" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(275.928 326.246) rotate(-130.914) scale(9.86426 9.60325)">
<stop offset="0.34772" stop-color="#F24EC4" stop-opacity="0"/>
<stop offset="0.451" stop-color="#CA249B"/>
<stop offset="0.600057" stop-color="#FF8EDF"/>
<stop offset="0.655752" stop-color="#FF78D9"/>
<stop offset="0.722092" stop-color="#FF79DA"/>
<stop offset="0.864106" stop-color="#FF97E2" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint2_angular_934_1202" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(275.544 326.323) rotate(-130.914) scale(11.2162 10.9194)">
<stop offset="0.34772" stop-color="#F24EC4" stop-opacity="0"/>
<stop offset="0.451" stop-color="#CA249B"/>
<stop offset="0.600057" stop-color="#FF8EDF"/>
<stop offset="0.655752" stop-color="#FF78D9"/>
<stop offset="0.722092" stop-color="#FF79DA"/>
<stop offset="0.864106" stop-color="#FF97E2" stop-opacity="0"/>
</radialGradient>
<linearGradient id="paint3_linear_934_1202" x1="131.271" y1="147.649" x2="131.271" y2="172.64" gradientUnits="userSpaceOnUse">
<stop stop-color="#F24EC4"/>
<stop offset="1" stop-color="#4B0738"/>
</linearGradient>
<radialGradient id="paint4_angular_934_1202" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(128.928 160.246) rotate(-130.914) scale(9.86426 9.60325)">
<stop offset="0.34772" stop-color="#F24EC4" stop-opacity="0"/>
<stop offset="0.451" stop-color="#CA249B"/>
<stop offset="0.600057" stop-color="#FF8EDF"/>
<stop offset="0.655752" stop-color="#FF78D9"/>
<stop offset="0.722092" stop-color="#FF79DA"/>
<stop offset="0.864106" stop-color="#FF97E2" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint5_angular_934_1202" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(128.544 160.323) rotate(-130.914) scale(11.2162 10.9194)">
<stop offset="0.34772" stop-color="#F24EC4" stop-opacity="0"/>
<stop offset="0.451" stop-color="#CA249B"/>
<stop offset="0.600057" stop-color="#FF8EDF"/>
<stop offset="0.655752" stop-color="#FF78D9"/>
<stop offset="0.722092" stop-color="#FF79DA"/>
<stop offset="0.864106" stop-color="#FF97E2" stop-opacity="0"/>
</radialGradient>
<linearGradient id="paint6_linear_934_1202" x1="229.271" y1="173.649" x2="229.271" y2="198.64" gradientUnits="userSpaceOnUse">
<stop stop-color="#F24EC4"/>
<stop offset="1" stop-color="#4B0738"/>
</linearGradient>
<radialGradient id="paint7_angular_934_1202" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(226.928 186.246) rotate(-130.914) scale(9.86426 9.60325)">
<stop offset="0.34772" stop-color="#F24EC4" stop-opacity="0"/>
<stop offset="0.451" stop-color="#CA249B"/>
<stop offset="0.600057" stop-color="#FF8EDF"/>
<stop offset="0.655752" stop-color="#FF78D9"/>
<stop offset="0.722092" stop-color="#FF79DA"/>
<stop offset="0.864106" stop-color="#FF97E2" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint8_angular_934_1202" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(226.544 186.323) rotate(-130.914) scale(11.2162 10.9194)">
<stop offset="0.34772" stop-color="#F24EC4" stop-opacity="0"/>
<stop offset="0.451" stop-color="#CA249B"/>
<stop offset="0.600057" stop-color="#FF8EDF"/>
<stop offset="0.655752" stop-color="#FF78D9"/>
<stop offset="0.722092" stop-color="#FF79DA"/>
<stop offset="0.864106" stop-color="#FF97E2" stop-opacity="0"/>
</radialGradient>
<linearGradient id="paint9_linear_934_1202" x1="339.271" y1="204.649" x2="339.271" y2="229.64" gradientUnits="userSpaceOnUse">
<stop stop-color="#F24EC4"/>
<stop offset="1" stop-color="#4B0738"/>
</linearGradient>
<radialGradient id="paint10_angular_934_1202" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(336.928 217.246) rotate(-130.914) scale(9.86426 9.60325)">
<stop offset="0.34772" stop-color="#F24EC4" stop-opacity="0"/>
<stop offset="0.451" stop-color="#CA249B"/>
<stop offset="0.600057" stop-color="#FF8EDF"/>
<stop offset="0.655752" stop-color="#FF78D9"/>
<stop offset="0.722092" stop-color="#FF79DA"/>
<stop offset="0.864106" stop-color="#FF97E2" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint11_angular_934_1202" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(336.544 217.323) rotate(-130.914) scale(11.2162 10.9194)">
<stop offset="0.34772" stop-color="#F24EC4" stop-opacity="0"/>
<stop offset="0.451" stop-color="#CA249B"/>
<stop offset="0.600057" stop-color="#FF8EDF"/>
<stop offset="0.655752" stop-color="#FF78D9"/>
<stop offset="0.722092" stop-color="#FF79DA"/>
<stop offset="0.864106" stop-color="#FF97E2" stop-opacity="0"/>
</radialGradient>
<linearGradient id="paint12_linear_934_1202" x1="376.271" y1="272.649" x2="376.271" y2="297.64" gradientUnits="userSpaceOnUse">
<stop stop-color="#F24EC4"/>
<stop offset="1" stop-color="#4B0738"/>
</linearGradient>
<radialGradient id="paint13_angular_934_1202" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(373.928 285.246) rotate(-130.914) scale(9.86426 9.60325)">
<stop offset="0.34772" stop-color="#F24EC4" stop-opacity="0"/>
<stop offset="0.451" stop-color="#CA249B"/>
<stop offset="0.600057" stop-color="#FF8EDF"/>
<stop offset="0.655752" stop-color="#FF78D9"/>
<stop offset="0.722092" stop-color="#FF79DA"/>
<stop offset="0.864106" stop-color="#FF97E2" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint14_angular_934_1202" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(373.544 285.323) rotate(-130.914) scale(11.2162 10.9194)">
<stop offset="0.34772" stop-color="#F24EC4" stop-opacity="0"/>
<stop offset="0.451" stop-color="#CA249B"/>
<stop offset="0.600057" stop-color="#FF8EDF"/>
<stop offset="0.655752" stop-color="#FF78D9"/>
<stop offset="0.722092" stop-color="#FF79DA"/>
<stop offset="0.864106" stop-color="#FF97E2" stop-opacity="0"/>
</radialGradient>
<clipPath id="clip0_934_1202">
<rect width="427" height="3209" fill="white" transform="translate(-8 -2201)"/>
</clipPath>
</defs>
</svg>









</div>
        


        <div className="absolute w-[45vw] sm:w-[40vw] h-[35vh] sm:h-[60vh] top-[6vw] sm:top-[5vw] left-[54vw] sm:left-[5vw] rounded-lg shadow-lg overflow-hidden"
        style={{
          background: 'linear-gradient(200deg, #34ACAE 0%, #164748 100%)',
          opacity: '0.8',
          backdropFilter: 'blur(15px)',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
        }}>
        <h1 className="text-white text-[5vw] sm:text-[3vw] font-semibold m-1 sm:m-1 ml-1 sm:ml-5">{activeContent.boxTitle}</h1>

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


    </div>
  )
}

export default Pink
