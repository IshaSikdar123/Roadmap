import React, { useState } from 'react';
import earth5 from '../assets/earth5.png';
import road4 from '../assets/road4.svg';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box } from '@chakra-ui/react';


function DBlue() {

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
        <img src={earth5} alt="" className='w-[100vw] z-[50] h-full object-cover' />
     </div>

     <div 
          className="absolute top-[30vw] sm:top-[15vw] left-[25vw] sm:left-[70vw] w-[4vw] h-[4vw] rounded-full bg-[#1a3f69]"
          style={{
            filter: 'brightness(300%) blur(1vw)',
            boxShadow: '0 0 10vw 8vw rgba(26, 63, 105, 1)'
          }} 
        >
        </div>

        {/* Road Button */}
        <button 
          className="absolute w-[55vw] z-[50] sm:w-[30vw] top-[7vw] sm:top-[9.5vw] -left-[3vw] sm:left-[57vw] focus:outline-none transform hover:scale-105 transition-transform duration-300"
        >
          <img src={road4} alt="Road" className="w-full z-[50] filter brightness-100" />
        </button>
 
  <div className='absolute sm:top-[5vw] sm:left-[20vw]'>
  <svg width="1200" height="1151" viewBox="0 0 427 382" fill="none" xmlns="http://www.w3.org/2000/svg"
  style={{ clipPath: 'inset(24% 0 8% 0)' }}>
<g filter="url(#filter0_i_918_366)">
<path d="M98.9989 -1098C98.9989 -1078.23 637.32 -871.523 259 -945C-294.5 -1052.5 259.501 -866 322.001 -771C360.51 -712.465 -62.8067 -594.064 63.2377 -576.5C195.995 -558 629.291 -742.231 106.999 -376C-18.5005 -288 19.001 -231 250.001 -177.5C446.014 -132.103 419.502 15.5717 302.5 62C-545.498 398.5 952.499 75.5002 94.4984 433.5C-75.3 504.348 586.001 651 323.501 642C133.021 635.469 -108.999 587.5 301.501 831C584.501 957 -338.5 900 236.501 1035.5C811.502 1171 -379 1202 220.501 1359C820.002 1516 -435.499 1427 281.001 1662.5" stroke="#0B3238" stroke-opacity="0.6" stroke-width="7.05436"/>
</g>
<g filter="url(#filter1_bi_918_366)">
<ellipse cx="290.026" cy="339.8" rx="13.1562" ry="13.0744" fill="url(#paint0_linear_918_366)" onClick={handleClick5}/>
<path d="M301.089 339.8C301.089 345.852 296.149 350.781 290.026 350.781C283.904 350.781 278.963 345.852 278.963 339.8C278.963 333.747 283.904 328.819 290.026 328.819C296.149 328.819 301.089 333.747 301.089 339.8Z" stroke="url(#paint1_angular_918_366)" stroke-opacity="0.7" stroke-width="4.18625"/>
</g>
<path d="M289.959 355.113C298.429 355.113 305.299 348.289 305.299 339.866C305.299 331.443 298.429 324.619 289.959 324.619C281.49 324.619 274.619 331.443 274.619 339.866C274.619 348.289 281.49 355.113 289.959 355.113Z" stroke="url(#paint2_angular_918_366)" stroke-opacity="0.7" stroke-width="0.761137"/>
<g filter="url(#filter2_bi_918_366)"> 
<ellipse cx="67.408" cy="176.435" rx="13.49" ry="12.7522" fill="url(#paint3_linear_918_366)" onClick={handleClick1}/>
<path d="M78.8048 176.435C78.8048 182.213 73.8147 187.094 67.408 187.094C61.0012 187.094 56.0111 182.213 56.0111 176.435C56.0111 170.658 61.0012 165.776 67.408 165.776C73.8147 165.776 78.8048 170.658 78.8048 176.435Z" stroke="url(#paint4_angular_918_366)" stroke-opacity="0.7" stroke-width="4.18625"/>
</g>
<path d="M67.3389 191.381C76 191.381 83.0583 184.738 83.0583 176.5C83.0583 168.262 76 161.619 67.3389 161.619C58.6777 161.619 51.6194 168.262 51.6194 176.5C51.6194 184.738 58.6777 191.381 67.3389 191.381Z" stroke="url(#paint5_angular_918_366)" stroke-opacity="0.7" stroke-width="0.761137"/>
<g filter="url(#filter3_bi_918_366)">
<ellipse cx="125.406" cy="232.8" rx="13.4891" ry="13.0744" fill="url(#paint6_linear_918_366)" onClick={handleClick2}/>
<path d="M136.802 232.8C136.802 238.804 131.762 243.781 125.406 243.781C119.05 243.781 114.01 238.804 114.01 232.8C114.01 226.796 119.05 221.819 125.406 221.819C131.762 221.819 136.802 226.796 136.802 232.8Z" stroke="url(#paint7_angular_918_366)" stroke-opacity="0.7" stroke-width="4.18625"/>
</g>
<path d="M125.338 248.113C134.008 248.113 141.056 241.298 141.056 232.866C141.056 224.435 134.008 217.619 125.338 217.619C116.668 217.619 109.619 224.435 109.619 232.866C109.619 241.298 116.668 248.113 125.338 248.113Z" stroke="url(#paint8_angular_918_366)" stroke-opacity="0.7" stroke-width="0.761137"/>
<g filter="url(#filter4_bi_918_366)">
<ellipse cx="238.823" cy="238.866" rx="13.8546" ry="13.1331" fill="url(#paint9_linear_918_366)" onClick={handleClick3}/>
<path d="M250.585 238.866C250.585 244.859 245.426 249.906 238.823 249.906C232.221 249.906 227.062 244.859 227.062 238.866C227.062 232.873 232.221 227.826 238.823 227.826C245.426 227.826 250.585 232.873 250.585 238.866Z" stroke="url(#paint10_angular_918_366)" stroke-opacity="0.7" stroke-width="4.18625"/>
</g>
<path d="M238.753 254.247C247.645 254.247 254.887 247.409 254.887 238.933C254.887 230.457 247.645 223.619 238.753 223.619C229.862 223.619 222.619 230.457 222.619 238.933C222.619 247.409 229.862 254.247 238.753 254.247Z" stroke="url(#paint11_angular_918_366)" stroke-opacity="0.7" stroke-width="0.761137"/>
<g filter="url(#filter5_bi_918_366)">
<ellipse cx="358.823" cy="260.866" rx="13.8546" ry="13.1331" fill="url(#paint12_linear_918_366)" onClick={handleClick4}/>
<path d="M370.585 260.866C370.585 266.859 365.426 271.906 358.823 271.906C352.221 271.906 347.062 266.859 347.062 260.866C347.062 254.873 352.221 249.826 358.823 249.826C365.426 249.826 370.585 254.873 370.585 260.866Z" stroke="url(#paint13_angular_918_366)" stroke-opacity="0.7" stroke-width="4.18625"/>
</g>
<path d="M358.753 276.247C367.645 276.247 374.887 269.409 374.887 260.933C374.887 252.457 367.645 245.619 358.753 245.619C349.862 245.619 342.619 252.457 342.619 260.933C342.619 269.409 349.862 276.247 358.753 276.247Z" stroke="url(#paint14_angular_918_366)" stroke-opacity="0.7" stroke-width="0.761137"/>
<defs>
<filter id="filter0_i_918_366" x="11.8506" y="-1098.88" width="390.314" height="2764.88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.460067" dy="0.153356"/>
<feGaussianBlur stdDeviation="1.04282"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_918_366"/>
</filter>
<filter id="filter1_bi_918_366" x="272.037" y="321.892" width="35.9789" height="35.8153" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="2.41661"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_918_366"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_918_366" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3.42512" operator="erode" in="SourceAlpha" result="effect2_innerShadow_918_366"/>
<feOffset dy="-0.887993"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_918_366"/>
</filter>
<filter id="filter2_bi_918_366" x="49.0847" y="158.85" width="36.6459" height="35.1709" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="2.41661"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_918_366"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_918_366" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3.42512" operator="erode" in="SourceAlpha" result="effect2_innerShadow_918_366"/>
<feOffset dy="-0.887993"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_918_366"/>
</filter>
<filter id="filter3_bi_918_366" x="107.084" y="214.892" width="36.645" height="35.8154" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="2.41661"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_918_366"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_918_366" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3.42512" operator="erode" in="SourceAlpha" result="effect2_innerShadow_918_366"/>
<feOffset dy="-0.887993"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_918_366"/>
</filter>
<filter id="filter4_bi_918_366" x="220.136" y="220.9" width="37.3754" height="35.9326" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="2.41661"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_918_366"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_918_366" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3.42512" operator="erode" in="SourceAlpha" result="effect2_innerShadow_918_366"/>
<feOffset dy="-0.887993"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_918_366"/>
</filter>
<filter id="filter5_bi_918_366" x="340.136" y="242.9" width="37.3754" height="35.9326" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="2.41661"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_918_366"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_918_366" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3.42512" operator="erode" in="SourceAlpha" result="effect2_innerShadow_918_366"/>
<feOffset dy="-0.887993"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_918_366"/>
</filter>
<linearGradient id="paint0_linear_918_366" x1="290.026" y1="326.726" x2="290.026" y2="352.874" gradientUnits="userSpaceOnUse">
<stop stop-color="#1E97EE"/>
<stop offset="1" stop-color="#103E54"/>
</linearGradient>
<radialGradient id="paint1_angular_918_366" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(287.56 339.906) rotate(-131.091) scale(10.3492 10.0841)">
<stop offset="0.34772" stop-color="#002E4B" stop-opacity="0"/>
<stop offset="0.569" stop-color="#5FC7FF"/>
<stop offset="0.600057" stop-color="#89CEFF"/>
<stop offset="0.655752" stop-color="#55C9FF"/>
<stop offset="0.722092" stop-color="#78D4FF"/>
<stop offset="0.864106" stop-color="#73C9F1" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint2_angular_918_366" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(287.154 339.987) rotate(-131.091) scale(11.7676 11.4661)">
<stop offset="0.34772" stop-color="#002E4B" stop-opacity="0"/>
<stop offset="0.569" stop-color="#5FC7FF"/>
<stop offset="0.600057" stop-color="#89CEFF"/>
<stop offset="0.655752" stop-color="#55C9FF"/>
<stop offset="0.722092" stop-color="#78D4FF"/>
<stop offset="0.864106" stop-color="#73C9F1" stop-opacity="0"/>
</radialGradient>
<linearGradient id="paint3_linear_918_366" x1="67.408" y1="163.683" x2="67.408" y2="189.188" gradientUnits="userSpaceOnUse">
<stop stop-color="#1E97EE"/>
<stop offset="1" stop-color="#103E54"/>
</linearGradient>
<radialGradient id="paint4_angular_918_366" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(64.8786 176.539) rotate(-132.515) scale(10.3209 10.1127)">
<stop offset="0.34772" stop-color="#002E4B" stop-opacity="0"/>
<stop offset="0.569" stop-color="#5FC7FF"/>
<stop offset="0.600057" stop-color="#89CEFF"/>
<stop offset="0.655752" stop-color="#55C9FF"/>
<stop offset="0.722092" stop-color="#78D4FF"/>
<stop offset="0.864106" stop-color="#73C9F1" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint5_angular_918_366" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(64.4628 176.618) rotate(-132.515) scale(11.7354 11.4987)">
<stop offset="0.34772" stop-color="#002E4B" stop-opacity="0"/>
<stop offset="0.569" stop-color="#5FC7FF"/>
<stop offset="0.600057" stop-color="#89CEFF"/>
<stop offset="0.655752" stop-color="#55C9FF"/>
<stop offset="0.722092" stop-color="#78D4FF"/>
<stop offset="0.864106" stop-color="#73C9F1" stop-opacity="0"/>
</radialGradient>
<linearGradient id="paint6_linear_918_366" x1="125.406" y1="219.726" x2="125.406" y2="245.874" gradientUnits="userSpaceOnUse">
<stop stop-color="#1E97EE"/>
<stop offset="1" stop-color="#103E54"/>
</linearGradient>
<radialGradient id="paint7_angular_918_366" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(122.877 232.906) rotate(-131.802) scale(10.4631 10.2267)">
<stop offset="0.34772" stop-color="#002E4B" stop-opacity="0"/>
<stop offset="0.569" stop-color="#5FC7FF"/>
<stop offset="0.600057" stop-color="#89CEFF"/>
<stop offset="0.655752" stop-color="#55C9FF"/>
<stop offset="0.722092" stop-color="#78D4FF"/>
<stop offset="0.864106" stop-color="#73C9F1" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint8_angular_918_366" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(122.462 232.987) rotate(-131.802) scale(11.8971 11.6283)">
<stop offset="0.34772" stop-color="#002E4B" stop-opacity="0"/>
<stop offset="0.569" stop-color="#5FC7FF"/>
<stop offset="0.600057" stop-color="#89CEFF"/>
<stop offset="0.655752" stop-color="#55C9FF"/>
<stop offset="0.722092" stop-color="#78D4FF"/>
<stop offset="0.864106" stop-color="#73C9F1" stop-opacity="0"/>
</radialGradient>
<linearGradient id="paint9_linear_918_366" x1="238.823" y1="225.733" x2="238.823" y2="251.999" gradientUnits="userSpaceOnUse">
<stop stop-color="#1E97EE"/>
<stop offset="1" stop-color="#103E54"/>
</linearGradient>
<radialGradient id="paint10_angular_918_366" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(236.226 238.973) rotate(-132.436) scale(10.6158 10.3991)">
<stop offset="0.34772" stop-color="#002E4B" stop-opacity="0"/>
<stop offset="0.569" stop-color="#5FC7FF"/>
<stop offset="0.600057" stop-color="#89CEFF"/>
<stop offset="0.655752" stop-color="#55C9FF"/>
<stop offset="0.722092" stop-color="#78D4FF"/>
<stop offset="0.864106" stop-color="#73C9F1" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint11_angular_918_366" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(235.8 239.054) rotate(-132.436) scale(12.0707 11.8243)">
<stop offset="0.34772" stop-color="#002E4B" stop-opacity="0"/>
<stop offset="0.569" stop-color="#5FC7FF"/>
<stop offset="0.600057" stop-color="#89CEFF"/>
<stop offset="0.655752" stop-color="#55C9FF"/>
<stop offset="0.722092" stop-color="#78D4FF"/>
<stop offset="0.864106" stop-color="#73C9F1" stop-opacity="0"/>
</radialGradient>
<linearGradient id="paint12_linear_918_366" x1="358.823" y1="247.733" x2="358.823" y2="273.999" gradientUnits="userSpaceOnUse">
<stop stop-color="#1E97EE"/>
<stop offset="1" stop-color="#103E54"/>
</linearGradient>
<radialGradient id="paint13_angular_918_366" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(356.226 260.973) rotate(-132.436) scale(10.6158 10.3991)">
<stop offset="0.34772" stop-color="#002E4B" stop-opacity="0"/>
<stop offset="0.569" stop-color="#5FC7FF"/>
<stop offset="0.600057" stop-color="#89CEFF"/>
<stop offset="0.655752" stop-color="#55C9FF"/>
<stop offset="0.722092" stop-color="#78D4FF"/>
<stop offset="0.864106" stop-color="#73C9F1" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint14_angular_918_366" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(355.8 261.054) rotate(-132.436) scale(12.0707 11.8243)">
<stop offset="0.34772" stop-color="#002E4B" stop-opacity="0"/>
<stop offset="0.569" stop-color="#5FC7FF"/>
<stop offset="0.600057" stop-color="#89CEFF"/>
<stop offset="0.655752" stop-color="#55C9FF"/>
<stop offset="0.722092" stop-color="#78D4FF"/>
<stop offset="0.864106" stop-color="#73C9F1" stop-opacity="0"/>
</radialGradient>
</defs>
</svg>

</div>      

       

      <div className="absolute w-[45vw] sm:w-[40vw] h-[35vh] sm:h-[60vh] top-[6vw] sm:top-[5vw] left-[54vw] sm:left-[5vw] rounded-lg shadow-lg overflow-hidden"
        style={{
          background: 'linear-gradient(200deg #008CFF 100%)',
          opacity: '0.8',
          backdropFilter: 'blur(15px)',
          backgroundColor: 'rgba(23, 108, 164, 0.2)',
          border: '2px solid rgba(23, 108, 164, 1)',
        }}>
        <h1 className="text-white text-[5vw] sm:text-[3vw] font-semibold m-1 sm:m-1 ml-1 sm:ml-5">{activeContent.boxTitle}</h1>

        <div className="sm:w-[85%] h-[75%] m-[1vw] bg-gray-300 bg-opacity-20 rounded-md p-[1vw] overflow-y-auto"
            >
          <h2 className="text-white font-medium text-[3vw] sm:text-[1.5vw] mb-[1vw]"> {activeContent.contentDescription}</h2>

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

      <div className='absolute bottom-0 sm:-bottom-[1.5vw] left-0 sm:left-[60vw] '>
<div className="w-92 h-96 relative">
      
      {/* Flag pole */}
      <div className="absolute left-14 top-[14vw] w-2 h-32 bg-gray-400" />
      
      {/* Triangular flag */}
      <div className="absolute left-16 top-[13.6vw]">
        <svg width="100" height="60" viewBox="0 0 120 60">
          <path 
            d="M 0,0 L 120,30 L 0,60 Z" 
            fill="rgba(23, 105, 159,1)" 
          />
        </svg>
      </div>
    </div>
</div>
    </div>
  )
}

export default DBlue
