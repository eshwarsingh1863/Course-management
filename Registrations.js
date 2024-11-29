import React, { useState } from "react";

const Registrations = () => {
  const [courseMappings] = useState(["Individual, English", "Group, Hindi", "Special, Urdu"]); // Mock data
  const [filteredCourses, setFilteredCourses] = useState(courseMappings);
  const [selectedMapping, setSelectedMapping] = useState("");
  const [registrations, setRegistrations] = useState([]);
  const [studentName, setStudentName] = useState("");

  const filterCourses = (type) => {
    if (type) {
      setFilteredCourses(courseMappings.filter((mapping) => mapping.startsWith(type)));
    } else {
      setFilteredCourses(courseMappings);
    }
  };

  const addRegistration = () => {
    if (studentName.trim() && selectedMapping) {
      setRegistrations([...registrations, { name: studentName, course: selectedMapping }]);
      setStudentName("");
    }
  };

  return (
    <div>
      <h2>Student Registrations</h2>
      <select onChange={(e) => filterCourses(e.target.value)} defaultValue="">
        <option value="">All Course Types</option>
        {["Individual", "Group", "Special"].map((type, index) => (
          <option key={index} value={type}>{type}</option>
        ))}
      </select>
      <select onChange={(e) => setSelectedMapping(e.target.value)} defaultValue="">
        <option value="" disabled>Select Course</option>
        {filteredCourses.map((mapping, index) => (
          <option key={index} value={mapping}>{mapping}</option>
        ))}
      </select>
      <input
        type="text"
        value={studentName}
        placeholder="Enter Student Name"
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button onClick={addRegistration}>Register</button>
      <ul>
        {registrations.map((reg, index) => (
          <li key={index}>{reg.name} registered for {reg.course}</li>
        ))}
      </ul>
    </div>
  );
};

export default Registrations;
