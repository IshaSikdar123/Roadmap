// import React from 'react';
// import earth from '../assets/earth.png'; 
// import ring from '../assets/ring.png';
// import road from '../assets/road.svg'; 
// import pipe from '../assets/pipe.svg';
// import btn from '../assets/btn.svg';
// import icon from '../assets/icon.png';
// import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, ChakraProvider } from '@chakra-ui/react'; // Import Chakra UI components


// function Blue() {
//   return (
//     <ChakraProvider>
//       <div className="relative w-full h-[110vh] sm:h-[180vh]">
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
//           className="absolute w-[60vw] sm:w-[30vw] top-[7vw] sm:top-[4vw] -left-[3vw] sm:left-[9vw] focus:outline-none transform hover:scale-105 transition-transform duration-300"
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
//           <h1 className="text-white text-[5vw] sm:text-[3vw] font-semibold m-1 sm:m-1 ml-1 sm:ml-5 ">EXCEL</h1>

//           <div className=" sm:w-[85%] h-[75%] m-[1vw] bg-black bg-opacity-20 rounded-md p-[1vw] overflow-y-auto">
//             <h2 className=" text-white font-medium text-[3vw] sm:text-[1.5vw] mb-[1vw]">This Course includes</h2>
           
//             <Accordion allowToggle>
//               {Array.from({ length: 10 }).map((_, index) => (
//                 <AccordionItem
//                   key={index} 
//                   className=" relative w-[35vw] sm:w-[25vw] top-1 mb-[1vw] rounded-lg bg-gray-900 border border-gray-700"
//                 >
//                   <h3>
//                     <AccordionButton className="p-[0.5vw] bg-gray-800 rounded-t-lg">
//                       <Box flex="1" textAlign="left" className="font-medium text-white text-[2.5vw] sm:text-[1vw]">
//                         Level-{index + 1} basics
//                       </Box>
//                       <AccordionIcon color="white" />
//                     </AccordionButton>
//                   </h3>
//                   <AccordionPanel className="p-[0.5vw] text-white text-[1vw] sm:text-[1vw]">
//                     This is the content of Accordion Section {index + 1}. Content goes here and may exceed the defined height to test scrolling inside the panel.
//                   </AccordionPanel>
//                   <button
//             className="hidden sm:block absolute w-[2vw] sm:w-[5.5vw] left-[20vw] sm:left-[26vw] -top-[1.1vw] sm:-top-[1.1vw] mt-[1vw] mr-[1vw] bg-black z-40 text-white p-[0.5vw] rounded-lg hover:bg-[#1f978b] transition">
//             Start
//           </button>
//                 </AccordionItem>
//               ))}
//             </Accordion>
            
            
//           </div>
//         </div>

//         {/* Icon Button with Glassmorphism Effect */}
//         <button
//           className="absolute w-[9vw] sm:w-[5vw] h-[5vh] sm:h-[5vw] top-[4vw] sm:top-2 left-[91vw] sm:left-[83vw] rounded-full flex justify-center items-center focus:outline-none transform hover:scale-105 transition-transform duration-300"
//           style={{ 
//             background: 'linear-gradient(180deg, #34ACAE 0%, #164748 100%)',
//             backdropFilter: 'blur(15px)',
//             border: '1px solid rgba(255, 255, 255, 0.18)',
//           }} 
//         >
//           <img src={icon} alt="icon" className="w-[80%] h-[80%]" />
//         </button>

//         {/* Buttons Button */}
//         <div className=' relative z-10 '>
//               <img src={btn} alt="" className='absolute w-[8vw] bottom-[35vw] ' />
//               <img src={btn} alt="" className='absolute w-[8vw] bottom-[35vw] left-[10vw] ' />
//              </div>
//       </div>   
//     </ChakraProvider>
//   );
// }

// export default Blue;






import React, { useState } from 'react';
import earth from '../assets/earth.png'; 
import ring from '../assets/ring.png';
import road from '../assets/road.svg'; 
import btn from '../assets/btn.svg';
import icon from '../assets/icon.png';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, ChakraProvider } from '@chakra-ui/react'; // Import Chakra UI components

function Blue() {
  const [difficulty, setDifficulty] = useState('basics'); // State to manage difficulty level
  const [buttonLink, setButtonLink] = useState('#'); // State to manage button link

  // Function to update difficulty level and button link
  const handleDifficultyChange = (level, link) => {
    setDifficulty(level);
    setButtonLink(link);
  };

  return (
    <ChakraProvider>
      <div className="relative w-full h-[110vh] sm:h-[180vh]">
        <img src={earth} alt="Earth" className="w-full h-full object-cover" />

        {/* Glowing Ball */}
        <div className="absolute top-[30vw] sm:top-[14vw] left-[25vw] sm:left-[22vw] w-[4vw] h-[4vw] rounded-full bg-[#08d2f6]"
             style={{
               filter: 'brightness(200%) blur(1vw)',
               boxShadow: '0 0 10vw 6vw rgba(8,210,246,0.5)'
             }}></div>

        {/* Ring Image */}
        <img
          src={ring}
          alt="Ring"
          className="absolute w-[38vw] sm:w-[17vw] top-[5vw] sm:top-[3vw] left-[9vw] sm:left-[15vw]"
        />

        {/* Road Button */}
        <button 
          className="absolute w-[60vw] sm:w-[30vw] top-[7vw] sm:top-[4vw] -left-[3vw] sm:left-[9vw] focus:outline-none transform hover:scale-105 transition-transform duration-300"
        >
          <img src={road} alt="Road" className="w-full filter brightness-100" />
        </button>

        {/* Glassmorphism Button with Shiny Effect */}
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
                  className="relative w-[35vw] sm:w-[25vw] top-1 mb-[1vw] rounded-lg bg-gray-900 border border-gray-700"
                >
                  <h3>
                    <AccordionButton className="p-[0.5vw] bg-gray-800 rounded-t-lg">
                      <Box flex="1" textAlign="left" className="font-medium text-white text-[2.5vw] sm:text-[1vw]">
                        Level-{index + 1} {difficulty}
                      </Box>
                      <AccordionIcon color="white" />
                    </AccordionButton>
                  </h3>
                  <AccordionPanel className="p-[0.5vw] text-white text-[1vw] sm:text-[1vw]">
                    {/* Change content dynamically based on difficulty */}
                    {difficulty === 'basics' ? (
                      `This is the basic level content for Level ${index + 1}.`
                    ) : difficulty === 'medium' ? (
                      `This is the medium level content for Level ${index + 1}.`
                    ) : (
                      `This is the hard level content for Level ${index + 1}.`
                    )}
                  </AccordionPanel>

                  {/* "Start" Button for Each Accordion Item */}
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

        {/* Icon Button with Glassmorphism Effect */}
        <button
          className="absolute w-[9vw] sm:w-[5vw] h-[5vh] sm:h-[5vw] top-[4vw] sm:top-2 left-[91vw] sm:left-[83vw] rounded-full flex justify-center items-center focus:outline-none transform hover:scale-105 transition-transform duration-300"
          style={{ 
            background: 'linear-gradient(180deg, #34ACAE 0%, #164748 100%)',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
          }} 
        >
          <img src={icon} alt="icon" className="w-[80%] h-[80%]" />
        </button>

        {/* Buttons to Change Difficulty */}
        <div className='relative z-10'>
          <button 
            onClick={() => handleDifficultyChange('medium', 'https://github.com/')}
            className='absolute w-[18vw] bottom-[45vw]'
          >
            <img src={btn} alt="Medium" />
          </button>
          <button 
            onClick={() => handleDifficultyChange('hard', 'https://www.w3schools.com/')}
            className='absolute w-[18vw] bottom-[45vw] left-[10vw]'
          >
            <img src={btn} alt="Hard" />
          </button>
        </div>
      </div>   
    </ChakraProvider>
  );
}

export default Blue;
