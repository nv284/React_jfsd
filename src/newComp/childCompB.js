import React from 'react';

function ChildComponentB({ message, setMessage }) {
  return (
    <div>
      <h3>Child Component B</h3>
      <p>{message}</p>
      <button onClick={() => setMessage("Updated message from Child Component B")}>
        Update Message
      </button>
    </div>
  );
}

export default ChildComponentB;
