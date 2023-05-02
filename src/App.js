import "./App.css";
import { Header } from "./Components/Header";
import { StartTest } from "./Pages/StartTest";
import { History } from "./Pages/History";
import { Result } from "./Pages/Result";
import { HomePage } from "./Pages/HomePage";
import { AddToDictionary } from "./Pages/AddToDictionary";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/addToDictionary" element={<AddToDictionary />} />
        <Route path="/start" element={<StartTest />} />
        <Route path="/history" element={<History />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
