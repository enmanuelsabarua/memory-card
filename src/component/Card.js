
function Card({ characterName }) {
    return (
        <div>
            <div className="img">
                <img src={`../imgs/${characterName}.jpg`} alt="Anime Character" />
            </div>

            <h2>{characterName.replace('-', ' ')}</h2>
        </div>
    );
}

export default Card;