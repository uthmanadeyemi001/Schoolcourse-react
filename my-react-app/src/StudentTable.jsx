import React from 'react';

const StudentTable = ({ students }) => {
  return (
    <div className="student-table">
      <h2>Registered Students</h2>
      {students.length === 0 ? (
        <p>No students registered yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>CGPA</th>
              <th>Student ID</th>
              <th>Level</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.cgpa}</td>
                <td>{student.studentId}</td>
                <td>{student.level}</td>
                <td>{student.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentTable;
