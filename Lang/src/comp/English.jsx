import React, { useState } from "react";

const EnglishAlphabets = () => {
  const alphabets = [
    { letter: "A", phonetic: "/eɪ/" }, { letter: "B", phonetic: "/biː/" },
    { letter: "C", phonetic: "/siː/" }, { letter: "D", phonetic: "/diː/" },
    { letter: "E", phonetic: "/iː/" }, { letter: "F", phonetic: "/ɛf/" },
    { letter: "G", phonetic: "/dʒiː/" }, { letter: "H", phonetic: "/eɪtʃ/" },
    { letter: "I", phonetic: "/aɪ/" }, { letter: "J", phonetic: "/dʒeɪ/" },
    { letter: "K", phonetic: "/keɪ/" }, { letter: "L", phonetic: "/ɛl/" },
    { letter: "M", phonetic: "/ɛm/" }, { letter: "N", phonetic: "/ɛn/" },
    { letter: "O", phonetic: "/oʊ/" }, { letter: "P", phonetic: "/piː/" },
    { letter: "Q", phonetic: "/kjuː/" }, { letter: "R", phonetic: "/ɑr/" },
    { letter: "S", phonetic: "/ɛs/" }, { letter: "T", phonetic: "/tiː/" },
    { letter: "U", phonetic: "/juː/" }, { letter: "V", phonetic: "/viː/" },
    { letter: "W", phonetic: "/ˈdʌb.əl.juː/" }, { letter: "X", phonetic: "/ɛks/" },
    { letter: "Y", phonetic: "/waɪ/" }, { letter: "Z", phonetic: "/ziː/" },
  ];

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

  const styles = {  
    container: {
      background: "linear-gradient(to right, #a855f7, #ec4899)",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
      color: "white",
    },
    nav: {
      background: "white",
      color: "#ec4899",
      padding: "10px",
      width: "100%",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "1.5rem",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      marginTop: "20px",
      textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
      gap: "20px",
      background: "white",
      color: "black",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      maxWidth: "800px",
      marginTop: "20px",
    },
    card: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "15px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.1)",
      transition: "background 0.3s",
    },
    letter: {
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#ec4899",
    },
    phonetic: {
      fontSize: "1.2rem",
      color: "#555",
      marginTop: "5px",
    },
    button: {
      marginTop: "20px",
      padding: "10px 20px",
      fontSize: "1.2rem",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      background: "#ec4899",
      color: "white",
    },
  };

  return (
    <div style={styles.container}>
      <nav style={styles.nav}>Languages bring people together</nav>
      <h1 style={styles.title}>ENGLISH ALPHABETS</h1>
      {!showQuiz ? (
        <>
          <div style={styles.grid}>
            {alphabets.map(({ letter, phonetic }) => (
              <div key={letter} style={styles.card}>
                <span style={styles.letter}>{letter}</span>
                <span style={styles.phonetic}>{phonetic}</span>
              </div>
            ))}
          </div>
          <button onClick={handleStartQuiz} style={styles.button}>Start Quiz</button>
        </>
      ) : (
        <div>
          <h2>What is the phonetic pronunciation of "{alphabets[quizIndex].letter}"?</h2>
          {alphabets.map(({ phonetic }) => (
            <button key={phonetic} style={styles.button} onClick={() => handleAnswer(phonetic)}>
              {phonetic}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default EnglishAlphabets;
