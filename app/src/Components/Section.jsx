import React from 'react';

const Section = ({ color, id }) => {
  return (
    <div className={`relative z-10 flex items-center justify-center w-20 h-20 rounded-full text-white text-xl font-bold ${color}`}>
      {id}
    </div>
  );
};

export default Section;
