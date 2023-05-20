import '../styles/Card.css';

function Card({ characterName, shuffle, charactersNames }) {
    return (
        <div className='card'>
            <div className="img">
                <img src={`../imgs/${characterName}.jpg`} alt="Anime Character" id={characterName} onClick={(e) => shuffle(e, charactersNames)}/>
            </div>

            <h2>{characterName.replace('-', ' ')}</h2>
        </div>
    );
}

export default Card;