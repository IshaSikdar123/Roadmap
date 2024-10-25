import React, { useState } from 'react';
import earth6 from '../assets/earth6.png'; 
import road5 from '../assets/road5.svg'; 
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box } from '@chakra-ui/react';


function White() {


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
        <img src={earth6} alt="" className='w-[100vw] z-[50] h-full object-cover' />
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
          <img src={road5} alt="Road" className="w-full filter brightness-100" />
        </button>

        {/*pipe */}

        <div className='absolute -top-[0.1vw] -left-[8.5vw]'>
        <svg width="1300" height="1253" viewBox="0 0 423 377" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_928_532)"> 
<g filter="url(#filter0_i_928_532)">
<path d="M98.9989 -1488C98.9989 -1468.23 637.32 -1261.52 259 -1335C-294.5 -1442.5 259.501 -1256 322.001 -1161C360.51 -1102.47 -62.8067 -984.064 63.2377 -966.5C195.995 -948 629.291 -1132.23 106.999 -766C-18.5005 -678 19.001 -621 250.001 -567.5C446.014 -522.103 425.001 -370.428 307.999 -324C-539.999 12.5002 952.499 -314.5 94.4984 43.5002C-75.3 114.348 586.001 261 323.501 252C133.021 245.469 -108.999 197.5 301.501 441C584.501 567 -338.5 510 236.501 645.5C811.502 781 -379 812 220.501 969C820.002 1126 -435.499 1037 281.001 1272.5" stroke="#0B3238" stroke-opacity="0.6" stroke-width="7.05436"/>
</g>
<g filter="url(#filter1_bi_928_532)">
<ellipse cx="250.568" cy="177.44" rx="13.6317" ry="13.6396" fill="url(#paint0_linear_928_532)" onClick={handleClick1}/>
<path d="M262.107 177.44C262.107 183.818 256.94 188.986 250.568 188.986C244.197 188.986 239.03 183.818 239.03 177.44C239.03 171.062 244.197 165.894 250.568 165.894C256.94 165.894 262.107 171.062 262.107 177.44Z" stroke="url(#paint1_angular_928_532)" stroke-opacity="0.7" stroke-width="4.18625"/>
</g>
<path d="M250.5 193.398C259.271 193.398 266.381 186.284 266.381 177.509C266.381 168.734 259.271 161.619 250.5 161.619C241.729 161.619 234.619 168.734 234.619 177.509C234.619 186.284 241.729 193.398 250.5 193.398Z" stroke="url(#paint2_angular_928_532)" stroke-opacity="0.7" stroke-width="0.761137"/>
<g filter="url(#filter2_bi_928_532)">
<ellipse cx="349.568" cy="220.44" rx="13.6317" ry="13.6396" fill="url(#paint3_linear_928_532)" onClick={handleClick2}/>
<path d="M361.107 220.44C361.107 226.818 355.94 231.986 349.568 231.986C343.197 231.986 338.03 226.818 338.03 220.44C338.03 214.062 343.197 208.894 349.568 208.894C355.94 208.894 361.107 214.062 361.107 220.44Z" stroke="url(#paint4_angular_928_532)" stroke-opacity="0.7" stroke-width="4.18625"/>
</g>
<path d="M349.5 236.398C358.271 236.398 365.381 229.284 365.381 220.509C365.381 211.734 358.271 204.619 349.5 204.619C340.729 204.619 333.619 211.734 333.619 220.509C333.619 229.284 340.729 236.398 349.5 236.398Z" stroke="url(#paint5_angular_928_532)" stroke-opacity="0.7" stroke-width="0.761137"/>
<g filter="url(#filter3_bi_928_532)">
<ellipse cx="266.568" cy="247.44" rx="13.6317" ry="13.6396" fill="url(#paint6_linear_928_532)" onClick={handleClick3}/>
<path d="M278.107 247.44C278.107 253.818 272.94 258.986 266.568 258.986C260.197 258.986 255.03 253.818 255.03 247.44C255.03 241.062 260.197 235.894 266.568 235.894C272.94 235.894 278.107 241.062 278.107 247.44Z" stroke="url(#paint7_angular_928_532)" stroke-opacity="0.7" stroke-width="4.18625"/>
</g>
<path d="M266.5 263.398C275.271 263.398 282.381 256.284 282.381 247.509C282.381 238.734 275.271 231.619 266.5 231.619C257.729 231.619 250.619 238.734 250.619 247.509C250.619 256.284 257.729 263.398 266.5 263.398Z" stroke="url(#paint8_angular_928_532)" stroke-opacity="0.7" stroke-width="0.761137"/>
<g filter="url(#filter4_bi_928_532)">
<ellipse cx="143.568" cy="242.44" rx="13.6317" ry="13.6396" fill="url(#paint9_linear_928_532)" onClick={handleClick4}/>
<path d="M155.107 242.44C155.107 248.818 149.94 253.986 143.568 253.986C137.197 253.986 132.03 248.818 132.03 242.44C132.03 236.062 137.197 230.894 143.568 230.894C149.94 230.894 155.107 236.062 155.107 242.44Z" stroke="url(#paint10_angular_928_532)" stroke-opacity="0.7" stroke-width="4.18625"/>
</g>
<path d="M143.5 258.398C152.271 258.398 159.381 251.284 159.381 242.509C159.381 233.734 152.271 226.619 143.5 226.619C134.729 226.619 127.619 233.734 127.619 242.509C127.619 251.284 134.729 258.398 143.5 258.398Z" stroke="url(#paint11_angular_928_532)" stroke-opacity="0.7" stroke-width="0.761137"/>
<g filter="url(#filter5_bi_928_532)">
<ellipse cx="107.568" cy="311.44" rx="13.6317" ry="13.6396" fill="url(#paint12_linear_928_532)" onClick={handleClick5}/>
<path d="M119.107 311.44C119.107 317.818 113.94 322.986 107.568 322.986C101.197 322.986 96.0297 317.818 96.0297 311.44C96.0297 305.062 101.197 299.894 107.568 299.894C113.94 299.894 119.107 305.062 119.107 311.44Z" stroke="url(#paint13_angular_928_532)" stroke-opacity="0.7" stroke-width="4.18625"/>
</g>
<path d="M107.5 327.398C116.271 327.398 123.381 320.284 123.381 311.509C123.381 302.734 116.271 295.619 107.5 295.619C98.7292 295.619 91.6194 302.734 91.6194 311.509C91.6194 320.284 98.7292 327.398 107.5 327.398Z" stroke="url(#paint14_angular_928_532)" stroke-opacity="0.7" stroke-width="0.761137"/>
</g>
<defs>
<filter id="filter0_i_928_532" x="11.8506" y="-1488.88" width="390.314" height="2764.88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.460067" dy="0.153356"/>
<feGaussianBlur stdDeviation="1.04282"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_928_532"/>
</filter>
<filter id="filter1_bi_928_532" x="232.103" y="158.967" width="36.9301" height="36.9456" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="2.41661"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_928_532"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_928_532" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3.42512" operator="erode" in="SourceAlpha" result="effect2_innerShadow_928_532"/>
<feOffset dy="-0.887993"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_928_532"/>
</filter>
<filter id="filter2_bi_928_532" x="331.103" y="201.967" width="36.9301" height="36.9456" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="2.41661"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_928_532"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_928_532" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3.42512" operator="erode" in="SourceAlpha" result="effect2_innerShadow_928_532"/>
<feOffset dy="-0.887993"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_928_532"/>
</filter>
<filter id="filter3_bi_928_532" x="248.103" y="228.967" width="36.9301" height="36.9456" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="2.41661"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_928_532"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_928_532" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3.42512" operator="erode" in="SourceAlpha" result="effect2_innerShadow_928_532"/>
<feOffset dy="-0.887993"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_928_532"/>
</filter>
<filter id="filter4_bi_928_532" x="125.103" y="223.967" width="36.9301" height="36.9456" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="2.41661"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_928_532"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_928_532" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3.42512" operator="erode" in="SourceAlpha" result="effect2_innerShadow_928_532"/>
<feOffset dy="-0.887993"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_928_532"/>
</filter>
<filter id="filter5_bi_928_532" x="89.1033" y="292.967" width="36.9301" height="36.9456" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="2.41661"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_928_532"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_928_532" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3.42512" operator="erode" in="SourceAlpha" result="effect2_innerShadow_928_532"/>
<feOffset dy="-0.887993"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_928_532"/>
</filter>
<linearGradient id="paint0_linear_928_532" x1="250.568" y1="163.8" x2="250.568" y2="191.08" gradientUnits="userSpaceOnUse">
<stop stop-color="#959587"/>
<stop offset="1" stop-color="#CAC8BF"/>
</linearGradient>
<radialGradient id="paint1_angular_928_532" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(248.012 177.551) rotate(-130.898) scale(10.7649 10.4792)">
<stop offset="0.2" stop-color="#383838" stop-opacity="0"/>
<stop offset="0.47" stop-color="#DCDCDC"/>
<stop offset="0.600057" stop-color="#8C8C8C"/>
<stop offset="0.655752" stop-color="#B4B4B4"/>
<stop offset="0.78" stop-color="#8F8F8F"/>
<stop offset="0.864106" stop-color="#DEDEDE" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint2_angular_928_532" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(247.594 177.635) rotate(-130.898) scale(12.2403 11.9154)">
<stop offset="0.2" stop-color="#383838" stop-opacity="0"/>
<stop offset="0.47" stop-color="#DCDCDC"/>
<stop offset="0.600057" stop-color="#8C8C8C"/>
<stop offset="0.655752" stop-color="#B4B4B4"/>
<stop offset="0.78" stop-color="#8F8F8F"/>
<stop offset="0.864106" stop-color="#DEDEDE" stop-opacity="0"/>
</radialGradient>
<linearGradient id="paint3_linear_928_532" x1="349.568" y1="206.8" x2="349.568" y2="234.08" gradientUnits="userSpaceOnUse">
<stop stop-color="#959587"/>
<stop offset="1" stop-color="#CAC8BF"/>
</linearGradient>
<radialGradient id="paint4_angular_928_532" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(347.012 220.551) rotate(-130.898) scale(10.7649 10.4792)">
<stop offset="0.2" stop-color="#383838" stop-opacity="0"/>
<stop offset="0.47" stop-color="#DCDCDC"/>
<stop offset="0.600057" stop-color="#8C8C8C"/>
<stop offset="0.655752" stop-color="#B4B4B4"/>
<stop offset="0.78" stop-color="#8F8F8F"/>
<stop offset="0.864106" stop-color="#DEDEDE" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint5_angular_928_532" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(346.594 220.635) rotate(-130.898) scale(12.2403 11.9154)">
<stop offset="0.2" stop-color="#383838" stop-opacity="0"/>
<stop offset="0.47" stop-color="#DCDCDC"/>
<stop offset="0.600057" stop-color="#8C8C8C"/>
<stop offset="0.655752" stop-color="#B4B4B4"/>
<stop offset="0.78" stop-color="#8F8F8F"/>
<stop offset="0.864106" stop-color="#DEDEDE" stop-opacity="0"/>
</radialGradient>
<linearGradient id="paint6_linear_928_532" x1="266.568" y1="233.8" x2="266.568" y2="261.08" gradientUnits="userSpaceOnUse">
<stop stop-color="#959587"/>
<stop offset="1" stop-color="#CAC8BF"/>
</linearGradient>
<radialGradient id="paint7_angular_928_532" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(264.012 247.551) rotate(-130.898) scale(10.7649 10.4792)">
<stop offset="0.2" stop-color="#383838" stop-opacity="0"/>
<stop offset="0.47" stop-color="#DCDCDC"/>
<stop offset="0.600057" stop-color="#8C8C8C"/>
<stop offset="0.655752" stop-color="#B4B4B4"/>
<stop offset="0.78" stop-color="#8F8F8F"/>
<stop offset="0.864106" stop-color="#DEDEDE" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint8_angular_928_532" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(263.594 247.635) rotate(-130.898) scale(12.2403 11.9154)">
<stop offset="0.2" stop-color="#383838" stop-opacity="0"/>
<stop offset="0.47" stop-color="#DCDCDC"/>
<stop offset="0.600057" stop-color="#8C8C8C"/>
<stop offset="0.655752" stop-color="#B4B4B4"/>
<stop offset="0.78" stop-color="#8F8F8F"/>
<stop offset="0.864106" stop-color="#DEDEDE" stop-opacity="0"/>
</radialGradient>
<linearGradient id="paint9_linear_928_532" x1="143.568" y1="228.8" x2="143.568" y2="256.08" gradientUnits="userSpaceOnUse">
<stop stop-color="#959587"/>
<stop offset="1" stop-color="#CAC8BF"/>
</linearGradient>
<radialGradient id="paint10_angular_928_532" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(141.012 242.551) rotate(-130.898) scale(10.7649 10.4792)">
<stop offset="0.2" stop-color="#383838" stop-opacity="0"/>
<stop offset="0.47" stop-color="#DCDCDC"/>
<stop offset="0.600057" stop-color="#8C8C8C"/>
<stop offset="0.655752" stop-color="#B4B4B4"/>
<stop offset="0.78" stop-color="#8F8F8F"/>
<stop offset="0.864106" stop-color="#DEDEDE" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint11_angular_928_532" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(140.594 242.635) rotate(-130.898) scale(12.2403 11.9154)">
<stop offset="0.2" stop-color="#383838" stop-opacity="0"/>
<stop offset="0.47" stop-color="#DCDCDC"/>
<stop offset="0.600057" stop-color="#8C8C8C"/>
<stop offset="0.655752" stop-color="#B4B4B4"/>
<stop offset="0.78" stop-color="#8F8F8F"/>
<stop offset="0.864106" stop-color="#DEDEDE" stop-opacity="0"/>
</radialGradient>
<linearGradient id="paint12_linear_928_532" x1="107.568" y1="297.8" x2="107.568" y2="325.08" gradientUnits="userSpaceOnUse">
<stop stop-color="#959587"/>
<stop offset="1" stop-color="#CAC8BF"/>
</linearGradient>
<radialGradient id="paint13_angular_928_532" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(105.012 311.551) rotate(-130.898) scale(10.7649 10.4792)">
<stop offset="0.2" stop-color="#383838" stop-opacity="0"/>
<stop offset="0.47" stop-color="#DCDCDC"/>
<stop offset="0.600057" stop-color="#8C8C8C"/>
<stop offset="0.655752" stop-color="#B4B4B4"/>
<stop offset="0.78" stop-color="#8F8F8F"/>
<stop offset="0.864106" stop-color="#DEDEDE" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint14_angular_928_532" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(104.594 311.635) rotate(-130.898) scale(12.2403 11.9154)">
<stop offset="0.2" stop-color="#383838" stop-opacity="0"/>
<stop offset="0.47" stop-color="#DCDCDC"/>
<stop offset="0.600057" stop-color="#8C8C8C"/>
<stop offset="0.655752" stop-color="#B4B4B4"/>
<stop offset="0.78" stop-color="#8F8F8F"/>
<stop offset="0.864106" stop-color="#DEDEDE" stop-opacity="0"/>
</radialGradient>
<clipPath id="clip0_928_532">
<rect width="427" height="3209" fill="white" transform="translate(0 -1749)"/>
</clipPath>
</defs>
        </svg>
        
        </div>

        


        <div className="absolute w-[45vw] sm:w-[40vw] h-[35vh] sm:h-[60vh] top-[6vw] sm:top-[2vw] left-[54vw] sm:left-[46vw] rounded-lg shadow-lg overflow-hidden"
        style={{
          background: 'linear-gradient(200deg, #34ACAE 0%, #164748 100%)',
          opacity: '0.8',
          backdropFilter: 'blur(15px)',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
        }}>
        <h1 className="text-white text-[5vw] sm:text-[3vw] font-semibold m-1 sm:m-1 ml-1 sm:ml-5">{activeContent.boxTitle}</h1>

        <div className="sm:w-[85%] h-[75%] m-[1vw] bg-black bg-opacity-20 rounded-md p-[1vw] overflow-y-auto">
          <h2 className="text-white font-medium text-[3vw] sm:text-[1.5vw] mb-[1vw]">{activeContent.contentDescription}</h2>

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

export default White