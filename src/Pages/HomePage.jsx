import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectWords } from "../store/slices/wordsSlice";
import { addDefaulWords } from "../store/slices/wordsSlice";

export const HomePage = () => {
  const [updatePage, setUpdatePage] = useState(false);
  const words = useSelector(selectWords);
  const dispatch = useDispatch();

  function fillDefaultWords() {
    dispatch(addDefaulWords());
    setUpdatePage(true);
  }

  return (
    <div className="home">
      {words.length === 0 ? (
        <div>
          <h1 className="home-title">
            Currently, you do not have words, you can add words custom or add
            default words
          </h1>
          <button className="home-btn" onClick={fillDefaultWords}>
            add default words
          </button>
        </div>
      ) : (
        <div>
          <table className="home-table">
            <thead>
              <tr className="home-table_header">
                <th className="home-item">English</th>
                <th className="home-item">Ukraine</th>
              </tr>
            </thead>
            <tbody>
              {words.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="home-word">{item.originalWord}</td>
                    <td className="home-word">{item.translateWord}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
