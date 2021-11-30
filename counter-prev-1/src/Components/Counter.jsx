import React from "react";
import { useState, useEffect } from "react";
const Counter = ({ initial }) => {
  const [value, setValue] = useState(initial);
  useEffect(() => {
    const id = setInterval(() => {
      setValue((prev) => {
        if (prev - 1 === 0) {
          clearInterval(id);
        }
        return prev - 1;
      });
    }, 1000);
  }, []);
  return (
    <div>
      <h1>Counter</h1>
      <h2>{value}</h2>
    </div>
  );
};
export default Counter;
