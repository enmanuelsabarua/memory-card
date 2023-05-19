import { useState } from "react";
import images from "../imgs";
import Card from "./Card";
import uniqid from 'uniqid';


function Gameboard() {
    const [nameArr, setNameArr] = useState(images);

    // Snippet from stack overflow 
    function shuffle(array) {
        let modifiedArr = [...array]
        let currentIndex = modifiedArr.length, randomIndex;
        
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
        
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
        
            // And swap it with the current element.
            [modifiedArr[currentIndex], modifiedArr[randomIndex]] = [
            modifiedArr[randomIndex], modifiedArr[currentIndex]];
        }
        
        setNameArr(modifiedArr);
    }

    return (
        <>
            <main className="Gameboard">
                {nameArr.map(characterName => <Card shuffle={shuffle} charactersNames={nameArr} characterName={characterName} key={uniqid()} />)}
            </main>
        </>
    );
}

export default Gameboard;