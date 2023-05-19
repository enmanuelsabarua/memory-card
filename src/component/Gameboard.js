import '../styles/Gameboard.css';
import Card from "./Card";
import uniqid from 'uniqid';

function Gameboard({ shuffle, nameArr }) {
    return (
        <>
            <main className="gameboard">
                {nameArr.map(characterName => <Card shuffle={shuffle} charactersNames={nameArr} characterName={characterName} key={uniqid()} />)}
            </main>
        </>
    );
}

export default Gameboard;