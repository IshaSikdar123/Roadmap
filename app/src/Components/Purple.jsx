import React, { useState } from 'react';
import earth3 from '../assets/earth3.png'; 
import road3 from '../assets/road3.svg';
import pipe2 from '../assets/pipe2.svg'; 
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box } from '@chakra-ui/react';

function Purple() {
  // Define difficulty and buttonLink as per your logic
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
    <div className='relative max-w-screen-2xl h-[110vh] sm:h-[180vh]'>
      <div className='w-full h-full'>
        <img src={earth3} alt="Earth" className='w-[100vw] z-[50] h-full object-cover' />
      </div>

      <div className="absolute top-[30vw] sm:top-[14vw] left-[25vw] sm:left-[22vw] w-[4vw] h-[4vw] rounded-full bg-[#7f2d8f]"
        style={{
          filter: 'brightness(200%) blur(1vw)',
          boxShadow: '0 0 10vw 6vw rgba(127, 45, 143,1)'
        }}>
      </div>

      {/* Road Button */}
      <button 
        className="absolute w-[60vw] sm:w-[30vw] top-[7vw] sm:top-[7vw] -left-[3vw] sm:left-[9vw] z-[50] focus:outline-none transform hover:scale-105 transition-transform duration-300"
      >
        <img src={road3} alt="Road" className="w-full filter brightness-100" />
      </button>

      {/*pipe */}
      <div className="absolute -top-[0.1vw] left-[3.8vw]">
      <svg width="1250" height="1253" viewBox="0 0 427 371" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_902_656)">
<path d="M98.9989 -713C98.9989 -693.231 637.32 -486.523 259 -560C-294.5 -667.5 259.501 -481 322.001 -386C360.51 -327.465 -62.8067 -209.064 63.2377 -191.5C195.995 -173 629.291 -357.231 106.999 9.00024C-18.5005 97.0002 19.001 154 250.001 207.5C446.014 252.897 425.001 404.572 307.999 451C-539.999 787.5 952.499 460.5 94.4984 818.5C-75.3 889.348 586.001 1036 323.501 1027C133.021 1020.47 -108.999 972.5 301.501 1216C584.501 1342 -338.5 1285 236.501 1420.5C811.502 1556 -379 1587 220.501 1744C820.002 1901 -435.499 1812 281.001 2047.5" stroke="#0B3238" stroke-opacity="0.6" stroke-width="7.05436"/>
</g>

<g filter="url(#filter1_bi_902_656)">
<ellipse cx="51.4886" cy="132.422" rx="16.1879" ry="15.3906" fill="url(#paint0_linear_902_656)" onClick={handleClick1} />
<path d="M65.5834 132.422C65.5834 139.668 59.3738 145.719 51.4886 145.719C43.6035 145.719 37.3939 139.668 37.3939 132.422C37.3939 125.176 43.6035 119.124 51.4886 119.124C59.3738 119.124 65.5834 125.176 65.5834 132.422Z" stroke="url(#paint1_angular_902_656)" stroke-opacity="0.7" stroke-width="4.18625"/>
</g>
<path d="M51.4065 150.381C61.764 150.381 70.1936 142.393 70.1936 132.5C70.1936 122.607 61.764 114.619 51.4065 114.619C41.049 114.619 32.6194 122.607 32.6194 132.5C32.6194 142.393 41.049 150.381 51.4065 150.381Z" stroke="url(#paint2_angular_902_656)" stroke-opacity="0.7" stroke-width="0.761137"/>
<g filter="url(#filter2_bi_902_656)">
<ellipse cx="120.489" cy="169.422" rx="16.1879" ry="15.3906" fill="url(#paint3_linear_902_656)" onClick={handleClick2} />
<path d="M134.583 169.422C134.583 176.668 128.374 182.719 120.489 182.719C112.603 182.719 106.394 176.668 106.394 169.422C106.394 162.176 112.603 156.124 120.489 156.124C128.374 156.124 134.583 162.176 134.583 169.422Z" stroke="url(#paint4_angular_902_656)" stroke-opacity="0.7" stroke-width="4.18625"/>
</g>
<path d="M120.406 187.381C130.764 187.381 139.194 179.393 139.194 169.5C139.194 159.607 130.764 151.619 120.406 151.619C110.049 151.619 101.619 159.607 101.619 169.5C101.619 179.393 110.049 187.381 120.406 187.381Z" stroke="url(#paint5_angular_902_656)" stroke-opacity="0.7" stroke-width="0.761137"/>
<g filter="url(#filter3_bi_902_656)">
<ellipse cx="213.489" cy="197.422" rx="16.1879" ry="15.3906" fill="url(#paint6_linear_902_656)" onClick={handleClick3} />
<path d="M227.583 197.422C227.583 204.668 221.374 210.719 213.489 210.719C205.603 210.719 199.394 204.668 199.394 197.422C199.394 190.176 205.603 184.124 213.489 184.124C221.374 184.124 227.583 190.176 227.583 197.422Z" stroke="url(#paint7_angular_902_656)" stroke-opacity="0.7" stroke-width="4.18625"/>
</g>
<path d="M213.406 215.381C223.764 215.381 232.194 207.393 232.194 197.5C232.194 187.607 223.764 179.619 213.406 179.619C203.049 179.619 194.619 187.607 194.619 197.5C194.619 207.393 203.049 215.381 213.406 215.381Z" stroke="url(#paint8_angular_902_656)" stroke-opacity="0.7" stroke-width="0.761137"/>
<g filter="url(#filter4_bi_902_656)">
<ellipse cx="296.489" cy="220.422" rx="16.1879" ry="15.3906" fill="url(#paint9_linear_902_656)"  onClick={handleClick4} />
<path d="M310.583 220.422C310.583 227.668 304.374 233.719 296.489 233.719C288.603 233.719 282.394 227.668 282.394 220.422C282.394 213.176 288.603 207.124 296.489 207.124C304.374 207.124 310.583 213.176 310.583 220.422Z" stroke="url(#paint10_angular_902_656)" stroke-opacity="0.7" stroke-width="4.18625"/>
</g>
<path d="M296.406 238.381C306.764 238.381 315.194 230.393 315.194 220.5C315.194 210.607 306.764 202.619 296.406 202.619C286.049 202.619 277.619 210.607 277.619 220.5C277.619 230.393 286.049 238.381 296.406 238.381Z" stroke="url(#paint11_angular_902_656)" stroke-opacity="0.7" stroke-width="0.761137"/>
<g filter="url(#filter5_bi_902_656)">
<ellipse cx="366.489" cy="264.422" rx="16.1879" ry="15.3906" fill="url(#paint12_linear_902_656)"  onClick={handleClick5} />
<path d="M380.583 264.422C380.583 271.668 374.374 277.719 366.489 277.719C358.603 277.719 352.394 271.668 352.394 264.422C352.394 257.176 358.603 251.124 366.489 251.124C374.374 251.124 380.583 257.176 380.583 264.422Z" stroke="url(#paint13_angular_902_656)" stroke-opacity="0.7" stroke-width="4.18625"/>
</g>
<path d="M366.406 282.381C376.764 282.381 385.194 274.393 385.194 264.5C385.194 254.607 376.764 246.619 366.406 246.619C356.049 246.619 347.619 254.607 347.619 264.5C347.619 274.393 356.049 282.381 366.406 282.381Z" stroke="url(#paint14_angular_902_656)" stroke-opacity="0.7" stroke-width="0.761137"/>

<defs>
<filter id="filter0_i_902_656" x="11.8506" y="-713.879" width="390.314" height="2764.88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.460067" dy="0.153356"/>
<feGaussianBlur stdDeviation="1.04282"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_902_656"/>
</filter>
<filter id="filter1_bi_902_656" x="30.4676" y="112.198" width="42.0424" height="40.4477" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="2.41661"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_902_656"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_902_656" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3.42512" operator="erode" in="SourceAlpha" result="effect2_innerShadow_902_656"/>
<feOffset dy="-0.887993"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_902_656"/>
</filter>
<filter id="filter2_bi_902_656" x="99.4676" y="149.198" width="42.0424" height="40.4477" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="2.41661"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_902_656"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_902_656" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3.42512" operator="erode" in="SourceAlpha" result="effect2_innerShadow_902_656"/>
<feOffset dy="-0.887993"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_902_656"/>
</filter>
<filter id="filter3_bi_902_656" x="192.468" y="177.198" width="42.0424" height="40.4477" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="2.41661"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_902_656"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_902_656" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3.42512" operator="erode" in="SourceAlpha" result="effect2_innerShadow_902_656"/>
<feOffset dy="-0.887993"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_902_656"/>
</filter>
<filter id="filter4_bi_902_656" x="275.468" y="200.198" width="42.0424" height="40.4477" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="2.41661"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_902_656"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_902_656" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3.42512" operator="erode" in="SourceAlpha" result="effect2_innerShadow_902_656"/>
<feOffset dy="-0.887993"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_902_656"/>
</filter>
<filter id="filter5_bi_902_656" x="345.468" y="244.198" width="42.0424" height="40.4477" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="2.41661"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_902_656"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_902_656" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3.42512" operator="erode" in="SourceAlpha" result="effect2_innerShadow_902_656"/>
<feOffset dy="-0.887993"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_902_656"/>
</filter>
<linearGradient id="paint0_linear_902_656" x1="51.4886" y1="117.031" x2="51.4886" y2="147.812" gradientUnits="userSpaceOnUse">
<stop stop-color="#9F56FF"/>
<stop offset="1" stop-color="#3D186E"/>
</linearGradient>
<radialGradient id="paint1_angular_902_656" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(48.4534 132.547) rotate(-132.351) scale(12.4238 12.1669)">
<stop offset="0.34772" stop-color="#3A004B" stop-opacity="0"/>
<stop offset="0.569" stop-color="#9F56FF"/>
<stop offset="0.600057" stop-color="#D1AEFF"/>
<stop offset="0.655752" stop-color="#AC6DFF"/>
<stop offset="0.722092" stop-color="#D2B1FF"/>
<stop offset="0.864106" stop-color="#9F56FF" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint2_angular_902_656" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(47.9553 132.642) rotate(-132.351) scale(14.1265 13.8344)">
<stop offset="0.34772" stop-color="#3A004B" stop-opacity="0"/>
<stop offset="0.569" stop-color="#9F56FF"/>
<stop offset="0.600057" stop-color="#D1AEFF"/>
<stop offset="0.655752" stop-color="#AC6DFF"/>
<stop offset="0.722092" stop-color="#D2B1FF"/>
<stop offset="0.864106" stop-color="#9F56FF" stop-opacity="0"/>
</radialGradient>
<linearGradient id="paint3_linear_902_656" x1="120.489" y1="154.031" x2="120.489" y2="184.812" gradientUnits="userSpaceOnUse">
<stop stop-color="#9F56FF"/>
<stop offset="1" stop-color="#3D186E"/>
</linearGradient>
<radialGradient id="paint4_angular_902_656" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(117.453 169.547) rotate(-132.351) scale(12.4238 12.1669)">
<stop offset="0.34772" stop-color="#3A004B" stop-opacity="0"/>
<stop offset="0.569" stop-color="#9F56FF"/>
<stop offset="0.600057" stop-color="#D1AEFF"/>
<stop offset="0.655752" stop-color="#AC6DFF"/>
<stop offset="0.722092" stop-color="#D2B1FF"/>
<stop offset="0.864106" stop-color="#9F56FF" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint5_angular_902_656" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(116.955 169.642) rotate(-132.351) scale(14.1265 13.8344)">
<stop offset="0.34772" stop-color="#3A004B" stop-opacity="0"/>
<stop offset="0.569" stop-color="#9F56FF"/>
<stop offset="0.600057" stop-color="#D1AEFF"/>
<stop offset="0.655752" stop-color="#AC6DFF"/>
<stop offset="0.722092" stop-color="#D2B1FF"/>
<stop offset="0.864106" stop-color="#9F56FF" stop-opacity="0"/>
</radialGradient>
<linearGradient id="paint6_linear_902_656" x1="213.489" y1="182.031" x2="213.489" y2="212.812" gradientUnits="userSpaceOnUse">
<stop stop-color="#9F56FF"/>
<stop offset="1" stop-color="#3D186E"/>
</linearGradient>
<radialGradient id="paint7_angular_902_656" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(210.453 197.547) rotate(-132.351) scale(12.4238 12.1669)">
<stop offset="0.34772" stop-color="#3A004B" stop-opacity="0"/>
<stop offset="0.569" stop-color="#9F56FF"/>
<stop offset="0.600057" stop-color="#D1AEFF"/>
<stop offset="0.655752" stop-color="#AC6DFF"/>
<stop offset="0.722092" stop-color="#D2B1FF"/>
<stop offset="0.864106" stop-color="#9F56FF" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint8_angular_902_656" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(209.955 197.642) rotate(-132.351) scale(14.1265 13.8344)">
<stop offset="0.34772" stop-color="#3A004B" stop-opacity="0"/>
<stop offset="0.569" stop-color="#9F56FF"/>
<stop offset="0.600057" stop-color="#D1AEFF"/>
<stop offset="0.655752" stop-color="#AC6DFF"/>
<stop offset="0.722092" stop-color="#D2B1FF"/>
<stop offset="0.864106" stop-color="#9F56FF" stop-opacity="0"/>
</radialGradient>
<linearGradient id="paint9_linear_902_656" x1="296.489" y1="205.031" x2="296.489" y2="235.812" gradientUnits="userSpaceOnUse">
<stop stop-color="#9F56FF"/>
<stop offset="1" stop-color="#3D186E"/>
</linearGradient>
<radialGradient id="paint10_angular_902_656" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(293.453 220.547) rotate(-132.351) scale(12.4238 12.1669)">
<stop offset="0.34772" stop-color="#3A004B" stop-opacity="0"/>
<stop offset="0.569" stop-color="#9F56FF"/>
<stop offset="0.600057" stop-color="#D1AEFF"/>
<stop offset="0.655752" stop-color="#AC6DFF"/>
<stop offset="0.722092" stop-color="#D2B1FF"/>
<stop offset="0.864106" stop-color="#9F56FF" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint11_angular_902_656" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(292.955 220.642) rotate(-132.351) scale(14.1265 13.8344)">
<stop offset="0.34772" stop-color="#3A004B" stop-opacity="0"/>
<stop offset="0.569" stop-color="#9F56FF"/>
<stop offset="0.600057" stop-color="#D1AEFF"/>
<stop offset="0.655752" stop-color="#AC6DFF"/>
<stop offset="0.722092" stop-color="#D2B1FF"/>
<stop offset="0.864106" stop-color="#9F56FF" stop-opacity="0"/>
</radialGradient>
<linearGradient id="paint12_linear_902_656" x1="366.489" y1="249.031" x2="366.489" y2="279.812" gradientUnits="userSpaceOnUse">
<stop stop-color="#9F56FF"/>
<stop offset="1" stop-color="#3D186E"/>
</linearGradient>
<radialGradient id="paint13_angular_902_656" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(363.453 264.547) rotate(-132.351) scale(12.4238 12.1669)">
<stop offset="0.34772" stop-color="#3A004B" stop-opacity="0"/>
<stop offset="0.569" stop-color="#9F56FF"/>
<stop offset="0.600057" stop-color="#D1AEFF"/>
<stop offset="0.655752" stop-color="#AC6DFF"/>
<stop offset="0.722092" stop-color="#D2B1FF"/>
<stop offset="0.864106" stop-color="#9F56FF" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint14_angular_902_656" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(362.955 264.642) rotate(-132.351) scale(14.1265 13.8344)">
<stop offset="0.34772" stop-color="#3A004B" stop-opacity="0"/>
<stop offset="0.569" stop-color="#9F56FF"/>
<stop offset="0.600057" stop-color="#D1AEFF"/>
<stop offset="0.655752" stop-color="#AC6DFF"/>
<stop offset="0.722092" stop-color="#D2B1FF"/>
<stop offset="0.864106" stop-color="#9F56FF" stop-opacity="0"/>
</radialGradient>
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
    </div>
  )
}

export default Purple;
