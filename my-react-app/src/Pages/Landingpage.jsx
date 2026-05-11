import React, { useState } from 'react';
import StudentForm from '../Components/StudentForm';
import StudentTable from '../StudentTable';

const Landingpage = () => {
  const [students, setStudents] = useState([]);
  const [activeTab, setActiveTab] = useState('students');

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div className="school-portal">
      <header>
        <h1>SchoolPortal</h1>
        <nav>
          <span 
            className={activeTab === 'students' ? 'active' : ''}
            onClick={() => setActiveTab('students')}
          >
            Students
          </span>
          <span 
            className={activeTab === 'add' ? 'active' : ''}
            onClick={() => setActiveTab('add')}
          >
            Add Students
          </span>
        </nav>
      </header>
      <main>
        {activeTab === 'students' && <StudentTable students={students} />}
        {activeTab === 'add' && <StudentForm onAddStudent={addStudent} />}
      </main>
    </div>
  );
};

export default Landingpage;
