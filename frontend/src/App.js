import React, { useState, useEffect } from "react";

function App() {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;  // reads from .env
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => setQuestions(data));
  }, []);
  

  const handleAnswer = (option) => {
    if(option === questions[current].answer) setScore(score + 1);
    if(current + 1 < questions.length) setCurrent(current + 1);
    else setFinished(true);
  };

  if(questions.length === 0) return <div>Loading...</div>;
  if(finished) return <div><h1>Quiz Finished!</h1><p>Your score: {score}/{questions.length}</p></div>;

  return (
    <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
      <h1>Quiz App</h1>
      <h2>{questions[current].question}</h2>
      {questions[current].options.map((opt, idx) => (
        <button key={idx} onClick={() => handleAnswer(opt)} style={{ margin: "5px", padding: "10px 20px" }}>{opt}</button>
      ))}
      <p>Score: {score}</p>
    </div>
  );
}

export default App;
