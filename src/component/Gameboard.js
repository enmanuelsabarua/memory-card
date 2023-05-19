import images from "../imgs";
import Card from "./Card";
import uniqid from 'uniqid';


function Gameboard() {
    return (
        <>
            <main className="Gameboard">
                {images.map(characterName => <Card characterName={characterName} key={uniqid()} />)}
            </main>
        </>
    );
}

export default Gameboard;