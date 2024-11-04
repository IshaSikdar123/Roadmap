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
    <div>

      {/* Will call api here for getting selected path information then we'll render the cities */}

    {/* When displaying customized roadmap the position should always start from 1 irrespective of city component */ }
        <Blue position={7} />

        <Brown position={2} />
{/* 
        <Purple position={3} />

        <DBlue position={4} />

        <White position={5} />

        <Pink position={6} /> */}

        <Golden position={4} />

     
    </div>
  );
}

export default App;
