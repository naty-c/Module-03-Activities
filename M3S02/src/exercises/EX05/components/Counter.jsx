// Exercise 05 - Counter

import React, { useState, useEffect } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Counter: ${count}`;
  }, [count]);

  return (
    <div className='counterContainer'>
      <h1>EX05 - Counter</h1>  
      <div className='counterButtons'>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}>Subtract</button>
      </div>
    </div>
  );
}

export default Counter;
