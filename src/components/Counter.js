import React, { useState } from "react";
//Hook
export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <br />
      Counter: {count}
    </div>
  );
}
