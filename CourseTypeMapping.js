import React, { useState } from "react";

const CourseTypeMapping = () => {
  const [courseTypes] = useState(["Individual", "Group", "Special"]); // Mock data
  const [courses] = useState(["Hindi", "English", "Urdu"]); // Mock data
  const [mappedCourses, setMappedCourses] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  const addMapping = () => {
    if (selectedType && selectedCourse) {
      const mapping = `${selectedType}, ${selectedCourse}`;
      if (!mappedCourses.includes(mapping)) {
        setMappedCourses([...mappedCourses, mapping]);
      }
    }
  };

  const deleteMapping = (index) => {
    const updatedMappings = mappedCourses.filter((_, i) => i !== index);
    setMappedCourses(updatedMappings);
  };

  return (
    <div>
      <h2>Course Type Mapping</h2>
      <select onChange={(e) => setSelectedType(e.target.value)} defaultValue="">
        <option value="" disabled>Select Course Type</option>
        {courseTypes.map((type, index) => (
          <option key={index} value={type}>{type}</option>
        ))}
      </select>
      <select onChange={(e) => setSelectedCourse(e.target.value)} defaultValue="">
        <option value="" disabled>Select Course</option>
        {courses.map((course, index) => (
          <option key={index} value={course}>{course}</option>
        ))}
      </select>
      <button onClick={addMapping}>Add</button>
      <ul>
        {mappedCourses.map((mapping, index) => (
          <li key={index}>
            {mapping} <button onClick={() => deleteMapping(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseTypeMapping;
