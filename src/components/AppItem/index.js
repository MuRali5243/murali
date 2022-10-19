import './index.css'

const Item = props => {
  const {det} = props
  const {appName, imageUrl, category} = det
  return (
    <li className="icons">
      <img className="icons-img" src={imageUrl} alt={appName} />
      <p>{appName}</p>
    </li>
  )
}

export default Item
