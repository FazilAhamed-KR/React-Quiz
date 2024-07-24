import React from "react";
import Quiz from "../assets/quiz-logo.png";

const Header = () => {
  return (
    <header>
      <img src={Quiz} alt="Quiz-logo" />
      <h1>ReactQuiz</h1>
    </header>
  );
};

export default Header;
