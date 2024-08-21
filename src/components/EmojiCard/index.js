// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachEmoji, onEmojiClick} = props
  const {emojiUrl, id} = eachEmoji

  const onClickImageButton = () => {
    onEmojiClick(id)
  }
  return (
    <li className="image-li-container">
      <button
        className="image-card-button"
        type="button"
        onClick={onClickImageButton}
      >
        <img src={emojiUrl} alt="logo" />
      </button>
    </li>
  )
}

export default EmojiCard
