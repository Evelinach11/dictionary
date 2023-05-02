import { useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addToWords } from "../store/slices/wordsSlice";

export const AddToDictionary = () => {
  const [originalWord, setOriginalWord] = useState("");
  const [translateWord, setTranslateWord] = useState("");
  const refOriginal = useRef(null);
  const refTranslate = useRef(null);

  const dispatch = useDispatch();
  const isInputsFilled = originalWord && translateWord;

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleInputChangeOriginal = (event) => {
    setOriginalWord(event.target.value);
  };

  const handleInputChangeTranslate = (event) => {
    setTranslateWord(event.target.value);
  };

  const addNewWord = () => {
    dispatch(addToWords({ originalWord, translateWord }));
    alert(`Success add : ${originalWord} ${translateWord}`);
    cleareInputs();
  };

  function cleareInputs() {
    refOriginal.current.value = "";
    refTranslate.current.value = "";
  }

  return (
    <div className="add-word">
      <form onSubmit={handleSubmit}>
        <h1 className="add-word_title">Add new word</h1>
        <input
          className="add-word_input"
          type="text"
          placeholder="original"
          ref={refOriginal}
          onChange={handleInputChangeOriginal}
        ></input>
        <input
          className="add-word_input"
          type="text"
          placeholder="translate"
          ref={refTranslate}
          onChange={handleInputChangeTranslate}
        ></input>
        <button
          disabled={!isInputsFilled}
          onClick={addNewWord}
          className="add-word_btn"
        >
          add
        </button>
      </form>
    </div>
  );
};
