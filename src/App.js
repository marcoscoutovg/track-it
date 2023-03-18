import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import HistoricPage from "./pages/HistoricPage/HistoricPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import TodayPage from "./pages/TodayPage/TodayPage";
import { useState } from "react";
import { LevelContext } from "./LevelContext";

function App() {

  const [token, setToken] = useState("");
  const [image, setImage] = useState("");
  const [habitsList, setHabitsList] = useState([]);

  return (
    <LevelContext.Provider value={{token, setToken, image, setImage, habitsList, setHabitsList}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<RegisterPage />} />
          <Route path="/habitos" element={<HabitsPage />} />
          <Route path="/hoje" element={<TodayPage />} />
          <Route path="/historico" element={<HistoricPage />} />
        </Routes>
      </BrowserRouter>
    </LevelContext.Provider>
  );
}

export default App;
