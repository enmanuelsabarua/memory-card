import '../styles/Header.css';

function Header({ score, bestScore }) {
    return (
        <>
          <header className='header'>
            <h1>Anime Memory Card Game</h1>

            <p className='description'>Get points by clicking on an image but don't click on any more than once!</p>
    
            <div className="scores">
              <p>Score: {score}</p>
              <p>Best Sore: {bestScore}</p>
            </div>

            <p className="winning"></p>
          </header>
        </>
      ); 
}

export default Header;