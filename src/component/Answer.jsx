import React, { useRef } from "react";

const Answer = ({ answer, selectedAnswer, answerCheck, onSelected }) => {
  const shuffledAnswer = useRef();
  if (!shuffledAnswer.current) {
    shuffledAnswer.current = [...answer];
    shuffledAnswer.current.sort(() => Math.random() - 0.5);
  }

  return (
    <>
      <ul id="answers">
        {shuffledAnswer.current.map((answer) => {
          const isSelected = selectedAnswer === answer;
          let cssClassName = "";
          if (answerCheck === "answered" && isSelected) {
            cssClassName = "selected";
          }
          if (
            (answerCheck === "correct" || answerCheck === "wrong") &&
            isSelected
          ) {
            cssClassName = answerCheck;
          }
          return (
            <li key={answer} className="answer">
              <button
                onClick={() => onSelected(answer)}
                className={cssClassName}
                disabled={answerCheck !== ""}
              >
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Answer;
