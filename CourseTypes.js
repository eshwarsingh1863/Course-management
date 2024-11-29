import React, { useState } from "react";

const CourseTypes = () => {
  const [courseTypes, setCourseTypes] = useState([]);
  const [type, setType] = useState("");

  const addCourseType = () => {
    if (type.trim() && !courseTypes.includes(type)) {
      setCourseTypes([...courseTypes, type]);
      setType("");
    }
  };

  const deleteCourseType = (index) => {
    const updatedTypes = courseTypes.filter((_, i) => i !== index);
    setCourseTypes(updatedTypes);
  };

  return (
    <div>
      <h2>Course Types</h2>
      <input
        type="text"
        value={type}
        placeholder="Enter Course Type"
        onChange={(e) => setType(e.target.value)}
      />
      <button onClick={addCourseType}>Add</button>
      <ul>
        {courseTypes.map((courseType, index) => (
          <li key={index}>
            {courseType} <button onClick={() => deleteCourseType(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseTypes;
