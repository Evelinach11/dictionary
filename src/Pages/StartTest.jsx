import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectWords } from "../store/slices/wordsSlice";
import { addResult } from "../store/slices/resultsSlice";
import { useDispatch } from "react-redux";

export const StartTest = () => {
  const countWords = 10;
  const words = useSelector(selectWords);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [currentWord, setCurrentWord] = useState(null);
  const [choices, setChoices] = useState([]);
  const [selectedChoice, setSelectedChoice] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [remains, setRemains] = useState(countWords);

  useEffect(() => {
    shuffleWords();
  }, []);

  useEffect(() => {
    decrementRemains();
  }, []);

  useEffect(() => {
    incrementCorrectAnswer();
  }, []);

  function decrementRemains() {
    setRemains(remains - 1);
  }

  function incrementCorrectAnswer() {
    setCorrectAnswers(correctAnswers + 1);
  }

  function handleAnswer(choice) {
    if (choice === currentWord) {
      incrementCorrectAnswer();
    }

    shuffleWords();

    decrementRemains();

    setSelectedChoice(false);

    if (remains === 0) {
      finishTest();
    }
  }

  function shuffleWords() {
    const shuffledWords = [...words].sort(() => Math.random() - 0.5);
    const randomWords = shuffledWords.slice(0, countWords);

    const randomIndex = Math.floor(Math.random() * randomWords.length);
    const current = randomWords[randomIndex];

    const incorrectChoices = shuffledWords
      .filter((word) => word !== current)
      .slice(0, 3);

    const allChoices = [...incorrectChoices, current].sort(
      () => Math.random() - 0.5
    );

    setCurrentWord(current);
    setChoices(allChoices);
  }

  function finishTest() {
    const proc = (100 * correctAnswers) / countWords;
    const testResult = {
      score: `${correctAnswers}/${countWords}`,
      procente: proc,
      time: new Date().toLocaleTimeString(),
    };
    dispatch(addResult(testResult));
    navigate("/result");
  }

  return (
    <div>
      {words.length < 10 ? (
        <h1 className="start-test_title">You need to add at least 10 words</h1>
      ) : (
        <div>
          <h1 className="start-test_head_title">
            Check your knowledge
            <span>{`: ${countWords - remains}/${countWords}`}</span>
          </h1>
          {currentWord && (
            <div className="start-test">
              <h1 className="start-test_title">{currentWord.originalWord}</h1>
              <ul className="start-test_answer">
                {choices.map((choice, index) => (
                  <li className="start-test_list" key={index}>
                    <label>
                      <input
                        type="radio"
                        checked={selectedChoice}
                        onChange={() => setSelectedChoice(false)}
                        onClick={() => handleAnswer(choice)}
                      />
                      <span className="start-test_choice">
                        {choice.translateWord}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
