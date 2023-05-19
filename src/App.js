import { useState } from "react";
import images from "./imgs";
import Gameboard from "./component/Gameboard";
import Header from "./component/Header";

function App() {
  const [nameArr, setNameArr] = useState(images);
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
    
    // Snippet from stack overflow 
    function shuffle(e, array) {
      let modifiedArr = [...array]
      let currentIndex = modifiedArr.length, randomIndex;
      
      // While there remain elements to shuffle.
      while (currentIndex !== 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [modifiedArr[currentIndex], modifiedArr[randomIndex]] = [
          modifiedArr[randomIndex], modifiedArr[currentIndex]];
      }
      
      if (selectedCharacters.includes(e.target.id)) {
        setScore(0);
        setSelectedCharacters([]);

      } else {
        setScore(score + 1);

        if (score === bestScore) setBestScore(bestScore + 1);
        

        setSelectedCharacters(prevValue => {
            return [...prevValue, e.target.id];
        });
      }

      
      setNameArr(modifiedArr);

  }

  return (
    <>
      <Header nameArr={nameArr} bestScore={bestScore} score={score}/>
      <Gameboard shuffle={shuffle} charactersNames={nameArr} setSelectedCharactes={selectedCharacters} nameArr={nameArr}/>
    </>
  );
}

export default App;
