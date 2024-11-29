import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CourseTypes from './components/CourseTypes';
import Courses from './components/Courses';
import CourseTypeMapping from './components/CourseTypeMapping';
import Registrations from './components/Registrations';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/course-types">Course Types</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/course-type-mapping">Course Type Mapping</Link></li>
            <li><Link to="/registrations">Student Registrations</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/course-types" element={<CourseTypes />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course-type-mapping" element={<CourseTypeMapping />} />
          <Route path="/registrations" element={<Registrations />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
