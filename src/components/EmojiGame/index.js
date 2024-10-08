import './index.css'
import {Component} from 'react'
import Navbar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinorLoseCard'

class EmojiGame extends Component {
  state = {
    isFailed: true,
    score: 0,
    topScore: 0,
    clickedEmojis: [],
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  handleEmojiClick = id => {
    this.setState(prevState => {
      const {clickedEmojis, score, topScore} = prevState

      if (clickedEmojis.includes(id)) {
        return {isFailed: !prevState.isFailed}
      }

      const updatedScore = score + 1
      const updatedTopScore = updatedScore > topScore ? updatedScore : topScore

      if (updatedScore === 12) {
        return {
          isFailed: false,
          score: updatedScore,
          topScore: updatedTopScore,
          clickedEmojis: [...clickedEmojis, id],
        }
      }
      return {
        clickedEmojis: [...clickedEmojis, id],
        score: updatedScore,
      }
    })
  }

  gameCard = () => {
    const shuffledList = this.shuffledEmojisList()
    return (
      <section>
        <ul className="ul-emoji-container">
          {shuffledList.map(eachEmoji => (
            <EmojiCard
              eachEmoji={eachEmoji}
              key={eachEmoji.id}
              onEmojiClick={this.handleEmojiClick}
            />
          ))}
        </ul>
      </section>
    )
  }

  playAgain = () => {
    this.setState(prevState => {
      const {score, topScore} = prevState
      
      const updatedTopScore = score > topScore ? score : topScore
      return {
      isFailed: !prevState.isFailed,
      score: 0,
      topScore:updatedTopScore,
      clickedEmojis: [],
      }
    })
  }

  winOrLoseCard = () => {
    const {score, topScore} = this.state
    return <WinOrLoseCard score={score} playAgain={this.playAgain} topScore={topScore}/>
  }

  render() {
    const {isFailed, score, topScore} = this.state
    return (
      <div className="game-bg-container">
        <Navbar isFailed={isFailed} score={score} topScore={topScore} />
        {isFailed ? this.gameCard() : this.winOrLoseCard()}
      </div>
    )
  }
}

export default EmojiGame
