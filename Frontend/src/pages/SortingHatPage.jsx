import React from "react";
import "../Styles/App.css";
import "../Styles/Hat.css";




import SortingHatQuiz from "../components/SortingHatQuiz"; 


const SortingHatPage = () => {
  return (
    <div className="sorting-hat-quiz">
      <h2>Welcome to the Sorting Hat Quiz!</h2>
      <SortingHatQuiz />
    </div>
  );
};

export default SortingHatPage;
