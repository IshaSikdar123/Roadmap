import React from 'react';
import './App.css';
import Blue from './Components/Blue.jsx';
import Brown from './Components/Brown.jsx';
import Purple from './Components/Purple.jsx';
import Golden from './Components/Golden.jsx';
import DBlue from './Components/DBlue.jsx';
import White from './Components/White.jsx';
import Pink from './Components/Pink.jsx';

function App() {
  return (
    <div className="bg-red-900 ">
     
     <div className="mb-[8vh]">
        <Blue />
      </div>
      <div className= 'relative w-[10vw] h-[10vh] -top-6 bg-green-700'></div>
      {/* <div className="mb-[20vh] ">
        <Brown />
      </div>
       <div className="mb-[20vh]">
        <Purple />
      </div>
      <div className="mb-[20vh] ">
        <DBlue />
      </div>
      <div className="mb-[20vh] ">
        <White />
      </div>
      <div className="mb-[20vh] ">
        <Pink />
      </div>
      <div className="mb-[20vh]">
        <Golden />
      </div> */}
     
    </div>
  );
}

export default App;
