// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, playAgain} = props
  const onClickPlayAgain = () => {
    playAgain()
  }
  return (
    <section>
      <div className="win-or-lose-card">
        <div className="score-details">
          <h1>You {score === 12 ? 'Won' : 'Lose '}</h1>
          <h3>Best Score</h3>
          <h1 className="score">{score}/12</h1>
          <button type="button" onClick={onClickPlayAgain}>
            Play Again
          </button>
        </div>
        {score === 12 ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            alt="won"
          />
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            alt="lose"
          />
        )}
      </div>
    </section>
  )
}

export default WinOrLoseCard
