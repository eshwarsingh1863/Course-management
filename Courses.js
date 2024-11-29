import React, { useState } from "react";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState("");

  const addCourse = () => {
    if (course.trim() && !courses.includes(course)) {
      setCourses([...courses, course]);
      setCourse("");
    }
  };

  const deleteCourse = (index) => {
    const updatedCourses = courses.filter((_, i) => i !== index);
    setCourses(updatedCourses);
  };

  return (
    <div>
      <h2>Courses</h2>
      <input
        type="text"
        value={course}
        placeholder="Enter Course Name"
        onChange={(e) => setCourse(e.target.value)}
      />
      <button onClick={addCourse}>Add</button>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            {course} <button onClick={() => deleteCourse(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
