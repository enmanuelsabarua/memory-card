function Header() {
    return (
        <>
          <header>
            <h1>Anime Memory Card Game</h1>

            <p>Get points by clicking on an image but don't click on any more than once!</p>
    
            <div className="scores">
              <p>Score: </p>
              <p>Best Sore: </p>
            </div>
          </header>
        </>
      ); 
}

export default Header;