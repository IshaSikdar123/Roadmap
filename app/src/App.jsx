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
        <Blue position={5} />

        <Brown position={7} />

        <Purple position={7} />
 
        <DBlue position={6} />

        <White position={6} />

        <Pink position={7} />

        <Golden position={6} /> 

     
    </div>
  );
}

export default App;