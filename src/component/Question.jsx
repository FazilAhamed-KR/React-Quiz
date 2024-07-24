import React, { useState } from "react";
import QuizTimer from "./QuizTimer";
import Answer from "./Answer";
import Question from "../Data/Question";

const Questions = ({ index, handleClickAnswer, handleSkipQuestion }) => {
  const [answers, setAnswers] = useState({
    selectedAnswers: "",
    isCorrect: null,
  });

  let timer = 10000;

  if (answers.selectedAnswers !== "") {
    timer = 1000;
  }

  if (answers.isCorrect !== null) {
    timer = 2000;
  }

  const handleSelect = (answers) => {
    setAnswers({
      selectedAnswers: answers,
      isCorrect: null,
    });

    const red = setTimeout(() => {
      setAnswers({
        selectedAnswers: answers,
        isCorrect: Question[index].answers[0] === answers,
      });

      setTimeout(() => {
        handleClickAnswer(answers);
      }, 2000);
    }, 1000);

    return () => {
      clearTimeout(red);
    };
  };

  let answerCheck = "";

  if (answers.selectedAnswers && answers.isCorrect !== null) {
    answerCheck = answers.isCorrect ? "correct" : "wrong";
  } else if (answers.selectedAnswers) {
    answerCheck = "answered";
  }

  return (
    <>
      <div id="question">
        <QuizTimer
          key={timer}
          timeout={timer}
          onTimeOut={answers.selectedAnswers === "" ? handleSkipQuestion : null}
          mode={answerCheck}
        />
        <h2>{Question[index].text}</h2>
        <Answer
          answer={Question[index].answers}
          answerCheck={answerCheck}
          selectedAnswer={answers.selectedAnswers}
          onSelected={handleSelect}
        />
      </div>
    </>
  );
};

export default Questions;
