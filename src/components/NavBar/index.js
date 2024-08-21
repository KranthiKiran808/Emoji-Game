// Write your code here.
import './index.css'

const Navbar = props => {
  const {isFailed, score, topScore} = props
  const scoreCard = () => (
    <div className="scorecard-container">
      <p>Score: {score}</p>
      <p>Top Score: {topScore}</p>
    </div>
  )

  return (
    <div className="total-emoji-container">
      <div className="emoji-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <p>Emoji Game</p>
      </div>
      {isFailed && scoreCard()}
    </div>
  )
}

export default Navbar
