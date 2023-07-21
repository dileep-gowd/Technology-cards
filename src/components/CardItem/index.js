// Write your code here.

import './index.css'

const Card = props => {
  const {cardItem} = props
  const {title, description, imgUrl, className} = cardItem
  return (
    <li className={className}>
      <div className="cardCont-2">
        <h1 className="hd">{title}</h1>
        <p className="ph">{description}</p>
        <img src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default Card
