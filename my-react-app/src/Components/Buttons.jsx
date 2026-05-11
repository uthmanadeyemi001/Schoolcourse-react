import React from 'react'

const Buttons = ({ student, background }) => {
  return (
    <div>
      <button
        onClick={student}
        style={{ backgroundColor: background || 'purple' }}
      >
        Click
      </button>
    </div>
  )
}

export default Buttons

