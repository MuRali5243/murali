import './index.css'

const TabItem = props => {
  const {det, onchange, active} = props
  console.log(active)
  const {displayText, tabId} = det
  const onChan = () => {
    onchange(tabId)
  }
  const classname = active ? 'activeBtn' : 'nonActiveBtn'

  return (
    <li>
      <button className={classname} type="button" onClick={onChan}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
