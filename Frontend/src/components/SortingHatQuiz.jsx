import React, { useState } from "react";
import "../Styles/Hat.css";


const questions = [
  {
    question: "What trait do you value the most?",
    options: [
      { text: "Courage and bravery", house: "Gryffindor" },
      { text: "Wisdom and knowledge", house: "Hufflepuff" },
      { text: "Loyalty and kindness", house: "Ravenclaw" },
      { text: "Ambition and determination", house: "Slytherin" }
    ]
  },
  {
    question: "How do you handle competition?",
    options: [
      { text: "I thrive on it and love to win", house: "Gryffindor" },
      { text: "I learn from it and aim to improve", house: "Hufflepuff" },
      { text: "I focus on how it can help me grow.", house: "Ravenclaw" },
      { text: "I prefer collaboration over competition", house: "Slytherin" }
    ]
  },
  {
    question: "Which of these magical items would you like to own??",
    options: [
      { text: "The Sword of Gryffindor", house: "Gryffindor" },
      { text: "The Ravenclaw Diadem", house: "Hufflepuff" },
      { text: "The Invisibility Cloak", house: "Ravenclaw" },
      { text: "A Time-Turner", house: "Slytherin" }
    ]
  }
];

const houseImages = {
  Gryffindor: "gry.png",  
  Hufflepuff: "huf.png",
  Ravenclaw: "rav.png",
  Slytherin: "sly.png"
};

const SortingHatQuiz = () => {
  const [answers, setAnswers] = useState([]);
  const [house, setHouse] = useState("");

  const handleAnswer = (house) => {
    setAnswers([...answers, house]);

    if (answers.length === questions.length - 1) {
      calculateHouse([...answers, house]);
    }
  };

  const calculateHouse = (finalAnswers) => {
    const houseCounts = finalAnswers.reduce((acc, house) => {
      acc[house] = (acc[house] || 0) + 1;
      return acc;
    }, {});

    const sortedHouse = Object.keys(houseCounts).reduce((a, b) =>
      houseCounts[a] > houseCounts[b] ? a : b
    );

    setHouse(sortedHouse);
  };

  return (
    <div className="sorting-hat-quiz">
      <img className="hat" src="Sorting-hat.webp" alt="" />
      <h2 className="hat-h2"> Which House is Yours?</h2>
      {house ? (
        <div>
<h3 className="hat-h3">Congratulations! You belong to {house}!</h3>
<img
          className="house-img"
            src={`/${houseImages[house]}`}
            alt={house}
            style={{ width: "200px", height: "200px" }}
          />
          <button className="hat-btn" onClick={() => { setHouse(""); setAnswers([]); }}>Try Again</button>
        </div>
      ) : (
        <div >
          <h3 ClassName="hat-h3">{questions[answers.length].question}</h3>
          {questions[answers.length].options.map((option, index) => (
            <button  className="hat-btn" key={index} onClick={() => handleAnswer(option.house)}>
              {option.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortingHatQuiz;
