import React, { useState } from 'react';
import Blue from './Blue'; // Excel course roadmap
import Purple from './Purple'; // Python course roadmap
import Brown from './Brown'; // MySQL course roadmap

function Roadmap() {
  // Suppose this is the user's selected courses (could come from server, or user selection)
  const selectedCourses = ['Excel', 'Python'];

  // Define all available courses and their corresponding components
  const courseComponents = {
    'Excel': <Blue />,
    'Python': <Purple />,
    'MySQL': <Brown />,
  };

  return (
    <div>
      {/* Loop through the selected courses and render only those components */}
      {selectedCourses.map((course) => courseComponents[course])}
    </div>
  );
}

export default Roadmap;
