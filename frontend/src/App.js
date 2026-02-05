import React, { useState, useEffect } from "react";

function App() {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const apiUrl =
      process.env.REACT_APP_API_URL || "http://localhost:5000/api/questions";
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch((err) => console.error("Error fetching questions:", err));
  }, []);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) setScore(score + 1);
    if (current + 1 < questions.length) setCurrent(current + 1);
    else setFinished(true);
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrent(0);
    setFinished(false);
  };

  if (questions.length === 0)
    return (
      <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "sans-serif" }}>
        <h2>Loading questions...</h2>
      </div>
    );

  if (finished)
    return (
      <div style={{ textAlign: "center", fontFamily: "sans-serif", marginTop: "50px" }}>
        <div
          style={{
            display: "inline-block",
            padding: "30px 50px",
            borderRadius: "10px",
            backgroundColor: "#f0f4f8",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h1>🎉 Quiz Finished!</h1>
          <p style={{ fontSize: "18px", margin: "20px 0" }}>
            Your score: {score}/{questions.length}
          </p>
          <button
            onClick={restartQuiz}
            style={{
              padding: "10px 25px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Restart Quiz
          </button>
        </div>
      </div>
    );

  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "sans-serif",
        marginTop: "50px",
      }}
    >
      <div
        style={{
          display: "inline-block",
          padding: "30px 50px",
          borderRadius: "10px",
          backgroundColor: "#f0f4f8",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          minHeight: "250px",
            width: "400px",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>📝 Quiz App</h1>
        <h2 style={{ marginBottom: "20px" }}>{questions[current].question}</h2>
        {questions[current].options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(opt)}
            style={{
              display: "block",
              width: "200px",
              margin: "10px auto",
              padding: "10px 0",
              backgroundColor: "#007bff",
              color: "black",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
          >
            {opt}
          </button>
        ))}
        <p style={{ marginTop: "20px", fontSize: "18px" }}>Score: {score}</p>
      </div>
    </div>
  );
}

export default App;
