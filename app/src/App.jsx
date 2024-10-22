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
    <div className="bg-red-900">
      <div className="mb-[20vh] bg-green-400">
        <Blue />
      </div>
      <div className="mb-[20vh] bg-yellow-400">
        <Brown />
      </div>
      <div className="mb-[20vh] bg-purple-300">
        <Purple />
      </div>
      <div className="mb-[20vh] bg-teal-500">
        <DBlue />
      </div>
      <div className="mb-[20vh] bg-pink-500">
        <White />
      </div>
      <div className="mb-[20vh] bg-indigo-400">
        <Pink />
      </div>
      <div className="mb-[20vh] bg-orange-300">
        <Golden />
      </div>
    </div>
  );
}

export default App;
