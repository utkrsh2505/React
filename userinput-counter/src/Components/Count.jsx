import React from "react";

import { useState } from "react";
function Count() {
  const [state, setState] = useState({
    startTime: 0,
    endTime: 0
  });
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState(state.startTime);

  function handleChange(e) {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value
    });
  }
  const handleStart = () => {
    setIsLoading(false);
    setValue(Number(state.startTime));

    let intervalId = setInterval(() => {
      setValue((prev) => {
        console.log(prev + 1, state.endTime);
        if (prev + 1 == state.endTime) {
          clearInterval(intervalId);
          setIsLoading(true);
        }
        return prev + 1;
      });
    }, 1000);
    return () => {
      clearInterval(intervalId);
      setIsLoading(true);
    };
  };
  console.log(state);

  return isLoading ? (
    <div>
      <input
        type="number"
        placeholder="Start Time"
        name="startTime"
        value={state.startTime}
        onChange={handleChange}
      />
      <br />
      <input
        type="number"
        placeholder="Enter end Time"
        name="endTime"
        value={state.endTime}
        onChange={handleChange}
      />

      <button onClick={handleStart}>Start</button>
    </div>
  ) : (
    <div>
      <h1>Countdown</h1>
      {value}
    </div>
  );
}
export default Count;
