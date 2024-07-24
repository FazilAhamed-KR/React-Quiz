import React, { useCallback, useRef, useState } from "react";
import Question from "../Data/Question";
import Questions from "./Question";
import Summary from "./Summary";

const Quiz = () => {
  const [userAnswer, setUserAnswer] = useState([]);

  const askedQuestionIndex = userAnswer.length;
  const answerCompleted = askedQuestionIndex === Question.length;

  const handleClickAnswer = useCallback(
    (selectedAnswer) => {
      setUserAnswer((prev) => {
        return [...prev, selectedAnswer];
      });
    },
    [askedQuestionIndex]
  );

  const handleSkipQuestion = useCallback(
    () => handleClickAnswer(null),
    [handleClickAnswer]
  );

  if (answerCompleted) {
    return <Summary userAnswer={userAnswer} />;
  }

  return (
    <div id="quiz">
      <Questions
        key={askedQuestionIndex}
        index={askedQuestionIndex}
        handleClickAnswer={handleClickAnswer}
        handleSkipQuestion={handleSkipQuestion}
      />
    </div>
  );
};
export default Quiz;
