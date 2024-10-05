// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {Thumbnail, onClickButton} = props

  const {thumbnailUrl, id, thumbnailAltText} = Thumbnail
  const clickBUtton = () => {
    onClickButton(id)
  }

  return (
    <li>
      <button type="button" className="button" onClick={clickBUtton}>
        {' '}
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
      activeImage
    </li>
  )
}

export default ThumbnailItem
