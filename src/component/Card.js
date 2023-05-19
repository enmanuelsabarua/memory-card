
function Card({ characterName, shuffle, charactersNames }) {
    return (
        <div>
            <div className="img" onClick={() => shuffle(charactersNames)}>
                <img src={`../imgs/${characterName}.jpg`} alt="Anime Character" />
            </div>

            <h2>{characterName.replace('-', ' ')}</h2>
        </div>
    );
}

export default Card;