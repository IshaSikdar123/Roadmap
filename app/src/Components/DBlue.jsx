import React, { useState } from 'react';
import earth5 from '../assets/earth5.png';
import road4 from '../assets/road4.svg';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box } from '@chakra-ui/react';


function DBlue({ position }) {

  // State for tracking active content
  const [activeContent, setActiveContent] = useState({
    boxTitle: "PYTHON",
    difficulty: 'basics',
    buttonLink: 'https://example.com',
    contentDescription: "Click a circle to view content"
  });



  // Define content for each circle
  const circleContent = {
    circle1: {
      boxTitle: "BASICS",
      difficulty: 'basics',
      links: [
        "https://www.wikipedia.org/",
        "https://www.khanacademy.org/",
        "https://www.britannica.com/",
        "https://www.howstuffworks.com/",
        "https://www.sparknotes.com/"
      ],
      description: "Learn fundamentals and basic operations"
    },
    circle2: {
      boxTitle: "INTERMEDIATE",
      difficulty: 'medium',
      links: [
        "https://www.github.com/",
        "https://www.freecodecamp.org/",
        "https://www.hackerrank.com/",
        "https://www.coursera.org/",
        "https://www.udemy.com/"
      ],
      description: "Explore advanced features and formulas"
    },
    circle3: {
      boxTitle: "ADVANCED",
      difficulty: 'hard',
      links: [
        "https://www.leetcode.com/",
        "https://www.topcoder.com/",
        "https://www.codewars.com/",
        "https://projecteuler.net/",
        "https://www.codeforces.com/"
      ],
      description: "Master complex functions and macros"
    },
    circle4: {
      boxTitle: "QUIZ",
      difficulty: 'quiz',
      links: [
        "https://www.quizlet.com/",
        "https://www.sporcle.com/",
        "https://www.kahoot.com/",
        "https://www.trivia.com/",
        "https://www.funtrivia.com/"
      ],
      description: "Test your knowledge"
    },
    circle5: {
      boxTitle: "RESOURCES",
      difficulty: 'resources',
      links: [
        "https://www.stackoverflow.com/",
        "https://www.medium.com/",
        "https://www.codecademy.com/",
        "https://www.reddit.com/r/learnprogramming/",
        "https://developer.mozilla.org/"
      ],
      description: "Additional learning resources"
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

  const svgs = {
    1:   <svg width="100%" height="100%" viewBox="0 -66 416 387" fill="none" preserveAspectRatio='none' xmlns="http://www.w3.org/2000/svg" 
    >

<g filter="url(#filter0_i_880_558)"> 
<path d="M98.9984 14.0002C98.9984 33.7686 637.32 240.477 258.999 167C-294.501 59.5002 259.501 246 322.001 341C360.51 399.535 -62.8072 517.936 63.2372 535.5C195.995 554 629.29 369.769 106.998 736C-18.501 824 19.0005 881 250.001 934.5C446.014 979.897 425 1131.57 307.999 1178C-540 1514.5 952.499 1187.5 94.4979 1545.5C-75.3004 1616.35 586.001 1763 323.501 1754C133.02 1747.47 -109 1699.5 301.5 1943C584.5 2069 -338.501 2012 236.5 2147.5C811.502 2283 -379.001 2314 220.5 2471C820.002 2628 -435.5 2539 281 2774.5" stroke="#0B3238" stroke-opacity="0.6" stroke-width="7.05436"/>
</g>  
<g filter="url(#filter1_bi_880_558)">
<circle cx="340.27" cy="139.145" r="12.4953" fill="url(#paint0_linear_918_366)" fill-opacity="1" onClick={handleClick1}/>
<circle cx="340.27" cy="139.145" r="10.4022" stroke="url(#paint0_linear_918_366)" stroke-opacity="0.7" stroke-width="4.18625"/>
</g>
<circle cx="340.207" cy="139.208" r="14.5885" stroke="url(#paint1_angular_880_558)" stroke-opacity="0.7" stroke-width="0.761137"/>
<g filter="url(#filter2_bi_880_558)">
<circle cx="54.2702" cy="173.111" r="12.4953" fill="url(#paint0_linear_918_366)" fill-opacity="1" onClick={handleClick2}/>
<circle cx="54.2702" cy="173.111" r="10.4022" stroke="url(#paint2_angular_880_558)" stroke-opacity="0.7" stroke-width="4.18625"/>
</g>
<circle cx="54.2069" cy="173.175" r="14.5885" stroke="url(#paint3_angular_880_558)" stroke-opacity="0.7" stroke-width="0.761137"/>
<g filter="url(#filter3_bi_880_558)">
<circle cx="261.61" cy="169.144" r="12.4953" fill="url(#paint0_linear_918_366)" fill-opacity="1" onClick={handleClick3}/>
<circle cx="261.61" cy="169.144" r="10.4022" stroke="url(#paint4_angular_880_558)" stroke-opacity="0.7" stroke-width="4.18625"/>
</g>
<circle cx="261.547" cy="169.208" r="14.5885" stroke="url(#paint5_angular_880_558)" stroke-opacity="0.7" stroke-width="0.761137"/>
<g filter="url(#filter4_bi_880_558)">
<circle cx="252.311" cy="92.4953" r="12.4953" fill="url(#paint0_linear_918_366)" fill-opacity="1" onClick={handleClick4}/>
<circle cx="252.311" cy="92.4953" r="10.4022" stroke="url(#paint6_angular_880_558)" stroke-opacity="0.7" stroke-width="4.18625"/>
</g>
<circle cx="252.207" cy="92.2078" r="14.5885" stroke="url(#paint7_angular_880_558)" stroke-opacity="0.7" stroke-width="0.761137"/>
<g filter="url(#filter5_bi_880_558)">
<circle cx="158.272" cy="149.144" r="12.4953" fill="url(#paint0_linear_918_366)" fill-opacity="1" onClick={handleClick5}/>
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
</svg>, 
    2:  <svg width="100%" height="100%" viewBox="0 0 416 374" preserveAspectRatio='none' fill="none" xmlns="http://www.w3.org/2000/svg"  
    // style={{ clipPath: 'inset(18% 0 22% 0)' }} 
    >
    <g filter="url(#filter0_i_894_683)"> <path d="M98.9984 -307C98.9984 -287.231 637.32 -80.5228 258.999 -154C-294.501 -261.5 259.501 -74.9998 322.001 20.0002C360.51 78.5349 -62.8072 196.936 63.2372 214.5C195.995 233 629.29 48.7693 106.998 415C-18.501 503 19.0005 560 250.001 613.5C446.014 658.897 425 810.572 307.999 857C-540 1193.5 952.499 866.5 94.4979 1224.5C-75.3004 1295.35 586.001 1442 323.501 1433C133.02 1426.47 -109 1378.5 301.5 1622C584.5 1748 -338.501 1691 236.5 1826.5C811.502 1962 -379.001 1993 220.5 2150C820.002 2307 -435.5 2218 281 2453.5" stroke="#0B3238" stroke-opacity="0.6" stroke-width="7.05436"/>
     </g>
      <g filter="url(#filter0_i_894_683)">
        <path d="M98.9984 -307C98.9984..." stroke="#0B3238" strokeOpacity="0.6" strokeWidth="7.05436" />
      </g>

      {/* Circle Elements with Click Events */}
      <g filter="url(#filter1_bi_894_683)">
        <circle cx="135.271" cy="144.144" r="12.4953" fill="url(#paint0_linear_918_366)" onClick={handleClick1} />
        <circle cx="135.271" cy="144.144" r="10.4022" stroke="url(#paint0_linear_918_366)" strokeOpacity="0.7" strokeWidth="4.18625" />
      </g>

      <g filter="url(#filter2_bi_894_683)">
        <circle cx="75.2715" cy="210.399" r="12.4953" fill="url(#paint0_linear_918_366)" onClick={handleClick2} />
        <circle cx="75.2715" cy="210.399" r="10.4022" stroke="url(#paint0_linear_918_366)" strokeOpacity="0.7" strokeWidth="4.18625" />
      </g>

      <g filter="url(#filter3_bi_894_683)">
        <circle cx="185.271" cy="199.144" r="12.4953" fill="url(#paint0_linear_918_366)" onClick={handleClick3} />
        <circle cx="185.271" cy="199.144" r="10.4022" stroke="url(#paint0_linear_918_366)" strokeOpacity="0.7" strokeWidth="4.18625" />
      </g>

      <g filter="url(#filter4_bi_894_683)">
        <circle cx="312.006" cy="254.272" r="12.4953" fill="url(#paint0_linear_918_366)" onClick={handleClick4} />
        <circle cx="312.006" cy="254.272" r="10.4022" stroke="url(#paint0_linear_918_366)" strokeOpacity="0.7" strokeWidth="4.18625" />
      </g>

      <g filter="url(#filter5_bi_894_683)">
        <circle cx="287.006" cy="184.399" r="12.4953" fill="url(#paint0_linear_918_366)" onClick={handleClick5} />
        <circle cx="287.006" cy="184.399" r="10.4022" stroke="url(#paint0_linear_918_366)" strokeOpacity="0.7" strokeWidth="4.18625" />
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
    </svg>,
    3:        <svg width="100%" height="100%" viewBox="-45 0 416 374" preserveAspectRatio='none' fill="none" xmlns="http://www.w3.org/2000/svg"
    >
<g filter="url(#filter0_i_902_656)">
<path d="M98.9989 -713C98.9989 -693.231 637.32 -486.523 259 -560C-294.5 -667.5 259.501 -481 322.001 -386C360.51 -327.465 -62.8067 -209.064 63.2377 -191.5C195.995 -173 629.291 -357.231 106.999 9.00024C-18.5005 97.0002 19.001 154 250.001 207.5C446.014 252.897 425.001 404.572 307.999 461C-539.999 787.5 952.499 460.5 94.4984 818.5C-75.3 889.348 586.001 1036 323.501 1027C133.021 1020.47 -108.999 972.5 301.501 1216C584.501 1342 -338.5 1285 236.501 1420.5C811.502 1556 -379 1587 220.501 1744C820.002 1901 -435.499 1812 281.001 2047.5" stroke="#0B3238" stroke-opacity="0.6" stroke-width="7.05436"/>
</g>

<g filter="url(#filter1_bi_902_656)">
<ellipse cx="51.4886" cy="132.422" rx="16.1879" ry="15.3906" fill="url(#paint0_linear_918_366)" onClick={handleClick1} />
<path d="M65.5834 132.422C65.5834 139.668 59.3738 145.719 51.4886 145.719C43.6035 145.719 37.3939 139.668 37.3939 132.422C37.3939 125.176 43.6035 119.124 51.4886 119.124C59.3738 119.124 65.5834 125.176 65.5834 132.422Z" stroke="url(#paint0_linear_918_366)" stroke-opacity="0.7" stroke-width="4.18625"/>
</g>
<path d="M51.4065 150.381C61.764 150.381 70.1936 142.393 70.1936 132.5C70.1936 122.607 61.764 114.619 51.4065 114.619C41.049 114.619 32.6194 122.607 32.6194 132.5C32.6194 142.393 41.049 150.381 51.4065 150.381Z" stroke="url(#paint2_angular_902_656)" stroke-opacity="0.7" stroke-width="0.761137"/>
<g filter="url(#filter2_bi_902_656)">
<ellipse cx="120.489" cy="169.422" rx="16.1879" ry="15.3906" fill="url(#paint0_linear_918_366)" onClick={handleClick2} />
<path d="M134.583 169.422C134.583 176.668 128.374 182.719 120.489 182.719C112.603 182.719 106.394 176.668 106.394 169.422C106.394 162.176 112.603 156.124 120.489 156.124C128.374 156.124 134.583 162.176 134.583 169.422Z" stroke="url(#paint0_linear_918_366)" stroke-opacity="0.7" stroke-width="4.18625"/>
</g>
<path d="M120.406 187.381C130.764 187.381 139.194 179.393 139.194 169.5C139.194 159.607 130.764 151.619 120.406 151.619C110.049 151.619 101.619 159.607 101.619 169.5C101.619 179.393 110.049 187.381 120.406 187.381Z" stroke="url(#paint5_angular_902_656)" stroke-opacity="0.7" stroke-width="0.761137"/>
<g filter="url(#filter3_bi_902_656)">
<ellipse cx="213.489" cy="197.422" rx="16.1879" ry="15.3906" fill="url(#paint0_linear_918_366)" onClick={handleClick3} />
<path d="M227.583 197.422C227.583 204.668 221.374 210.719 213.489 210.719C205.603 210.719 199.394 204.668 199.394 197.422C199.394 190.176 205.603 184.124 213.489 184.124C221.374 184.124 227.583 190.176 227.583 197.422Z" stroke="url(#paint0_linear_918_366)" stroke-opacity="0.7" stroke-width="4.18625"/>
</g>
<path d="M213.406 215.381C223.764 215.381 232.194 207.393 232.194 197.5C232.194 187.607 223.764 179.619 213.406 179.619C203.049 179.619 194.619 187.607 194.619 197.5C194.619 207.393 203.049 215.381 213.406 215.381Z" stroke="url(#paint8_angular_902_656)" stroke-opacity="0.7" stroke-width="0.761137"/>
<g filter="url(#filter4_bi_902_656)">
<ellipse cx="296.489" cy="220.422" rx="16.1879" ry="15.3906" fill="url(#paint0_linear_918_366)"  onClick={handleClick4} />
<path d="M310.583 220.422C310.583 227.668 304.374 233.719 296.489 233.719C288.603 233.719 282.394 227.668 282.394 220.422C282.394 213.176 288.603 207.124 296.489 207.124C304.374 207.124 310.583 213.176 310.583 220.422Z" stroke="url(#paint0_linear_918_366)" stroke-opacity="0.7" stroke-width="4.18625"/>
</g>
<path d="M296.406 238.381C306.764 238.381 315.194 230.393 315.194 220.5C315.194 210.607 306.764 202.619 296.406 202.619C286.049 202.619 277.619 210.607 277.619 220.5C277.619 230.393 286.049 238.381 296.406 238.381Z" stroke="url(#paint11_angular_902_656)" stroke-opacity="0.7" stroke-width="0.761137"/>
<g filter="url(#filter5_bi_902_656)">
<ellipse cx="366.489" cy="264.422" rx="16.1879" ry="15.3906" fill="url(#paint0_linear_918_366)"  onClick={handleClick5} />
<path d="M380.583 264.422C380.583 271.668 374.374 277.719 366.489 277.719C358.603 277.719 352.394 271.668 352.394 264.422C352.394 257.176 358.603 251.124 366.489 251.124C374.374 251.124 380.583 257.176 380.583 264.422Z" stroke="url(#paint0_linear_918_366)" stroke-opacity="0.7" stroke-width="4.18625"/>
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
</svg>,
    4:   <svg width="100%" height="100%" viewBox="-40 28.8 416 374" preserveAspectRatio='none' fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_i_918_366)">
    <path d="M98.9989 -1098C98.9989 -1078.23 637.32 -871.523 259 -945C-294.5 -1052.5 259.501 -866 322.001 -771C360.51 -712.465 -62.8067 -594.064 63.2377 -576.5C195.995 -558 629.291 -742.231 106.999 -376C-18.5005 -288 19.001 -231 250.001 -177.5C776.014 -132.103 419.502 15.5717 325.5 62C-545.498 398.5 932.499 75.5002 94.4984 433.5C-75.3 504.348 586.001 651 323.501 642C133.021 635.469 -108.999 587.5 301.501 831C584.501 957 -338.5 900 236.501 1035.5C811.502 1171 -379 1202 220.501 1359C820.002 1516 -435.499 1427 281.001 1662.5" stroke="#0B3238" stroke-opacity="0.6" stroke-width="7.05436"/>
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
    </svg>,
    5:         <svg width="100%" height="100%" viewBox="-10 0 416 374" preserveAspectRatio='none' fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_928_532)"> 
    <g filter="url(#filter0_i_928_532)">
    <path d="M98.9989 -1488C98.9989 -1468.23 637.32 -1261.52 259 -1335C-294.5 -1442.5 259.501 -1256 322.001 -1161C360.51 -1102.47 -62.8067 -984.064 63.2377 -966.5C195.995 -948 629.291 -1132.23 106.999 -766C-18.5005 -678 19.001 -621 250.001 -567.5C446.014 -522.103 425.001 -370.428 307.999 -324C-539.999 12.5002 952.499 -314.5 94.4984 43.5002C-75.3 114.348 586.001 261 323.501 252C133.021 245.469 -108.999 197.5 301.501 441C584.501 567 -338.5 510 236.501 645.5C811.502 781 -379 812 220.501 969C820.002 1126 -435.499 1037 281.001 1272.5" stroke="#0B3238" stroke-opacity="0.6" stroke-width="7.05436"/>
    </g>
    <g filter="url(#filter1_bi_928_532)">
    <ellipse cx="250.568" cy="177.44" rx="13.6317" ry="13.6396" fill="url(#paint0_linear_918_366)" onClick={handleClick1}/>
    <path d="M262.107 177.44C262.107 183.818 256.94 188.986 250.568 188.986C244.197 188.986 239.03 183.818 239.03 177.44C239.03 171.062 244.197 165.894 250.568 165.894C256.94 165.894 262.107 171.062 262.107 177.44Z" stroke="url(#paint0_linear_918_366)" stroke-opacity="0.7" stroke-width="4.18625"/>
    </g>
    <path d="M250.5 193.398C259.271 193.398 266.381 186.284 266.381 177.509C266.381 168.734 259.271 161.619 250.5 161.619C241.729 161.619 234.619 168.734 234.619 177.509C234.619 186.284 241.729 193.398 250.5 193.398Z" stroke="url(#paint2_angular_928_532)" stroke-opacity="0.7" stroke-width="0.761137"/>
    <g filter="url(#filter2_bi_928_532)">
    <ellipse cx="349.568" cy="220.44" rx="13.6317" ry="13.6396" fill="url(#paint0_linear_918_366)" onClick={handleClick2}/>
    <path d="M361.107 220.44C361.107 226.818 355.94 231.986 349.568 231.986C343.197 231.986 338.03 226.818 338.03 220.44C338.03 214.062 343.197 208.894 349.568 208.894C355.94 208.894 361.107 214.062 361.107 220.44Z" stroke="url(#paint0_linear_918_366)" stroke-opacity="0.7" stroke-width="4.18625"/>
    </g>
    <path d="M349.5 236.398C358.271 236.398 365.381 229.284 365.381 220.509C365.381 211.734 358.271 204.619 349.5 204.619C340.729 204.619 333.619 211.734 333.619 220.509C333.619 229.284 340.729 236.398 349.5 236.398Z" stroke="url(#paint5_angular_928_532)" stroke-opacity="0.7" stroke-width="0.761137"/>
    <g filter="url(#filter3_bi_928_532)">
    <ellipse cx="266.568" cy="247.44" rx="13.6317" ry="13.6396" fill="url(#paint0_linear_918_366)" onClick={handleClick3}/>
    <path d="M278.107 247.44C278.107 253.818 272.94 258.986 266.568 258.986C260.197 258.986 255.03 253.818 255.03 247.44C255.03 241.062 260.197 235.894 266.568 235.894C272.94 235.894 278.107 241.062 278.107 247.44Z" stroke="url(#paint0_linear_918_366)" stroke-opacity="0.7" stroke-width="4.18625"/>
    </g>
    <path d="M266.5 263.398C275.271 263.398 282.381 256.284 282.381 247.509C282.381 238.734 275.271 231.619 266.5 231.619C257.729 231.619 250.619 238.734 250.619 247.509C250.619 256.284 257.729 263.398 266.5 263.398Z" stroke="url(#paint8_angular_928_532)" stroke-opacity="0.7" stroke-width="0.761137"/>
    <g filter="url(#filter4_bi_928_532)">
    <ellipse cx="143.568" cy="242.44" rx="13.6317" ry="13.6396" fill="url(#paint0_linear_918_366)" onClick={handleClick4}/>
    <path d="M155.107 242.44C155.107 248.818 149.94 253.986 143.568 253.986C137.197 253.986 132.03 248.818 132.03 242.44C132.03 236.062 137.197 230.894 143.568 230.894C149.94 230.894 155.107 236.062 155.107 242.44Z" stroke="url(#paint0_linear_918_366)" stroke-opacity="0.7" stroke-width="4.18625"/>
    </g>
    <path d="M143.5 258.398C152.271 258.398 159.381 251.284 159.381 242.509C159.381 233.734 152.271 226.619 143.5 226.619C134.729 226.619 127.619 233.734 127.619 242.509C127.619 251.284 134.729 258.398 143.5 258.398Z" stroke="url(#paint11_angular_928_532)" stroke-opacity="0.7" stroke-width="0.761137"/>
    <g filter="url(#filter5_bi_928_532)">
    <ellipse cx="107.568" cy="311.44" rx="13.6317" ry="13.6396" fill="url(#paint0_linear_918_366)" onClick={handleClick5}/>
    <path d="M119.107 311.44C119.107 317.818 113.94 322.986 107.568 322.986C101.197 322.986 96.0297 317.818 96.0297 311.44C96.0297 305.062 101.197 299.894 107.568 299.894C113.94 299.894 119.107 305.062 119.107 311.44Z" stroke="url(#paint0_linear_918_366)" stroke-opacity="0.7" stroke-width="4.18625"/>
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
            </svg>,
    6: <svg width="100%" height="100%" viewBox="22 15 416 374" preserveAspectRatio='none' fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_934_1202)">
        
    <g filter="url(#filter0_i_934_1202)" >
    <path d="M90.9983 -1940C90.9983 -1920.23 629.32 -1713.52 250.999 -1787C-302.501 -1894.5 251.501 -1708 314 -1613C352.51 -1554.47 -70.8073 -1436.06 55.2371 -1418.5C187.995 -1400 621.29 -1584.23 98.9982 -1218C-26.501 -1130 11.0004 -1073 242 -1019.5C438.013 -974.103 417 -822.428 299.998 -776C-548 -439.5 944.499 -766.5 86.4978 -408.5C-83.3005 -337.652 578 -191 315.5 -200C125.02 -206.531 -229.5 -252.5 181 -9C464 117 -340.001 53.5 235 189C810.001 324.5 -358.002 355.5 241.499 512.5C841.001 669.5 -443.5 585 273 820.5" stroke="#0B3238" stroke-opacity="0.6" stroke-width="7.05436"/>
    </g>
    <g filter="url(#filter1_bi_934_1202)" onClick={handleClick5} >
    <circle cx="278.271" cy="326.145" r="12.4953" fill="url(#paint0_linear_918_366)"/>
    <circle cx="278.271" cy="326.145" r="10.4022" stroke="url(#paint0_linear_918_366)" stroke-opacity="0.7" stroke-width="4.18625"/>
    </g>
    <circle cx="278.208" cy="326.208" r="14.5885" stroke="url(#paint2_angular_934_1202)" stroke-opacity="0.7" stroke-width="0.761137"/>
    <g filter="url(#filter2_bi_934_1202)" onClick={handleClick1}>
    <circle cx="131.271" cy="160.145" r="12.4953" fill="url(#paint0_linear_918_366)"/>
    <circle cx="131.271" cy="160.145" r="10.4022" stroke="url(#paint0_linear_918_366)" stroke-opacity="0.7" stroke-width="4.18625"/>
    </g>
    <circle cx="131.208" cy="160.208" r="14.5885" stroke="url(#paint5_angular_934_1202)" stroke-opacity="0.7" stroke-width="0.761137"/>
    <g filter="url(#filter3_bi_934_1202)" onClick={handleClick2} >
    <circle cx="229.271" cy="186.145" r="12.4953" fill="url(#paint0_linear_918_366)"/>
    <circle cx="229.271" cy="186.145" r="10.4022" stroke="url(#paint0_linear_918_366)" stroke-opacity="0.7" stroke-width="4.18625"/>
    </g>
    <circle cx="229.208" cy="186.208" r="14.5885" stroke="url(#paint8_angular_934_1202)" stroke-opacity="0.7" stroke-width="0.761137"/>
    <g filter="url(#filter4_bi_934_1202)" onClick={handleClick3}>
    <circle cx="339.271" cy="217.145" r="12.4953" fill="url(#paint0_linear_918_366)"/>
    <circle cx="339.271" cy="217.145" r="10.4022" stroke="url(#paint0_linear_918_366)" stroke-opacity="0.7" stroke-width="4.18625"/>
    </g>
    <circle cx="339.208" cy="217.208" r="14.5885" stroke="url(#paint11_angular_934_1202)" stroke-opacity="0.7" stroke-width="0.761137"/>
    <g filter="url(#filter5_bi_934_1202)"onClick={handleClick4} >
    <circle cx="376.271" cy="285.145" r="12.4953" fill="url(#paint0_linear_918_366)"/>
    <circle cx="376.271" cy="285.145" r="10.4022" stroke="url(#paint0_linear_918_366)" stroke-opacity="0.7" stroke-width="4.18625"/>
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
    </svg>,
    7:     <svg width="100%" height="100%" viewBox="10 -45 416 374" preserveAspectRatio='none' fill="none" xmlns="http://www.w3.org/2000/svg" 
    >
<g clip-path="url(#clip0_934_947)">
<g filter="url(#filter0_i_934_947)">
<path d="M98.9989 -2403C98.9989 -2383.23 637.32 -2176.52 259 -2250C-294.5 -2357.5 259.501 -2171 322.001 -2076C360.51 -2017.47 -62.8067 -1899.06 63.2377 -1881.5C195.995 -1863 629.291 -2047.23 106.999 -1681C-18.5005 -1593 19.001 -1536 250.001 -1482.5C446.014 -1437.1 425.001 -1285.43 307.999 -1239C-539.999 -902.5 952.499 -1229.5 94.4984 -871.5C-75.3 -800.652 586.001 -654 323.501 -663C133.021 -669.531 -108.999 -717.5 301.501 -474C584.501 -348 -338.5 -405 236.501 -269.5C811.502 -134 -379 -44 220.501 54.0002C820.002 211 -435.499 122 281.001 357.5" stroke="#0B3238" stroke-opacity="0.6" stroke-width="7.05436"/>
</g>
<g filter="url(#filter1_bi_934_947)"onClick={handleClick2}>
<circle cx="170.271" cy="183.145" r="12.4953" fill="url(#paint0_linear_918_366)"/>
<circle cx="170.271" cy="183.145" r="10.4022" stroke="url(#paint0_linear_918_366)" stroke-opacity="0.7" stroke-width="4.18625"/>
</g>
<circle cx="170.208" cy="183.208" r="14.5885" stroke="url(#paint2_angular_934_947)" stroke-opacity="0.7" stroke-width="0.761137"/>
<g filter="url(#filter2_bi_934_947)"  onClick={handleClick1}>
<circle cx="252.271" cy="169.145" r="12.4953" fill="url(#paint0_linear_918_366)"/>
<circle cx="252.271" cy="169.145" r="10.4022" stroke="url(#paint0_linear_918_366)" stroke-opacity="0.7" stroke-width="4.18625"/>
</g>
<circle cx="252.208" cy="169.208" r="14.5885" stroke="url(#paint5_angular_934_947)" stroke-opacity="0.7" stroke-width="0.761137"/>
<g filter="url(#filter3_bi_934_947)"  onClick={handleClick3}>
<circle cx="79.2707" cy="210.145" r="12.4953" fill="url(#paint0_linear_918_366)"/>
<circle cx="79.2707" cy="210.145" r="10.4022" stroke="url(#paint0_linear_918_366)" stroke-opacity="0.7" stroke-width="4.18625"/>
</g>
<circle cx="79.2079" cy="210.208" r="14.5885" stroke="url(#paint8_angular_934_947)" stroke-opacity="0.7" stroke-width="0.761137"/>
<g filter="url(#filter4_bi_934_947)"  onClick={handleClick5}>
<circle cx="169.271" cy="315.145" r="12.4953" fill="url(#paint0_linear_918_366)"/>
<circle cx="169.271" cy="315.145" r="10.4022" stroke="url(#paint0_linear_918_366)" stroke-opacity="0.7" stroke-width="4.18625"/>
</g>
<circle cx="169.208" cy="315.208" r="14.5885" stroke="url(#paint11_angular_934_947)" stroke-opacity="0.7" stroke-width="0.761137"/>
<g filter="url(#filter5_bi_934_947)"  onClick={handleClick4}>
<circle cx="92.2707" cy="278.145" r="12.4953" fill="url(#paint0_linear_918_366)"/>
<circle cx="92.2707" cy="278.145" r="10.4022" stroke="url(#paint0_linear_918_366)" stroke-opacity="0.7" stroke-width="4.18625"/>
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
  };

  return (
    <div className='relative w-full h-screen sm:h-[180vh]'>
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
 
  <div className='absolute inset-0 w-full h-full'>
          {svgs[position]}

</div>      

       

      <div className="absolute w-[45vw] sm:w-[40vw] h-[35vh] sm:h-[60vh] top-[6vw] sm:top-[5vw] left-[54vw] sm:left-[5vw] rounded-lg shadow-lg overflow-hidden"
        style={{
          background: 'linear-gradient(200deg #008CFF 100%)',
          opacity: '0.8',
          backdropFilter: 'blur(15px)',
          backgroundColor: 'rgba(23, 108, 164, 0.2)',
          border: '2px solid rgba(23, 108, 164, 1)',
        }}>
        <h1 className="text-white text-[5vw] sm:text-[3vw] font-semibold m-1 sm:m-1 ml-1 sm:ml-2.5">{activeContent.boxTitle}</h1>

        <div className="sm:w-[36vw] h-[48vh] m-[1vw] bg-gray-300 bg-opacity-20 rounded-md p-[1vw] overflow-y-auto"
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
                  className="hidden sm:block absolute w-[2vw] sm:w-[5.5vw] left-[20vw] sm:left-[26vw] -top-[1.1vw] sm:-top-[1.1vw] mt-[1vw] mr-[1vw] bg-black z-40 text-white p-[0.5vw] rounded-lg hover:bg-[#2628ae] transition"
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

export default DBlue
