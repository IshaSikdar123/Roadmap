import { useState } from 'react';

const Roadmap = () => {
  // State for selected courses
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [showCities, setShowCities] = useState(false); // Whether to show the cities or not

  // List of courses and their corresponding cities
  const courseCityMapping = [
    { course: 'Excel', city: 'Blue' },
    { course: 'MySQL', city: 'Brown' },
    { course: 'Table', city: 'Purple' },
    { course: 'Python', city: 'Golden' },
    { course: 'Dashboard', city: 'DBlue' }
  ];

  // Toggle course selection
  const handleCourseSelection = (course) => {
    setSelectedCourses((prevSelected) =>
      prevSelected.includes(course)
        ? prevSelected.filter((c) => c !== course) // Remove if already selected
        : [...prevSelected, course] // Add if not selected
    );
  };

  // Show the cities based on selected courses
  const handleSubmit = () => {
    setShowCities(true); // Show the cities when submit is clicked
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">Choose Your Courses</h1>

      {/* Course Selection Buttons */}
      <div className="mb-8 space-x-4">
        {courseCityMapping.map((item) => (
          <button
            key={item.course}
            onClick={() => handleCourseSelection(item.course)}
            className={`px-4 py-2 rounded-lg font-semibold text-white 
              ${selectedCourses.includes(item.course) ? 'bg-blue-600' : 'bg-gray-500'} 
              hover:bg-blue-700 transition-all`}
          >
            {item.course}
          </button>
        ))}
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="px-6 py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-all"
      >
        Submit
      </button>

      {/* Displaying the Cities After Submitting */}
      {showCities && (
        <div className="flex flex-col space-y-4 mt-8">
          {selectedCourses.map((course) => {
            const city = courseCityMapping.find((item) => item.course === course)?.city;
            return (
              <div key={city} className={`w-full p-4 rounded-lg text-white text-center bg-${city.toLowerCase()}-500`}>
                {city} City ({course})
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Roadmap;
