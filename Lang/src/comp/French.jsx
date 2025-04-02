import React, { useState } from "react";

const alphabets = [
  { letter: "A", phonetic: "ah" }, { letter: "B", phonetic: "bay" },
  { letter: "C", phonetic: "say" }, { letter: "D", phonetic: "day" },
  { letter: "E", phonetic: "uh" }, { letter: "F", phonetic: "eff" },
  { letter: "G", phonetic: "zhay" }, { letter: "H", phonetic: "ash" },
  { letter: "I", phonetic: "ee" }, { letter: "J", phonetic: "zhee" },
  { letter: "K", phonetic: "kah" }, { letter: "L", phonetic: "ell" },
  { letter: "M", phonetic: "em" }, { letter: "N", phonetic: "en" },
  { letter: "O", phonetic: "oh" }, { letter: "P", phonetic: "pay" },
  { letter: "Q", phonetic: "koo" }, { letter: "R", phonetic: "air" },
  { letter: "S", phonetic: "ess" }, { letter: "T", phonetic: "tay" },
  { letter: "U", phonetic: "oo" }, { letter: "V", phonetic: "vay" },
  { letter: "W", phonetic: "doobluh-vay" }, { letter: "X", phonetic: "eeks" },
  { letter: "Y", phonetic: "ee-grek" }, { letter: "Z", phonetic: "zed" },
];

const FrenchAlphabets = () => {
  const [quizIndex, setQuizIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);

  const handleStartQuiz = () => {
    setShowQuiz(true);
    setQuizIndex(0);
    setScore(0);
  };

  const handleAnswer = (selectedPhonetic) => {
    if (selectedPhonetic === alphabets[quizIndex].phonetic) {
      setScore(score + 1);
    }
    if (quizIndex < alphabets.length - 1) {
      setQuizIndex(quizIndex + 1);
    } else {
      alert(`Quiz Completed! Your Score: ${score + 1}/${alphabets.length}`);
      setShowQuiz(false);
    }
  };

  return (
    <div style={{ background: "#f4f4f4", minHeight: "100vh", textAlign: "center", padding: "20px" }}>
      <nav style={{ background: "#d63384", padding: "15px", color: "white", fontWeight: "bold", fontSize: "1.5rem" }}>
        Languages bring people together
      </nav>
      <h1 style={{ fontSize: "3rem", marginTop: "20px", color: "#333" }}>FRENCH ALPHABETS</h1>
      {!showQuiz ? (
        <>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))", gap: "15px", maxWidth: "600px", margin: "20px auto", padding: "20px", background: "white", borderRadius: "10px", boxShadow: "0px 4px 6px rgba(0,0,0,0.1)" }}>
            {alphabets.map(({ letter, phonetic }) => (
              <div key={letter} style={{ padding: "15px", border: "1px solid #ddd", borderRadius: "8px", background: "#ffebf0", textAlign: "center" }}>
                <span style={{ fontSize: "2rem", fontWeight: "bold", color: "#d63384" }}>{letter}</span>
                <br />
                <span style={{ fontSize: "1.2rem", color: "#555" }}>{phonetic}</span>
              </div>
            ))}
          </div>
          <button onClick={handleStartQuiz} style={{ marginTop: "20px", padding: "10px 20px", fontSize: "1.2rem", border: "none", borderRadius: "5px", cursor: "pointer", background: "#d63384", color: "white" }}>Start Quiz</button>
        </>
      ) : (
        <div>
          <h2>What is the phonetic pronunciation of "{alphabets[quizIndex].letter}"?</h2>
          {alphabets.map(({ phonetic }) => (
            <button key={phonetic} style={{ margin: "5px", padding: "10px 15px", fontSize: "1rem", border: "1px solid #d63384", borderRadius: "5px", cursor: "pointer", background: "white", color: "#d63384" }} onClick={() => handleAnswer(phonetic)}>
              {phonetic}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FrenchAlphabets;