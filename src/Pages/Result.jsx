import { selectLastResult } from "../store/slices/resultsSlice";
import { useSelector } from "react-redux";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const Result = () => {
  const lastResult = useSelector(selectLastResult);

  const styles = buildStyles({
    pathColor: `#394867`,
    textColor: "#212a3e",
    trailColor: "#d6d6d6",
  });

  return (
    <div className="result">
      {lastResult === undefined ? (
        <h1 className="result-title">Currently, you don't have the result</h1>
      ) : (
        <div>
          <h1 className="result-title">Your result :</h1>

          <h1 className="result-data">Score : {lastResult.score}</h1>
          <div className="result-circle" style={{ width: "10%" }}>
            <CircularProgressbar
              value={lastResult.procente}
              text={`${lastResult.procente}%`}
              styles={styles}
            />
          </div>
          <h1 className="result-data">Time : {lastResult.time}</h1>
        </div>
      )}
    </div>
  );
};
