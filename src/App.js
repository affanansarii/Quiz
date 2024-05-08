import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import QuizSetup from './Components/Pages/QuizSetup/QuizSetup';
import Quiz from './Components/Pages/Quiz/Quiz';
import Leaderboard from './Components/Pages/Leaderboard/Leaderboard';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async(category = "", difficulty = "") => {
    const {data} = await axios.get(`https://opentdb.com/api.php?amount=10${category && `&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple`)
    setQuestions(data.results);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>

        <Routes>
          <Route path="/" element={<QuizSetup name={name} setName={setName} fetchQuestions={fetchQuestions} />}></Route>
          <Route path="/quiz" element={<Quiz name={name} questions={questions} score={score} setScore={setScore} setQuestions={setQuestions} />}></Route>
          <Route path="/leaderboard" element={<Leaderboard name={name} score={score} />}></Route>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
