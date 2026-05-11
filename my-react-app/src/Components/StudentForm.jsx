import React, { useState } from 'react';

const StudentForm = ({ onAddStudent }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cgpa, setCgpa] = useState('');
  const [studentId, setStudentId] = useState('');
  const [level, setLevel] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && cgpa && studentId && level && department) {
      const newStudent = {
        id: Date.now(), // simple unique id
        firstName,
        lastName,
        cgpa: parseFloat(cgpa),
        studentId,
        level,
        department,
      };
      onAddStudent(newStudent);
      // Reset form
      setFirstName('');
      setLastName('');
      setCgpa('');
      setStudentId('');
      setLevel('');
      setDepartment('');
    }
  };

  return (
    <div className="student-form">
      <h2>Register New Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>CGPA:</label>
          <input
            type="number"
            step="0.01"
            value={cgpa}
            onChange={(e) => setCgpa(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Student ID:</label>
          <input
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Level:</label>
          <input
            type="text"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Department:</label>
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register Student</button>
      </form>
    </div>
  );
};

export default StudentForm;