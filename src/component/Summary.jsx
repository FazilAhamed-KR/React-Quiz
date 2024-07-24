import React from "react";
import QuizCompleted from "../assets/quiz-complete.png";
import Question from "../Data/Question";

const Summary = ({ userAnswer }) => {
  const skippedAnswers = userAnswer.filter((answer) => answer === null);
  const correctAnswers = userAnswer.filter(
    (answer, index) => answer === Question[index].answers[0]
  );

  const skippedAnswersShared = Math.round(
    (skippedAnswers.length / userAnswer.length) * 100
  );

  const correctAnswersShared = Math.round(
    (correctAnswers.length / userAnswer.length) * 100
  );

  const wrongAnswer = 100 - skippedAnswersShared - correctAnswersShared;
  return (
    <div id="summary">
      <img src={QuizCompleted} alt="Quiz Completed Image" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShared}%</span>
          <span className="text">Skipped Answers</span>
        </p>
        <p>
          <span className="number">{correctAnswersShared}%</span>
          <span className="text">Answered Correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswer}%</span>
          <span className="text">Answered Incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswer.map((answer, index) => {
          let cssClass = "user-answer";
          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === Question[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{Question[index].text}</p>
              <p className={cssClass}>{answer ?? "skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Summary;
