
function App() {
  return (
    <>
    <h2> Dice Game <img width="64" height="64" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-dice-geek-culture-flaticons-lineal-color-flat-icons-5.png" alt="external-dice-geek-culture-flaticons-lineal-color-flat-icons-5"/></h2>

    <div className="main-container">
      <div className="players">

        {/* Player 1  */}
        <div className="player-1">
          <h3>Player 1</h3>
          <img width="96" height="96" src="https://img.icons8.com/windows/96/dice-one.png" alt="dice-one" id="p1" />
        </div>

        {/* Player 2  */}
        <div className="player-2">
          <h3>Player 2</h3>
          <img width="96" height="96" src="https://img.icons8.com/windows/96/dice-one.png" alt="dice-one" id="p2" />
        </div>
      </div>

      {/* Display Result */}
      <div id="result"> Winner :</div>

      <button>Roll The Dice</button>
    </div>
    </>
  )
}

export default App;
