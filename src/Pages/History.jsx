import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useSelector } from "react-redux";
import { selectResult } from "../store/slices/resultsSlice";

export const History = () => {
  const result = useSelector(selectResult);

  const middleProcent = Math.round(
    result.reduce((total, amount) => {
      return total + amount.procente;
    }, 0) / result.length
  );

  const styles = buildStyles({
    pathColor: `#394867`,
    textColor: "#212a3e",
    trailColor: "#d6d6d6",
  });

  return (
    <div className="history">
      {result.length === 0 ? (
        <h1 className="history-title">Your history is currently empty</h1>
      ) : (
        <div>
          <h1 className="history-title">Your history</h1>
          <table className="history-table">
            <thead>
              <tr className="history-table_header">
                <th className="history-item">Score</th>
                <th className="history-item">Percentage</th>
                <th className="history-item">Time</th>
              </tr>
            </thead>
            <tbody>
              {result.map((item, index) => (
                <tr key={index}>
                  <td className="history-data">{item.score}</td>
                  <td className="history-data">{item.procente}</td>
                  <td className="history-data">{item.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h1 className="history-title">Middle score</h1>
          <div className="history-circle" style={{ width: "10%" }}>
            <CircularProgressbar
              value={middleProcent}
              text={`${middleProcent}%`}
              styles={styles}
            />
          </div>
        </div>
      )}
    </div>
  );
};
