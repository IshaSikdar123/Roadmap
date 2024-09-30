import React from 'react'
import earth2 from '../assets/earth2.png';
import road2 from '../assets/road2.svg';
import icon from '../assets/icon.png';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, ChakraProvider } from '@chakra-ui/react'; // Import Chakra UI components


function Brown() {
  return (
    <div  className="relative w-full h-[110vh] sm:h-[180vh]">
       <img src={earth2} alt="Earth" className="w-full h-full object-cover" />
    
     {/* Glowing Ball */}
     <div className="absolute top-[30vw] sm:top-[14vw] left-[25vw] sm:left-[70vw] w-[4vw] h-[4vw] rounded-full bg-[#A55001]"
             style={{
               filter: 'brightness(300%) blur(1vw)',
               boxShadow: '0 0 10vw 8vw rgba(153, 0, 0, 1)'
             }}></div>

        {/* Road Button */}
        <button 
          className="absolute w-[60vw] sm:w-[30vw] top-[7vw] sm:top-5 -left-[3vw] sm:left-[57vw] focus:outline-none transform hover:scale-105 transition-transform duration-300"
        >
          <img src={road2} alt="Road" className="w-full filter brightness-100" />
        </button>

        <div className="absolute w-[45vw] sm:w-[40vw] h-[35vh] sm:h-[60vh] top-[6vw] sm:top-[2vw] left-[54vw] sm:left-[5vw] rounded-lg shadow-lg overflow-hidden backdrop-blur-lg border border-white border-opacity-20"
     style={{ 
        background: 'linear-gradient(200deg, rgba(153, 0, 0, 0.8) 30%, rgba(165, 80, 1, 0.8) 100%)',
        opacity: '0.8',
        backdropFilter: 'blur(25px)',
        backgroundColor: 'rgba(165, 80, 1, 1)', // Fallback background
        border: '2px solid rgba(255, 255, 255, 0.18)', // Light border for glass look
     }}>


 


          <h1 className="text-white text-[5vw] sm:text-[3vw] font-semibold m-1 sm:m-1 ml-1 sm:ml-5 ">MYSQL</h1>

          <div className=" sm:w-[85%] h-[75%] m-[1vw] bg-black bg-opacity-20 rounded-md p-[1vw] overflow-y-auto">
            <h2 className=" text-white font-medium text-[3vw] sm:text-[1.5vw] mb-[1vw]">This Course includes</h2>
           
            <Accordion allowToggle>
              {Array.from({ length: 10 }).map((_, index) => (
                <AccordionItem
                  key={index} 
                  className=" relative w-[35vw] sm:w-[25vw] top-1 mb-[1vw] rounded-lg bg-gray-900 border border-gray-700"
                >
                  <h3>
                    <AccordionButton className="p-[0.5vw] bg-gray-800 rounded-t-lg">
                      <Box flex="1" textAlign="left" className="font-medium text-white text-[2.5vw] sm:text-[1vw]">
                        Level-{index + 1} basics
                      </Box>
                      <AccordionIcon color="white" />
                    </AccordionButton>
                  </h3>
                  <AccordionPanel className="p-[0.5vw] text-white text-[1vw] sm:text-[1vw]">
                    This is the content of Accordion Section {index + 1}. Content goes here and may exceed the defined height to test scrolling inside the panel.
                  </AccordionPanel>
                  <button
            className="hidden sm:block absolute w-[2vw] sm:w-[5.5vw] left-[20vw] sm:left-[26vw] -top-[1.1vw] sm:-top-[1.1vw] mt-[1vw] mr-[1vw] bg-black z-40 text-white p-[0.5vw] rounded-lg hover:bg-[#1f978b] transition">
            Start
          </button>
                </AccordionItem>
              ))}
            </Accordion>
            
            
          </div>
        </div>

        

</div>


   

  )
}

export default Brown
