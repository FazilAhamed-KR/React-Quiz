import React, { useEffect, useState } from "react";

const QuizTimer = ({ timeout, onTimeOut, mode }) => {
  const [remaningTime, setRemaningTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeOut, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeOut]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaningTime((prev) => prev - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <progress
      id="question-time"
      max={timeout}
      value={remaningTime}
      mode={mode}
    />
  );
};

export default QuizTimer;
